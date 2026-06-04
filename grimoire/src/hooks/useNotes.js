import { useState, useEffect } from 'react'

export function useNotes(storageKey) {
  const [notes, setNotes] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(storageKey) ?? '[]')
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(notes))
  }, [notes, storageKey])

  const addNote = (title, body) => {
    setNotes(prev => [{ id: Date.now(), title, body }, ...prev])
  }

  const deleteNote = (id) => {
    setNotes(prev => prev.filter(n => n.id !== id))
  }

  return { notes, addNote, deleteNote }
}
