import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>🔴 PokéDash</h2>
      <nav>
        <Link to="/" className="sidebar-link">
          🏠 Dashboard
        </Link>
      </nav>
      <div className="sidebar-footer">
        <p>Data from PokéAPI</p>
      </div>
    </aside>
  )
}

export default Sidebar