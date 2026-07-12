import { useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts'

const COLORS = [
  '#cc0000', '#ff9933', '#3399ff', '#33cc33', '#ffcc00',
  '#9966cc', '#66cccc', '#ff6699', '#996633', '#999999',
]

function Charts({ pokemon }) {
  const [activeChart, setActiveChart] = useState('both')

  // Chart 1 data: count of Pokémon per type
  const typeCounts = pokemon.reduce((acc, p) => {
    p.types.forEach((type) => {
      acc[type] = (acc[type] || 0) + 1
    })
    return acc
  }, {})
  const typeData = Object.keys(typeCounts).map((type) => ({
    name: type,
    count: typeCounts[type],
  }))

  // Chart 2 data: base experience of top 8 Pokémon
  const expData = [...pokemon]
    .sort((a, b) => b.baseExperience - a.baseExperience)
    .slice(0, 8)
    .map((p) => ({ name: p.name, baseExp: p.baseExperience }))

  return (
    <div className="charts-section">
      {/* Stretch #2: toggle between visualizations */}
      <div className="chart-toggle">
        <button
          className={activeChart === 'both' ? 'active' : ''}
          onClick={() => setActiveChart('both')}
        >
          Show Both
        </button>
        <button
          className={activeChart === 'pie' ? 'active' : ''}
          onClick={() => setActiveChart('pie')}
        >
          Type Distribution
        </button>
        <button
          className={activeChart === 'bar' ? 'active' : ''}
          onClick={() => setActiveChart('bar')}
        >
          Top Base Experience
        </button>
      </div>

      <div className="charts-container">
        {(activeChart === 'both' || activeChart === 'pie') && (
          <div className="chart-card">
            <h3>Pokémon by Type</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={typeData}
                  dataKey="count"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {typeData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}

        {(activeChart === 'both' || activeChart === 'bar') && (
          <div className="chart-card">
            <h3>Top 8 by Base Experience</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={expData}>
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="baseExp" fill="#cc0000" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  )
}

export default Charts