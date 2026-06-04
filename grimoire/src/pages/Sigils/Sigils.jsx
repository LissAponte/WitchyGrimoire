import NotesList from '../../components/NotesList/NotesList'
import './Sigils.css'

function Sigils() {
  return (
    <div className="sigils-page">
      <h1 className="heading-xl">Sigils</h1>
      <p className="text-muted">Create and study magical symbols and their meanings.</p>
      <NotesList storageKey="notes-sigils" />
    </div>
  )
}

export default Sigils
