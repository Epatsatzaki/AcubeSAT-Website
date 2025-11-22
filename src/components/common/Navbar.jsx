import { useState, useRef, useEffect } from 'react'

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsHomeDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const homeCategories = [
    { 
      key: 'spacedot-first', 
      label: "Spacedot's First Project",
      description: "Our inaugural space technology project",
      icon: "🚀"
    },
    { 
      key: 'acubesat-mission', 
      label: "Acubesat's Mission", 
      description: "Advanced cube satellite missions",
      icon: "🛰️"
    },
    { 
      key: 'home-default', 
      label: "Home Overview", 
      description: "Main dashboard and overview",
      icon: "🏠"
    }
  ]

  const navItems = [
    { key: 'about', label: 'About' },
    { key: 'services', label: 'Services' },
    { key: 'contact', label: 'Contact' },
  ]

  const handleHomeCategorySelect = (categoryKey) => {
    setCurrentPage('home')
    setIsHomeDropdownOpen(false)
    setIsMobileMenuOpen(false)
    // You can store the selected category in state or context for later use
    console.log(`Selected home category: ${categoryKey}`)
  }

  const isHomeActive = currentPage === 'home'

  return (
    <nav className="relative">
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 p-2"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-4 items-center">
        {/* Home Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsHomeDropdownOpen(!isHomeDropdownOpen)}
            className={`${
              isHomeActive
                ? 'text-primary-600 border-primary-600'
                : 'text-gray-500 hover:text-gray-700 border-transparent'
            } border-b-2 transition-colors duration-200 font-medium flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700`}
          >
            <span>Home</span>
            <svg 
              className={`w-4 h-4 transition-transform duration-200 ${isHomeDropdownOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isHomeDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 overflow-hidden">
              <div className="p-2">
                <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Project Categories
                </div>
                {homeCategories.map((category) => (
                  <button
                    key={category.key}
                    onClick={() => handleHomeCategorySelect(category.key)}
                    className="w-full text-left px-3 py-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150 flex items-start space-x-3 group"
                  >
                    <span className="text-lg flex-shrink-0 mt-0.5">{category.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                        {category.label}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {category.description}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Other navigation items */}
        {navItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setCurrentPage(item.key)}
            className={`${
              currentPage === item.key
                ? 'text-primary-600 border-primary-600'
                : 'text-gray-500 hover:text-gray-700 border-transparent'
            } border-b-2 transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-12 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg md:hidden z-40">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Mobile Home Dropdown */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-2">
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                Home Categories
              </div>
              {homeCategories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => handleHomeCategorySelect(category.key)}
                  className="w-full text-left px-3 py-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150 flex items-center space-x-3"
                >
                  <span className="text-lg">{category.icon}</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {category.label}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {category.description}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Other mobile navigation items */}
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  setCurrentPage(item.key)
                  setIsMobileMenuOpen(false)
                }}
                className={`${
                  currentPage === item.key
                    ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20'
                    : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700'
                } block w-full text-left px-3 py-2 rounded-md font-medium transition-colors duration-200`}
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