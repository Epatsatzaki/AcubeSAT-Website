import Navbar from './Navbar'

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="bg-white shadow-sm dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary-600">Logo</span>
          </div>
          <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </header>
  )
}

export default Header