import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary-600">SpaceDot</a>
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  )
}

export default Header