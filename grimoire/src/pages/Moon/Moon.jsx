import NotesList from '../../components/NotesList/NotesList'
import './Moon.css'

function Moon() {
  return (
    <div className="moon-page">
      <h1 className="heading-xl">Moon Journal</h1>
      <p className="text-muted">Track moon phases, log intentions, and reflect on your lunar cycle.</p>
      <NotesList storageKey="notes-moon" />
    </div>
  )
}

export default Moon
