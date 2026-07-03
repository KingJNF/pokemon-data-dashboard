function RangeFilter({ minExp, setMinExp, maxExp, setMaxExp }) {
  return (
    <div className="range-filter">
      <label htmlFor="exp-range">
        Min Base Exp (slider): <strong>{minExp}</strong>
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

      <div className="bounds-inputs">
        <label>
          Min:
          <input
            type="number"
            min="0"
            value={minExp}
            onChange={(e) => setMinExp(Number(e.target.value))}
          />
        </label>
        <label>
          Max:
          <input
            type="number"
            min="0"
            value={maxExp}
            onChange={(e) => setMaxExp(Number(e.target.value))}
          />
        </label>
      </div>
    </div>
  )
}

export default RangeFilter