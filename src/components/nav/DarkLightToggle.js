import React, { useEffect, useState } from "react";
import styles from "./darkLightToggle.module.css";
import { useTheme } from '../../ThemeContext';
import darkMode from '../../assets/icons/lightToggle/dark-mode.svg';
import lightMode from '../../assets/icons/lightToggle/light-mode.svg';

function DarkLightToggle() {
    const { theme, setTheme } = useTheme();
    const [ themeIcon, setThemeIcon ] = useState(lightMode);

    useEffect(() => {
        if (theme === "light") {
            setThemeIcon(lightMode);
        }
        else {
            setThemeIcon(darkMode);
        }
    }, [theme]);

    return (
        <button id={styles.toggle} onClick={() => {theme === "light" ? setTheme("dark") : setTheme("light")}}>
            <img id="darkLightPic" src={themeIcon} />
        </button>
    )
}

export default DarkLightToggle;