import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md border-b border-white/20 dark:border-gray-700/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="images/SpaceDot-logos/AcubeSAT.png" 
              className="h-[65px] w-[65px]" 
            />
            {/* Brand Name */}
            <a href="/" className="text-2xl font-bold text-primary-600">AcubeSAT</a>
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  )
}

export default Header