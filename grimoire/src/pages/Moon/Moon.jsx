import SunCalc from 'suncalc'
import NotesList from '../../components/NotesList/NotesList'
import './Moon.css'

const PHASE_NAMES = [
  { max: 0.0625, emoji: '🌑', name: 'New Moon' },
  { max: 0.1875, emoji: '🌒', name: 'Waxing Crescent' },
  { max: 0.3125, emoji: '🌓', name: 'First Quarter' },
  { max: 0.4375, emoji: '🌔', name: 'Waxing Gibbous' },
  { max: 0.5625, emoji: '🌕', name: 'Full Moon' },
  { max: 0.6875, emoji: '🌖', name: 'Waning Gibbous' },
  { max: 0.8125, emoji: '🌗', name: 'Last Quarter' },
  { max: 0.9375, emoji: '🌘', name: 'Waning Crescent' },
  { max: 1.0,    emoji: '🌑', name: 'New Moon' },
]

function getMoonPhase(date) {
  const { phase, fraction } = SunCalc.getMoonIllumination(date)
  const entry = PHASE_NAMES.find(p => phase <= p.max)
  return { ...entry, illumination: Math.round(fraction * 100) }
}

function Moon() {
  const today = new Date()
  const { emoji, name, illumination } = getMoonPhase(today)

  return (
    <div className="moon-page">
      <h1 className="heading-xl">Moon Journal</h1>

      <div className="moon-phase-card">
        <span className="moon-phase-emoji">{emoji}</span>
        <div className="moon-phase-info">
          <span className="moon-phase-name">{name}</span>
          <span className="moon-phase-illumination">{illumination}% illuminated</span>
        </div>
      </div>

      <p className="text-muted">Track moon phases, log intentions, and reflect on your lunar cycle.</p>
      <NotesList storageKey="notes-moon" />
    </div>
  )
}

export default Moon
