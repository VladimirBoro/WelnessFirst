import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/service/Services';
import Nav from './components/nav/Nav';
import Footer from './components/Footer';
import styles from './App.module.css';
import ReactGA from "react-ga4";

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize("G-BKYBFC3HPQ");
    ReactGA.send("pageview");
  }, []);

  useEffect(() => { 
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return (
    <ThemeProvider>
      <div id={styles.app}>
        <header className={styles.header}>
          <Nav />
        </header>
        <main className={styles.main}>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/services' element={<Services />}/>
            <Route path='/contact' element={<Contact />}/>
          </Routes>
        </main>
        <footer id={styles.footer}>
          <Footer />
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
