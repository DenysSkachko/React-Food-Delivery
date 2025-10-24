import React from 'react'

const Input = ({ icon, placeholder, className, styles, value, onChange }) => {
  return (
    <div className={` relative h-fit ${styles}`}>
      <div className="absolute top-1/2 -translate-y-1/2 left-3.5">{icon}</div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`text-gray bg-dark-alt p-3.5 ${
          icon ? 'pl-10.5' : 'pl-3.5'
        } rounded-lg text-sm border border-[#393C49] ${className}`}
      />
    </div>
  )
}

export default Input
