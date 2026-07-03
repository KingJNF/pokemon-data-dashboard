function RangeFilter({ minExp, setMinExp }) {
  return (
    <div className="range-filter">
      <label htmlFor="exp-range">
        Min Base Exp: <strong>{minExp}</strong>
      </label>
      <input
        id="exp-range"
        type="range"
        min="0"
        max="300"
        step="10"
        value={minExp}
        onChange={(e) => setMinExp(Number(e.target.value))}
      />
    </div>
  )
}

export default RangeFilter