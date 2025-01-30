import React from "react";
import styles from "./review.module.css";
import star from "../assets/icons/web/star.png"

function Review( {name, text} ) {

    const stars = () => {

    }

    return (
        <div className={styles.review}>
            <h2 className={styles.name}>
                {name}
            </h2>
            <div className={styles.rating}>
                <img src={star}/>
                <img src={star}/>
                <img src={star}/>
                <img src={star}/>
                <img src={star}/>
            </div>
            <p className={styles.text}>
                {text}
            </p>
        </div>
    );
}

export default Review;