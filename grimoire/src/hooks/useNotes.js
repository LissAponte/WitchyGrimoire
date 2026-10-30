import { useState, useEffect } from 'react'

export function useNotes(section) {
  const [notes, setNotes] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    let ignore = false
    fetch(`/api/notes?section=${encodeURIComponent(section)}`)
      .then(res => {
        if (!res.ok) throw new Error(`Failed to load notes (${res.status})`)
        return res.json()
      })
      .then(data => { if (!ignore) setNotes(data) })
      .catch(err => { if (!ignore) setError(err.message) })
    return () => { ignore = true }
  }, [section])

  const addNote = async (title, body) => {
    try {
      const res = await fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ section, title, body }),
      })
      if (!res.ok) throw new Error(`Failed to save note (${res.status})`)
      const note = await res.json()
      setNotes(prev => [note, ...prev])
      setError(null)
    } catch (err) {
      setError(err.message)
    }
  }

  const deleteNote = async (id) => {
    try {
      const res = await fetch(`/api/notes/${id}`, { method: 'DELETE' })
      if (!res.ok && res.status !== 404) throw new Error(`Failed to delete note (${res.status})`)
      setNotes(prev => prev.filter(n => n.id !== id))
      setError(null)
    } catch (err) {
      setError(err.message)
    }
  }

  return { notes, error, addNote, deleteNote }
}
