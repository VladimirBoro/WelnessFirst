import React, { useEffect,  } from 'react';
import { startSession, continueSession } from './sessionApi';
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
    useEffect(() => {
        const controller = new AbortController();
        
        startSession(controller.signal)
        .catch((error) => {
            console.error(error);
        });

        let interval = setInterval(continueSession, 10000, controller.signal);

        return () => {
            controller.abort();
            clearInterval(interval);
        }
    }, [])

    return (
        <ThemeProvider>
            <div id={styles.app}>
                <header className={styles.header}>
                    <Nav />
                </header>
                <main className={styles.main}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/services' element={<Services />} />
                        <Route path='/contact' element={<Contact />} />
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
