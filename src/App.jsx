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
import COPSFPGA from './pages/Join/positions/COPS-FPGA';
import COPS from './pages/Join/positions/COPS';
import MECH from './pages/Join/positions/MECH';
import MRKContentCreator from './pages/Join/positions/MRK-ContentCreator';
import MRKFR from './pages/Join/positions/MRK-FR';
import MRKPR from './pages/Join/positions/MRK-PR';
import OBCHW from './pages/Join/positions/OBC-HW';
import OBSWEmbeddedSW from './pages/Join/positions/OBSW-EmbeddedSW';
import STR from './pages/Join/positions/STR';
import SUBIO from './pages/Join/positions/SU-BIO';
import SYE from './pages/Join/positions/SYE';
import THE from './pages/Join/positions/THE';

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
            <Route path="/positions/embedded-software-engineer" element={<OBSWEmbeddedSW />} />
            <Route path="/positions/hardware-engineer" element={<OBCHW />} />

            {/* Science Unit & Mechatronics */}
            <Route path="/positions/biological-engineer" element={<SUBIO />} />
            <Route path="/positions/mechatronics-engineer" element={<MECH />} />

            {/* Systems, Structures & Thermal Design */}
            <Route path="/positions/structural-engineer" element={<STR />} />
            <Route path="/positions/thermal-engineer" element={<THE />} />
            <Route path="/positions/systems-aiv-engineer" element={<SYE />} />

            {/* Communications & Mission Operations */}
            <Route path="/positions/fpga-engineer" element={<COPSFPGA />} />
            <Route path="/positions/telecommunications-engineer" element={<COPS />} />

            {/* Marketing, Outreach & Fundraising */}
            <Route path="/positions/fundraising" element={<MRKFR />} />
            <Route path="/positions/pr-outreach" element={<MRKPR />} />
            <Route path="/positions/creative-content" element={<MRKContentCreator />} />
            
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