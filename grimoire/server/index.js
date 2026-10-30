import express from 'express'
import { pool, initDb } from './db.js'

const app = express()
app.use(express.json())

app.get('/api/notes', async (req, res) => {
  const { section } = req.query
  if (!section) return res.status(400).json({ error: 'section is required' })

  const { rows } = await pool.query(
    'SELECT id, title, body, created_at FROM notes WHERE section = $1 ORDER BY created_at DESC, id DESC',
    [section]
  )
  res.json(rows)
})

app.post('/api/notes', async (req, res) => {
  const { section, title = '', body = '' } = req.body ?? {}
  if (!section) return res.status(400).json({ error: 'section is required' })

  const { rows } = await pool.query(
    'INSERT INTO notes (section, title, body) VALUES ($1, $2, $3) RETURNING id, title, body, created_at',
    [section, title, body]
  )
  res.status(201).json(rows[0])
})

app.delete('/api/notes/:id', async (req, res) => {
  if (!/^\d+$/.test(req.params.id)) return res.status(400).json({ error: 'invalid note id' })

  const { rowCount } = await pool.query('DELETE FROM notes WHERE id = $1', [req.params.id])
  if (rowCount === 0) return res.status(404).json({ error: 'note not found' })
  res.status(204).end()
})

// Express identifies error handlers by their 4-argument signature
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: 'internal server error' })
})

const port = process.env.PORT ?? 3001

await initDb()
app.listen(port, () => console.log(`API listening on http://localhost:${port}`))
