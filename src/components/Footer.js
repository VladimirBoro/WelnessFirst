import React from "react";
import styles from "./footer.module.css";

function Footer() {
    return (
        <div id={styles.footer}>
            <div id={styles.info}>
                <div id={styles.infoLeft}>
                    <p>
                        Contact: <a href="tel:408-313-5585">408-313-5585</a>
                    </p>
                </div>
                <div id={styles.infoRight}>
                    <div>
                        <p style={{marginBottom:0}}>Address</p>
                        <a href="https://www.google.com/maps/place/1101+S+Winchester+Blvd,+San+Jose,+CA+95128/@37.3058732,-121.9513321,19.76z/data=!4m5!3m4!1s0x808fcad44ae8367b:0x9e72381ba3b897a2!8m2!3d37.30615!4d-121.9509644">
                            1101 S. Winchester Blvd., Building O, Suite 283,
                            San Jose, CA 95128
                        </a>
                    </div>
                    <a id={styles.yelp} href="https://www.yelp.com/biz/healing-energy-san-jose-2">Yelp</a>
                </div>
            </div>
            <p id={styles.copyright}>COPYRIGHT © MARINA BORODIANSKI | ALL RIGHTS RESERVED</p>
        </div>
    )
}

export default Footer;