import NotesList from '../../components/NotesList/NotesList'
import './Grimoire.css'

function Grimoire() {
  return (
    <div className="grimoire-page">
      <h1 className="heading-xl">Spell Book</h1>
      <p className="text-muted">Create, organize, and search your spells and rituals.</p>
      <NotesList section="grimoire" />
    </div>
  )
}

export default Grimoire
