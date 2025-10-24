const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const base =
    'flex items-center justify-center h-12 px-4 rounded-lg font-semibold transition-all duration-300'

  const variants = {
    primary: 'bg-accent text-white hover:bg-[#d56a58]',
    alt: 'bg-transparent border border-accent text-accent hover:bg-accent hover:text-white',
    set: 'bg-dark-alt border border-border hover:text-accent',
    edit: 'absolute bottom-0 bg-accent/24 w-full rounded-none text-accent text-sm'
  }

  const classes = `${base} ${variants[variant] || ''} ${className}`

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

export default Button
