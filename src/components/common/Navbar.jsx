import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { 
      path: '/', 
      label: 'Home', 
      subtitle: 'Start Here',
      sections: [
        { id: 'vision-values', label: '🌟 Vision & Values', description: 'Our guiding principles' },
        { id: 'open-source', label: '📚 Open Source Resources', description: 'Tools & knowledge for all' }
      ] 
    },
    { 
      path: '/about', 
      label: 'About',
      subtitle: 'Our Mission',
      sections: [
        { id: 'project-overview', label: '📋 Project Overview', description: 'What we\'re building' },
        { id: 'timeline', label: '📅 Timeline', description: 'Our journey so far' },
        { id: 'fys-programme', label: '⭐ FYS Programme', description: 'ESA collaboration' },
        { id: 'team-labs', label: '🔬 Team Laboratories', description: 'Research facilities' }
      ]
    },
    { 
      path: '/members', 
      label: 'Members',
      subtitle: 'Meet the Team',
      sections: [
        { id: 'core-team', label: '💫 Core Team', description: 'Leading the mission' },
        { id: 'contributors', label: '🤝 Contributors', description: 'Amazing collaborators' },
        { id: 'alumni', label: '🎓 Alumni', description: 'Past team members' }
      ]
    },
    { 
      path: '/support', 
      label: 'Support',
      subtitle: 'Help Our Mission',
      sections: [
        { id: 'why-support', label: '❓ Why Support Us?', description: 'Make an impact' },
        { id: 'sponsors', label: '🏆 Our Sponsors', description: 'Amazing partners' },
        { id: 'get-involved', label: '🤲 Get Involved', description: 'Ways to contribute' }
      ]
    },
    { 
      path: '/contact', 
      label: 'Contact',
      subtitle: 'Get In Touch',
      sections: [
        { id: 'general-inquiry', label: '📧 General Inquiry', description: 'Questions about our project' },
        { id: 'collaboration', label: '🤝 Collaboration', description: 'Partner with us' },
        { id: 'media', label: '📰 Media & Press', description: 'Press inquiries' },
        { id: 'technical', label: '🔧 Technical Support', description: 'Technical questions' }
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
          className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center space-x-6">
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
                      ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  } px-4 py-3 rounded-xl transition-all duration-200 font-semibold flex items-center space-x-2 min-w-[100px] group`}
                >
                  <span>{item.label}</span>
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180 duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                
                {/* Enhanced Dropdown for sections */}
                <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-200 dark:border-gray-700">
                  <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">{item.label}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{item.subtitle}</div>
                  </div>
                  <div className="py-2">
                    {item.sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => handleSectionClick(item.path, section.id)}
                        className="w-full text-left px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 transition-all duration-200 group/section flex items-start space-x-3"
                      >
                        <span className="text-lg flex-shrink-0 mt-0.5">{section.label.split(' ')[0]}</span>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-gray-900 dark:text-white group-hover/section:text-primary-600 dark:group-hover/section:text-primary-400">
                            {section.label.split(' ').slice(1).join(' ')}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                            {section.description}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              // Regular pages without dropdown
              <Link
                to={item.path}
                onClick={handlePageClick}
                className={`${
                  isActive(item.path)
                    ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                } px-4 py-3 rounded-xl transition-all duration-200 font-semibold flex items-center space-x-2`}
              >
                <span>{item.label}</span>
              </Link>
            )}
          </div>
        ))}
        
        {/* Enhanced Join Us Button */}
        <Link
          to="/join"
          onClick={handlePageClick}
          className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 shadow-md"
        >
          <span>Join Us</span>
        </Link>
      </div>

      {/* Enhanced Mobile menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-4 right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-2xl rounded-2xl md:hidden z-50 border border-gray-200 dark:border-gray-700">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.path} className="space-y-1">
                {item.sections && item.sections.length > 0 ? (
                  // Items with sections in mobile
                  <div className="space-y-2">
                    <Link
                      to={item.path}
                      onClick={handlePageClick}
                      className={`${
                        isActive(item.path)
                          ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                      } block px-4 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center space-x-3`}
                    >
                      <div>
                        <div>{item.label}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 font-normal">{item.subtitle}</div>
                      </div>
                    </Link>
                    <div className="ml-6 space-y-2 border-l-2 border-primary-200 dark:border-primary-800 pl-4">
                      {item.sections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => handleSectionClick(item.path, section.id)}
                          className="block w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center space-x-3"
                        >
                          <span className="text-base">{section.label.split(' ')[0]}</span>
                          <div>
                            <div className="text-gray-700 dark:text-gray-300 font-medium">
                              {section.label.split(' ').slice(1).join(' ')}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {section.description}
                            </div>
                          </div>
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
                        ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    } block px-4 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center space-x-3`}
                  >
                    <div>
                      <div>{item.label}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 font-normal">{item.subtitle}</div>
                    </div>
                  </Link>
                )}
              </div>
            ))}
            
            {/* Enhanced Join Us Button in Mobile */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <Link
                to="/join"
                onClick={handlePageClick}
                className="block w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-4 py-3 rounded-xl font-bold text-center transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>✨</span>
                <span>Join Our Mission</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar