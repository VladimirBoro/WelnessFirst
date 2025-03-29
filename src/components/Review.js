import React from "react";
import styles from "./review.module.css";
import star from "../assets/icons/web/star.png"

function Review( {name, text} ) {

    return (
        <div className={styles.review}>
            <div>
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
            </div>
            <p className={styles.text}>
                {text}
            </p>
        </div>
    );
}

export default Review;