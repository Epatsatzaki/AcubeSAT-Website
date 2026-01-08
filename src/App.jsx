import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Members from './pages/Members-page/Members'
import Sponsors from './pages/Sponsors-page/Sponsors'
import Academia from './pages/Academia/Academia'
import Join from './pages/Join/Join'

// Enhanced Scroll to top component
const ScrollToTop = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Always scroll to top on route change, but delay slightly for page transition
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // Use 'instant' for immediate scroll
      })
    }, 10)

    return () => clearTimeout(timer)
  }, [pathname]) // Only trigger on pathname change, not hash changes

  // Handle hash navigation separately (for home page sections)
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''))
      if (element) {
        setTimeout(() => {
          const navbar = document.querySelector('header')
          const navbarHeight = navbar ? navbar.offsetHeight : 80
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - navbarHeight - 20
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }, 100)
      }
    }
  }, [hash])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/members" element={<Members />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/academia" element={<Academia />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App