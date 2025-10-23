import React from 'react'

const Input = () => {
  return (
    <div className="relative h-fit">
      <img src="/search.svg" alt="" className="absolute top-1/2 -translate-y-1/2 left-3.5" />
      <input
        type="text"
        className="text-gray bg-dark-alt p-3.5 pl-10.5 rounded-lg text-sm min-w-55 border border-[#393C49]"
        placeholder="Search for food, coffe, etc.."
      />
    </div>
  )
}

export default Input
