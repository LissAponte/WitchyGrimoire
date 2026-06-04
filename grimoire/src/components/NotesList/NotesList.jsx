import { useState } from 'react'
import { useNotes } from '../../hooks/useNotes'
import './NotesList.css'

function NotesList({ storageKey }) {
  const { notes, addNote, deleteNote } = useNotes(storageKey)
  const [title, setTitle] = useState('')
  const [body, setBody]   = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() && !body.trim()) return
    addNote(title.trim(), body.trim())
    setTitle('')
    setBody('')
  }

  return (
    <div className="notes-container">
      <h2 className="heading-md notes-heading">Notes</h2>

      <form className="notes-form" onSubmit={handleSubmit}>
        <input
          className="input notes-title-input"
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          className="textarea notes-body-input"
          placeholder="Write your note here…"
          value={body}
          onChange={e => setBody(e.target.value)}
          rows={4}
        />
        <button type="submit" className="btn btn-primary notes-submit">
          Add Note
        </button>
      </form>

      {notes.length === 0 ? (
        <p className="empty-state">No notes yet. Add one above.</p>
      ) : (
        <ul className="notes-list">
          {notes.map(note => (
            <li key={note.id} className="note-item card">
              <div className="card-header note-item-header">
                <span className="note-item-title">{note.title || <em className="text-muted">Untitled</em>}</span>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteNote(note.id)}
                  aria-label="Delete note"
                >
                  Delete
                </button>
              </div>
              {note.body && (
                <div className="card-body">
                  <p className="note-item-body">{note.body}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default NotesList
