import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { 
      path: '/', 
      label: 'Home', 
      sections: [
        { id: 'vision-values', label: 'Vision & Values' },
        { id: 'open-source', label: 'Open Source Resources' }
      ] 
    },
    { 
      path: '/about', 
      label: 'About',
      sections: [
        { id: 'project-overview', label: 'Project Overview' },
        { id: 'timeline', label: 'Timeline' },
        { id: 'fys-programme', label: 'FYS Programme' },
        { id: 'team-labs', label: 'Team Laboratories' }
      ]
    },
    { 
      path: '/members', 
      label: 'Members',
      sections: [] // No subsections or add specific ones if needed
    },
    { 
      path: '/support', 
      label: 'Support',
      sections: [
        { id: 'why-support', label: 'Why Support Us?' },
        { id: 'sponsors', label: 'Our Sponsors' }
      ]
    },
  ]

  const isActive = (path) => location.pathname === path

  // Function to handle section clicks
  const handleSectionClick = (path, sectionId) => {
    if (location.pathname === path) {
      // If we're already on the page, scroll to section
      const element = document.getElementById(sectionId)
      if (element) {
        const navbar = document.querySelector('header')
        const navbarHeight = navbar ? navbar.offsetHeight : 80
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - navbarHeight - 20
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    } else {
      // When navigating from another page
      window.location.href = `${path}#${sectionId}`
    }
    setIsMobileMenuOpen(false)
  }

  const handlePageClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav>
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
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
            {item.sections && item.sections.length > 0 ? (
              // Items with dropdown sections
              <div className="relative">
                <Link
                  to={item.path}
                  onClick={handlePageClick}
                  className={`${
                    isActive(item.path)
                      ? 'text-primary-600 border-primary-600'
                      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border-transparent'
                  } border-b-2 transition-colors duration-200 font-medium flex items-center`}
                >
                  {item.label}
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                
                {/* Dropdown for sections */}
                <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-200 dark:border-gray-700">
                  {item.sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => handleSectionClick(item.path, section.id)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      {section.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              // Regular pages without dropdown
              <Link
                to={item.path}
                onClick={handlePageClick}
                className={`${
                  isActive(item.path)
                    ? 'text-primary-600 border-primary-600'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border-transparent'
                } border-b-2 transition-colors duration-200 font-medium`}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
        
        {/* Join Us Button */}
        <Link
          to="/join"
          onClick={handlePageClick}
          className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
        >
          Join Us
        </Link>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-lg md:hidden z-50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.path}>
                {item.sections && item.sections.length > 0 ? (
                  // Items with sections in mobile
                  <div className="space-y-1">
                    <Link
                      to={item.path}
                      onClick={handlePageClick}
                      className={`${
                        isActive(item.path)
                          ? 'bg-primary-50 text-primary-600'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                      } block px-3 py-2 rounded-md font-medium transition-colors duration-200`}
                    >
                      {item.label}
                    </Link>
                    <div className="ml-4 space-y-1 border-l-2 border-gray-200 dark:border-gray-700 pl-2">
                      {item.sections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => handleSectionClick(item.path, section.id)}
                          className="block w-full text-left px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                        >
                          {section.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Regular pages in mobile
                  <Link
                    to={item.path}
                    onClick={handlePageClick}
                    className={`${
                      isActive(item.path)
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    } block px-3 py-2 rounded-md font-medium transition-colors duration-200`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Join Us Button in Mobile */}
            <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
              <Link
                to="/join"
                onClick={handlePageClick}
                className="block w-full bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 rounded-md font-medium text-center transition-colors duration-200"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar