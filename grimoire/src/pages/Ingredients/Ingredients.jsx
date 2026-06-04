import NotesList from '../../components/NotesList/NotesList'
import './Ingredients.css'

function Ingredients() {
  return (
    <div className="ingredients-page">
      <h1 className="heading-xl">Ingredients</h1>
      <p className="text-muted">Herbs, crystals, colors, planets, elements and their magical properties.</p>
      <NotesList storageKey="notes-ingredients" />
    </div>
  )
}

export default Ingredients
