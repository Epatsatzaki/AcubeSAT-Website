import { useState } from 'react'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Contact from './pages/Contact/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedHomeCategory, setSelectedHomeCategory] = useState(null)

  const handleHomeCategorySelect = (category) => {
    setSelectedHomeCategory(category)
    setCurrentPage('home')
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />
      case 'services':
        return <Services />
      case 'contact':
        return <Contact />
      default:
        return <Home selectedCategory={selectedHomeCategory} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        onHomeCategorySelect={handleHomeCategorySelect}
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App