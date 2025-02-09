import React, { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import { useTheme } from '../../ThemeContext';
import LightDarkToggle from "./DarkLightToggle";
import HealingHands from '../../assets/icons/healing_hands_small.png';
import styles from './nav.module.css';

function Nav() {
    const [open, setOpen] = useState(false);
    const [navHide, setNavHide] = useState(styles.hidden);
    const { theme } = useTheme();
    const [hamburgerColor, setHamburgerColor] = useState(theme);

    useEffect(() => {
        setHamburgerColor(() => theme);
    }, [theme])

    // hook even listener for handling clicking away from the open nav bar to close it
    useEffect(() => {
        const handleEventClick = (e) => {
            const mobileNav = document.getElementById(styles.nav);
            const button = document.getElementById(styles.hamburgerIcon);
            const toggle = document.querySelector(`#${styles.icons} :nth-child(2)`);
            const hamburgPic = document.querySelector(".hamburg").className.baseVal;
            const darkLightPic = document.getElementById("darkLightPic");

            const selectedClass = e.target.className.baseVal;

            if (open && e.target !== mobileNav && e.target !== button && selectedClass !== hamburgPic && e.target != toggle && e.target != darkLightPic) {
                setOpen(false);
            }
        }

        window.addEventListener("click", handleEventClick);

        return () => {
            window.removeEventListener("click", handleEventClick);
        }
    }, [open])

    // hook to open and close nav bar
    useEffect(() => {
        if (open) {
            setNavHide("");
            document.body.style.overflow = "hidden"; 
        }
        else {
            setNavHide(styles.hidden);
            document.body.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        }

    }, [open])

    const handleClick = () => {
        setOpen((prev) => !prev);
    }

    return (
        <div id={styles.nav}>
            <Link to="/" id={styles.brand}>
                <img src={HealingHands} id={styles.healingHands}/>
                <h4>Welness First</h4>
            </Link>
            <div id={styles.links} className={navHide}>
            <NavLink to="/" className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link} end>
                Home
            </NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                About
            </NavLink>
            <NavLink to="/services" className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                Services
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                Contact
            </NavLink>
            </div>
            <div id={styles.icons}>
                <button type='button' id={styles.hamburgerIcon} onClick={handleClick}>
                    <svg
                        width="2.5em"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hamburg"
                    >
                        <path d="M4 18L20 18" stroke={hamburgerColor === "light" ? "black" : "white"} strokeWidth="2" strokeLinecap="round" className="hamburg" />
                        <path d="M4 12L20 12" stroke={hamburgerColor === "light" ? "black" : "white"} strokeWidth="2" strokeLinecap="round" className="hamburg" />
                        <path d="M4 6L20 6" stroke={hamburgerColor === "light" ? "black" : "white"} strokeWidth="2" strokeLinecap="round" className="hamburg" />
                    </svg>
                </button>
                <LightDarkToggle />
            </div>
        </div>
    );
}

export default Nav;