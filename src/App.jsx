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
import Join from './pages/Join/Join';

// Position Detail Components
import ADCS from './pages/Join/positions/ADCS';
import FPGA from './pages/Join/positions/COPS-FPGA';
import OPS from './pages/Join/positions/COPS-OPS';
import COMMS from './pages/Join/positions/COPS-COMMS';
import MECH from './pages/Join/positions/MECH';
import ContentCreator from './pages/Join/positions/MRK-ContentCreator';
import FR from './pages/Join/positions/MRK-FR';
import PR from './pages/Join/positions/MRK-PR';
import HW from './pages/Join/positions/OBC-HW';
import EmbeddedSW from './pages/Join/positions/OBSW-EmbeddedSW';
import STR from './pages/Join/positions/STR';
import BIO from './pages/Join/positions/SU-BIO';
import SYE from './pages/Join/positions/SYE';
import THE from './pages/Join/positions/THE';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // A 0ms timeout pushes the execution to the end of the event loop
    // ensuring the new page content is actually there before scrolling
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Standard Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academia" element={<Academia />} />
            <Route path="/members" element={<Members />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/join" element={<Join />} />

            {/* Position Details Mapping */}
            {/* Electronics, Flight Software & Control */}
            <Route path="/positions/adcs-engineer" element={<ADCS />} />
            <Route path="/positions/embedded-software-engineer" element={<EmbeddedSW />} />
            <Route path="/positions/hardware-engineer" element={<HW />} />

            {/* Science Unit & Mechatronics */}
            <Route path="/positions/biological-engineer" element={<BIO />} />
            <Route path="/positions/mechatronics-engineer" element={<MECH />} />

            {/* Systems, Structures & Thermal Design */}
            <Route path="/positions/structural-engineer" element={<STR />} />
            <Route path="/positions/thermal-engineer" element={<THE />} />
            <Route path="/positions/systems-aiv-engineer" element={<SYE />} />

            {/* Communications & Mission Operations */}
            <Route path="/positions/fpga-engineer" element={<FPGA />} />
            <Route path="/positions/telecommunications-engineer" element={<COMMS />} />
            <Route path="/positions/operations-engineer" element={<OPS />} />

            {/* Marketing, Outreach & Fundraising */}
            <Route path="/positions/fundraising" element={<FR />} />
            <Route path="/positions/pr-outreach" element={<PR />} />
            <Route path="/positions/creative-content" element={<ContentCreator />} />
            
            {/* Catch-all */}
            <Route path="*" element={<Join />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;