import React from "react";
import styles from "./service.module.css";

function Service({ title, description, prices }) {
    return ( 
        <div className={styles.service}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.contents}>
                <p className={styles.description}>{description}</p>
                <div className={styles.prices}>
                    <p>60 minutes: ${prices[0]}</p>
                    <p>90 minutes: ${prices[1]}</p>
                </div>
            </div>
        </div>
    )
}

export default Service;