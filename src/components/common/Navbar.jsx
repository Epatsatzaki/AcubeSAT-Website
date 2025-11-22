import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', sections: ['project-overview', 'timeline', 'mission', 'updates'] },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => location.pathname === path

  // Function to handle home section clicks
  const handleHomeSectionClick = (sectionId) => {
    if (location.pathname === '/') {
      // If we're already on home page, scroll to section
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // If we're on another page, navigate to home with hash
      window.location.href = `/#${sectionId}`
    }
    setIsMobileMenuOpen(false)
  }

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
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <div key={item.path} className="relative group">
            {item.path === '/' && item.sections ? (
              // Home with dropdown sections
              <div className="relative">
                <Link
                  to="/"
                  className={`${
                    isActive(item.path)
                      ? 'text-primary-600 border-primary-600'
                      : 'text-gray-500 hover:text-gray-700 border-transparent'
                  } border-b-2 transition-colors duration-200 font-medium flex items-center`}
                >
                  Home
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                
                {/* Dropdown for home sections */}
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-200 dark:border-gray-700">
                  {item.sections.map((section) => (
                    <button
                      key={section}
                      onClick={() => handleHomeSectionClick(section)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      {section === 'project-overview' && '🚀 Project Overview'}
                      {section === 'timeline' && '📅 Timeline'}
                      {section === 'mission' && '🔬 Mission & Research'}
                      {section === 'updates' && '📊 Updates & Resources'}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              // Regular pages
              <Link
                to={item.path}
                className={`${
                  isActive(item.path)
                    ? 'text-primary-600 border-primary-600'
                    : 'text-gray-500 hover:text-gray-700 border-transparent'
                } border-b-2 transition-colors duration-200 font-medium`}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden dark:bg-gray-800 z-50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.path}>
                {item.path === '/' && item.sections ? (
                  // Home with sections in mobile
                  <div className="space-y-1">
                    <Link
                      to="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`${
                        isActive(item.path)
                          ? 'bg-primary-50 text-primary-600'
                          : 'text-gray-500 hover:bg-gray-50'
                      } block px-3 py-2 rounded-md font-medium transition-colors duration-200 dark:hover:bg-gray-700`}
                    >
                      Home
                    </Link>
                    <div className="ml-4 space-y-1 border-l-2 border-gray-200 dark:border-gray-700 pl-2">
                      {item.sections.map((section) => (
                        <button
                          key={section}
                          onClick={() => handleHomeSectionClick(section)}
                          className="block w-full text-left px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                        >
                          {section === 'project-overview' && '🚀 Project Overview'}
                          {section === 'timeline' && '📅 Timeline'}
                          {section === 'mission' && '🔬 Mission & Research'}
                          {section === 'updates' && '📊 Updates & Resources'}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Regular pages
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`${
                      isActive(item.path)
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-500 hover:bg-gray-50'
                    } block px-3 py-2 rounded-md font-medium transition-colors duration-200 dark:hover:bg-gray-700`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar