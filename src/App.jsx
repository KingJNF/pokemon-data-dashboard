import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import DetailView from './pages/DetailView'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon?limit=50'
        )
        const data = await response.json()

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
              hp: details.stats[0].base_stat,
              attack: details.stats[1].base_stat,
              defense: details.stats[2].base_stat,
              abilities: details.abilities.map((a) => a.ability.name),
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

  return (
    <Routes>
      <Route
        path="/"
        element={<Dashboard pokemon={pokemon} loading={loading} />}
      />
      <Route
        path="/pokemon/:id"
        element={<DetailView pokemon={pokemon} />}
      />
    </Routes>
  )
}

export default App