import { readFile } from 'node:fs/promises'
import pg from 'pg'

// Uses DATABASE_URL if set, otherwise the standard PG* env vars (PGHOST, PGDATABASE, ...)
export const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })

export async function initDb() {
  const schema = await readFile(new URL('./schema.sql', import.meta.url), 'utf8')
  await pool.query(schema)
}
