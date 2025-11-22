const Card = ({ 
  children, 
  className = '',
  hover = false,
  ...props 
}) => {
  const classes = `
    bg-white rounded-lg shadow-sm border border-gray-200
    ${hover ? 'hover:shadow-md transition-shadow duration-200' : ''}
    dark:bg-gray-800 dark:border-gray-700
    ${className}
  `.trim()

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default Card