const Button = ({ children, variant = 'primary' }) => {
  return (
    <button
      className={`flex items-center justify-center h-[48px] p-3.5 rounded-lg font-semibold transition-colors duration-300 ${
          variant === 'primary'
            ? 'bg-accent text-white hover:bg-[#d56a58]'
            : 'bg-transparent border border-accent text-accent hover:bg-accent hover:text-white'
        }`}
    >
      {children}
    </button>
  )
}

export default Button
