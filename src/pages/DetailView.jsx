import { useParams, Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

function DetailView({ pokemon }) {
  const { id } = useParams()
  const selected = pokemon.find((p) => p.id === Number(id))

  if (!selected) {
    return (
      <div className="layout">
        <Sidebar />
        <div className="main-content">
          <p className="loading">Loading Pokémon details...</p>
          <Link to="/" className="back-link">
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Link to="/" className="back-link">
          ← Back to Dashboard
        </Link>

        <div className="detail-card">
          <img
            src={selected.image}
            alt={selected.name}
            className="detail-image"
          />
          <h1 className="detail-name">{selected.name}</h1>
          <p className="detail-id">#{selected.id}</p>

          <div className="detail-stats">
            <div className="detail-stat">
              <strong>Type(s):</strong> {selected.types.join(', ')}
            </div>
            <div className="detail-stat">
              <strong>HP:</strong> {selected.hp}
            </div>
            <div className="detail-stat">
              <strong>Attack:</strong> {selected.attack}
            </div>
            <div className="detail-stat">
              <strong>Defense:</strong> {selected.defense}
            </div>
            <div className="detail-stat">
              <strong>Height:</strong> {selected.height}
            </div>
            <div className="detail-stat">
              <strong>Weight:</strong> {selected.weight}
            </div>
            <div className="detail-stat">
              <strong>Base Experience:</strong> {selected.baseExperience}
            </div>
            <div className="detail-stat">
              <strong>Abilities:</strong> {selected.abilities.join(', ')}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailView