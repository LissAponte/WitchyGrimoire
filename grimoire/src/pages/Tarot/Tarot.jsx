import NotesList from '../../components/NotesList/NotesList'
import './Tarot.css'

function Tarot() {
  return (
    <div className="tarot-page">
      <h1 className="heading-xl">Tarot Journal</h1>
      <p className="text-muted">Log daily pulls, add interpretations, and track patterns over time.</p>
      <NotesList storageKey="notes-tarot" />
    </div>
  )
}

export default Tarot
