function Filter({ typeFilter, setTypeFilter }) {
  const types = [
    'all',
    'normal',
    'fire',
    'water',
    'grass',
    'electric',
    'ice',
    'fighting',
    'poison',
    'ground',
    'flying',
    'psychic',
    'bug',
    'rock',
    'ghost',
    'dragon',
    'fairy',
  ]

  return (
    <div className="filter">
      <label htmlFor="type-select">Filter by Type: </label>
      <select
        id="type-select"
        value={typeFilter}
        onChange={(e) => setTypeFilter(e.target.value)}
      >
        {types.map((type) => (
          <option key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Filter