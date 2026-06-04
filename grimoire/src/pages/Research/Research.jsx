import NotesList from '../../components/NotesList/NotesList'
import './Research.css'

function Research() {
  return (
    <div className="research-page">
      <h1 className="heading-xl">Research</h1>
      <p className="text-muted">Explore magical topics, traditions, history, and deepen your practice.</p>
      <NotesList storageKey="notes-research" />
    </div>
  )
}

export default Research
