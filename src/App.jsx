import { useState, useEffect } from 'react'
import Header from './components/Header'
import SummaryStats from './components/SummaryStats'
import SearchBar from './components/SearchBar'
import Filter from './components/Filter'
import RangeFilter from './components/RangeFilter'
import List from './components/List'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [minExp, setMinExp] = useState(0)
  const [loading, setLoading] = useState(true)

  // Fetch API data using useEffect + async/await
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        // Step 1: Get the list of the first 50 Pokémon (names + URLs)
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon?limit=50'
        )
        const data = await response.json()

        // Step 2: Fetch full details for each Pokémon from its URL
        const detailedPokemon = await Promise.all(
          data.results.map(async (p) => {
            const res = await fetch(p.url)
            const details = await res.json()
            return {
              id: details.id,
              name: details.name,
              types: details.types.map((t) => t.type.name),
              height: details.height,
              weight: details.weight,
              baseExperience: details.base_experience,
              image: details.sprites.front_default,
            }
          })
        )

        setPokemon(detailedPokemon)
      } catch (error) {
        console.error('Error fetching Pokémon:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchPokemon()
  }, [])

  // Filter data based on search query AND type filter
  const filteredPokemon = pokemon
    .filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((p) =>
      typeFilter === 'all' ? true : p.types.includes(typeFilter)
    )
    .filter((p) => p.baseExperience >= minExp)

  return (
    <div className="app">
      <Header />
      <SummaryStats pokemon={pokemon} />
      <div className="controls">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Filter typeFilter={typeFilter} setTypeFilter={setTypeFilter} />
        <RangeFilter minExp={minExp} setMinExp={setMinExp} />
      </div>
      {loading ? (
        <p className="loading">Loading Pokémon...</p>
      ) : (
        <List pokemon={filteredPokemon} />
      )}
    </div>
  )
}

export default App