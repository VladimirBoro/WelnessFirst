import React from "react";
import styles from "./contact.module.css";

function Contact() {
    return (
        <div id={styles.contact}>
            <div id={styles.howToContact} style={{marginTop: "3em"}}>
                <h1>Contact Us</h1>
                <h3>By Appointment only</h3>
                <p>Tuesday-Sunday</p>
                <p>9:00am - 5:00pm</p>
                <span>Text or call: <a href="tel:+14083135585">(408) 313-5585</a></span>
                
            </div>
            <div id={styles.whereToFind}>
                <h1>Where to find us</h1>
                <a href="https://www.google.com/maps/place/1101+S+Winchester+Blvd,+San+Jose,+CA+95128/@37.3058732,-121.9513321,19.76z/data=!4m5!3m4!1s0x808fcad44ae8367b:0x9e72381ba3b897a2!8m2!3d37.30615!4d-121.9509644">
                    <h3>​​​​1101 S. Winchester Blvd., Building O, Suite 283, San Jose, CA 95128</h3>
                </a>
                <iframe id={styles.map}
                    loading="lazy"
                    allowfullscreen
                    referrerpolicy="no-referrer-when-downgrade"
                    src={process.env.REACT_APP_GOOGLE_MAP_KEY}>
                </iframe>
            </div>
        </div>
    );
}

export default Contact;