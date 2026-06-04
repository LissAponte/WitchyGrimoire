import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'

import Home        from './pages/Home/Home'
import Grimoire    from './pages/Grimoire/Grimoire'
import Ingredients from './pages/Ingredients/Ingredients'
import Moon        from './pages/Moon/Moon'
import Tarot       from './pages/Tarot/Tarot'
import Research    from './pages/Research/Research'
import Sigils      from './pages/Sigils/Sigils'
import Spells      from './pages/Spells/Spells'

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <header className="appbar">
          <span className="appbar-title">Grimoire</span>
          <nav>
            <ul className="nav">
              <li><NavLink to="/"            end className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Home</NavLink></li>
              <li><NavLink to="/grimoire"        className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Spell Book</NavLink></li>
              <li><NavLink to="/ingredients"     className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Ingredients</NavLink></li>
              <li><NavLink to="/moon"            className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Moon</NavLink></li>
              <li><NavLink to="/tarot"           className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Tarot</NavLink></li>
              <li><NavLink to="/Research"        className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Research</NavLink></li>
              <li><NavLink to="/Sigils"          className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Sigils</NavLink></li>
              <li><NavLink to="/Spells"          className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Spells</NavLink></li>
            </ul>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/"            element={<Home />} />
            <Route path="/grimoire"    element={<Grimoire />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/moon"        element={<Moon />} />
            <Route path="/tarot"       element={<Tarot />} />
            <Route path="/Research"    element={<Research />} />
            <Route path="/Sigils"      element={<Sigils />} />
            <Route path="/Spells"      element={<Spells />} />  
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
