import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Common Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// Page Components
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Members from './pages/Members-page/Members';
import Sponsors from './pages/Sponsors-page/Sponsors';
import Academia from './pages/Academia/Academia';
import Join from './pages/Join/Join'; // This MUST be the grid list

// Position Detail Components
import ADCS from './pages/Join/positions/ADCS';
import BIO from './pages/Join/positions/BIO';
import COPS from './pages/Join/positions/COPS';
// ... import others as needed

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Standard Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academia" element={<Academia />} />
            <Route path="/members" element={<Members />} />
            <Route path="/sponsors" element={<Sponsors />} />

            {/* THE JOIN LIST - Ensure this is unique */}
            <Route path="/join" element={<Join />} />

            {/* THE POSITION DETAILS - Use a clear sub-path */}
            <Route path="/positions/telecommunications-engineer" element={<COPS />} />
            <Route path="/positions/adcs-engineer" element={<ADCS />} />
            <Route path="/positions/biological-engineer" element={<BIO />} />
            
            {/* Catch-all to prevent blank screens on typos */}
            <Route path="*" element={<Join />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;