import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import ToggleTheme from '../dynamic/ToggleTheme'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-40 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - larger version */}
          <div className="flex-shrink-0 w-1/4 min-w-[120px] max-w-[220px]">
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="/images/SpaceDot-logos/AcubeSAT.png" 
                alt="AcubeSAT Logo"
                className="h-10 w-auto group-hover:scale-110 transition-transform duration-200"
              />
              <span className="hidden sm:inline text-xl font-bold text-gray-900 dark:text-white">
                AcubeSAT
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex-1 w-2/4 flex justify-center items-center min-w-0 px-1 sm:px-2">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <Navbar />
            </div>
          </div>

          {/* Theme toggle */}
          <div className="flex-shrink-0 w-1/4 flex justify-end">
            <ToggleTheme />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header