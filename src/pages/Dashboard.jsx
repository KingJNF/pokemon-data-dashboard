import { useState } from 'react'
import Header from '../components/Header'
import SummaryStats from '../components/SummaryStats'
import SearchBar from '../components/SearchBar'
import Filter from '../components/Filter'
import RangeFilter from '../components/RangeFilter'
import List from '../components/List'
import Sidebar from '../components/Sidebar'
import Charts from '../components/Charts'

function Dashboard({ pokemon, loading }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [minExp, setMinExp] = useState(0)
  const [maxExp, setMaxExp] = useState(300)

  const filteredPokemon = pokemon
    .filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((p) =>
      typeFilter === 'all' ? true : p.types.includes(typeFilter)
    )
    .filter((p) => p.baseExperience >= minExp && p.baseExperience <= maxExp)

  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Header />

        {/* Stretch #1: extra content explaining the data */}
        <div className="data-description">
          <p>
            This dashboard explores the first 50 Pokémon from the PokéAPI. The
            charts below reveal how Pokémon are distributed across types and how
            their base experience compares. 💡 <strong>Tip:</strong> Try
            filtering by the <em>Water</em> or <em>Normal</em> type — they're
            the most common — or drag the slider to find the highest-value
            Pokémon!
          </p>
        </div>

        <SummaryStats pokemon={pokemon} />

        {/* Charts (with stretch #2 toggle inside) */}
        {!loading && <Charts pokemon={pokemon} />}

        <div className="controls">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <Filter typeFilter={typeFilter} setTypeFilter={setTypeFilter} />
          <RangeFilter
            minExp={minExp}
            setMinExp={setMinExp}
            maxExp={maxExp}
            setMaxExp={setMaxExp}
          />
        </div>

        {loading ? (
          <p className="loading">Loading Pokémon...</p>
        ) : (
          <List pokemon={filteredPokemon} />
        )}
      </div>
    </div>
  )
}

export default Dashboard