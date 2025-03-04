import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import About from './containers/About';
import Contact from './containers/Contact';
import Home from './containers/Home';
import Services from './containers/service/Services';
import Nav from './components/nav/Nav';
import Footer from './components/Footer';
import styles from './App.module.css';

function App() {
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
