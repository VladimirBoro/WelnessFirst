import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import HamburgerIcon from '../assets/icons/burger-menu.svg';
import HomeIcon from '../assets/icons/home.svg';
import ContactIcon from '../assets/icons/contact.svg';
import MassageIcon from '../assets/icons/massage-service.svg';
import AboutIcon from '../assets/icons/about.svg';
import HealingHands from '../assets/icons/healing_hands_small.png';
import styles from './nav.module.css';

function Nav() {
    const [open, setOpen] = useState(false);
    const [navHide, setNavHide] = useState(styles.hidden);

    // hook even listener for handling clicking away from the open nav bar to close it
    useEffect(() => {
        const handleEventClick = (e) => {
            const mobileNav = document.getElementById(styles.nav);
            const button = document.getElementById(styles.hamburgerIcon);
            const pic = document.getElementById("hamburg");

            if (open && e.target !== mobileNav && e.target !== button && e.target !== pic) {
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
        const prohibitScroll = () => {
            console.log("dissss");
            const scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop;
            const scrollLeft =
                window.pageXOffset ||
                document.documentElement.scrollLeft;

            // if any scroll is attempted,
            // set this to the previous value
            window.onscroll = () => {
                window.scrollTo(scrollLeft, scrollTop);
            };
        }

        const enableScroll = () => {
            window.onscroll = function () { };
        }

        if (open) {
            setNavHide("");
            document.body.style.overflow = "hidden"; 
            prohibitScroll();
        }
        else {
            setNavHide(styles.hidden);
            document.body.overflow = "";
            enableScroll();
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
            <Link id={styles.brand}>
                <img src={HealingHands} id={styles.healingHands}/>
                <h4>Welness First</h4>
            </Link>
            <button type='button' id={styles.hamburgerIcon} onClick={handleClick}>
                <img src={HamburgerIcon} id="hamburg"/>
            </button>
            <div id={styles.links} className={navHide}>
                <Link to="/" className={styles.navItemContainer}>
                    <img src={HomeIcon} className={styles.navIcon}/>
                    Home
                </Link>
                <Link to="/about" className={styles.navItemContainer}>
                    <img src={AboutIcon} className={styles.navIcon}/>
                    About
                </Link>
                <Link to="/services" className={styles.navItemContainer}>
                    <img src={MassageIcon} className={styles.navIcon}/>
                    Services
                </Link>
                <Link to="/contact" className={styles.navItemContainer}>
                    <img src={ContactIcon} className={styles.navIcon}/>
                    Contact
                </Link>
            </div>
        </div>
    );
}

export default Nav;