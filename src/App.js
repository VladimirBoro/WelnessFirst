import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
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
  useEffect(() => {
    ReactGA.initialize("G-BKYBFC3HPQ");
    ReactGA.send("pageview");
  }, []);

  useEffect(() => { 
    const pageTracker = () => {
      ReactGA.send({ hitType: "pageview", page: window.location.hash.replace("#", "") });
    }

    window.addEventListener("hashchange", pageTracker);
    return () => {
      window.removeEventListener("hashchange", pageTracker);
    }
  }, []);

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
