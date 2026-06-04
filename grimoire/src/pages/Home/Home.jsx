import { Link } from 'react-router-dom'
import './Home.css'

const sections = [
  { to: '/grimoire',    label: 'Spell Book',   icon: '📖', desc: 'Browse and write your spells' },
  { to: '/ingredients', label: 'Ingredients',  icon: '🌿', desc: 'Manage your magical components' },
  { to: '/moon',        label: 'Moon',          icon: '🌙', desc: 'Track lunar phases and rituals' },
  { to: '/tarot',       label: 'Tarot',         icon: '🃏', desc: 'Draw and interpret tarot cards' },
  { to: '/Research',    label: 'Research',      icon: '🔮', desc: 'Explore witchy knowledge' },
  { to: '/Sigils',      label: 'Sigils',        icon: '✦',  desc: 'Create and store your sigils' },
  {to: '/Spells', label: 'Spells', icon: '🪄', desc: 'Create and store your spells' }
]

function Home() {
  return (
    <div className="home-page">
      <h1 className="heading-xl home-title">Welcome to Your Grimoire</h1>
      <p className="text-muted home-subtitle">Here you can write all your witchy notes!</p>

      <div className="home-grid">
        {sections.map(({ to, label, icon, desc }) => (
          <Link key={to} to={to} className="home-card">
            <span className="home-card-icon">{icon}</span>
            <span className="home-card-label">{label}</span>
            <span className="home-card-desc">{desc}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
