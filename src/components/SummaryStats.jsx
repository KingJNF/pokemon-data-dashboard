function SummaryStats({ pokemon }) {
  // Stat 1: Total count of Pokémon
  const totalPokemon = pokemon.length

  // Stat 2: Average base experience (mean)
  const avgBaseExp =
    pokemon.length > 0
      ? Math.round(
          pokemon.reduce((sum, p) => sum + p.baseExperience, 0) /
            pokemon.length
        )
      : 0

  // Stat 3: Most common type (mode)
  const typeCounts = pokemon.reduce((acc, p) => {
    p.types.forEach((type) => {
      acc[type] = (acc[type] || 0) + 1
    })
    return acc
  }, {})
  const mostCommonType =
    Object.keys(typeCounts).sort((a, b) => typeCounts[b] - typeCounts[a])[0] ||
    'N/A'

  return (
    <div className="stats-container">
      <div className="stat-card">
        <h2>{totalPokemon}</h2>
        <p>Total Pokémon</p>
      </div>
      <div className="stat-card">
        <h2>{avgBaseExp}</h2>
        <p>Avg Base Experience</p>
      </div>
      <div className="stat-card">
        <h2>{mostCommonType}</h2>
        <p>Most Common Type</p>
      </div>
    </div>
  )
}

export default SummaryStats