const Select = ({ options = [], value, onChange }) => {
  return (
    <div className="relative h-fit">
      <img
        src="/arrow.png"
        alt="arrow"
        className="absolute top-1/2 -translate-y-1/2 left-3.5 pointer-events-none"
      />

      <select
        value={value}
        onChange={onChange}
        className="appearance-none bg-dark p-3.5 pl-10 pr-3.5 rounded-lg text-sm border border-[#393C49] max-w-28"
      >
        {options.map((opt) => (
          <option key={opt.label} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select