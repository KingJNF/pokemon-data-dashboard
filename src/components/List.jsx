import { Link } from 'react-router-dom'

function List({ pokemon }) {
  return (
    <div className="list-container">
      <div className="list-header">
        <span>Sprite</span>
        <span>Name</span>
        <span>Type</span>
        <span>Base Exp</span>
      </div>
      {pokemon.length === 0 ? (
        <p className="no-results">No Pokémon match your search.</p>
      ) : (
        pokemon.map((p) => (
          <Link to={`/pokemon/${p.id}`} className="list-row" key={p.id}>
            <span>
              <img src={p.image} alt={p.name} className="sprite" />
            </span>
            <span className="pokemon-name">{p.name}</span>
            <span className="pokemon-type">{p.types.join(', ')}</span>
            <span>{p.baseExperience}</span>
          </Link>
        ))
      )}
    </div>
  )
}

export default List