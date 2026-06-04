import NotesList from '../../components/NotesList/NotesList'
import './Spell.css'

function Spells() {
  return (
    <div className="spell-page">
      <h1 className="heading-xl">Spells</h1>
      <p className="text-muted">Explore magical topics, traditions, history, and deepen your practice.</p>
      <NotesList storageKey="notes-spells" />
    </div>
  )
}

export default Spells
