import Navbar from './Navbar'
// import "../../../public/images/SpaceDot-logos/AcubeSAT"
const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3"> {/* Added space-x-3 for gap */}
            {/* Logo */}
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