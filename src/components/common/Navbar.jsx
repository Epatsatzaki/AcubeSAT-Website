import { useState } from 'react'

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'About' },
    { key: 'services', label: 'Services' },
    { key: 'contact', label: 'Contact' },
  ]

  return (
    <nav>
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setCurrentPage(item.key)}
            className={`${
              currentPage === item.key
                ? 'text-primary-600 border-primary-600'
                : 'text-gray-500 hover:text-gray-700 border-transparent'
            } border-b-2 transition-colors duration-200 font-medium`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden dark:bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  setCurrentPage(item.key)
                  setIsMobileMenuOpen(false)
                }}
                className={`${
                  currentPage === item.key
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-500 hover:bg-gray-50'
                } block w-full text-left px-3 py-2 rounded-md font-medium transition-colors duration-200 dark:hover:bg-gray-700`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar