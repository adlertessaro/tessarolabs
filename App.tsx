
import React, { useEffect, useState, createContext } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExitIntentPopup from './components/ExitIntentPopup';
import Home from './pages/Home';
import About from './pages/About';
import Systems from './pages/Systems';
import Sites from './pages/Sites';
import Consulting from './pages/Consulting';
import Management from './pages/Management';
import Contact from './pages/Contact';
import Partners from './pages/Partners';
import Careers from './pages/Careers';

export const ThemeContext = createContext({
  isDark: true,
  toggleTheme: () => {},
});

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-emerald-500 selection:text-slate-950 transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/sistemas" element={<Systems />} />
              <Route path="/sites" element={<Sites />} />
              <Route path="/consultoria" element={<Consulting />} />
              <Route path="/gestao" element={<Management />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/parcerias" element={<Partners />} />
              <Route path="/trabalhe-conosco" element={<Careers />} />
            </Routes>
          </main>
          <Footer />
          <ExitIntentPopup />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
