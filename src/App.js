import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from './containers/About';
import Contact from './containers/Contact';
import Home from './containers/Home';
import Services from './containers/Services';
import Nav from './components/Nav';
import Footer from './components/Footer';
import styles from './App.module.css';

// TODO: darkmode toggle
// TODO: update/upgrade footer
function App() {
  return (
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
  );
}

export default App;
