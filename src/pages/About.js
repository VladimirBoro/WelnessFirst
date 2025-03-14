import React from "react";
import styles from "./about.module.css"
import portraitImage from "../assets/images/sized/portrait.jpg";
import messageImage from "../assets/images/sized/message.jpg";
import ishaCertImage from "../assets/images/sized/isha_cert.jpg";
import lomiCertImage from "../assets/images/sized/lomilomi_cert.jpg";
import myoskeletalCertImage from "../assets/images/sized/myoskeletal_cert.jpg";
import reikiCertImage from "../assets/images/sized/reiki_cert.jpg";
import nikkenCertImage from "../assets/images/sized/nikken_cert.jpg";
import phoenixCertImage from "../assets/images/sized/phoenix_cert.jpg";
import massageCertImage from "../assets/images/sized/massage_cert.jpg";
import { paragraphs } from "../assets/data/about_paragraphs";

function About() {
    return (
        <main id={styles.about}>
            <h1 id={styles.title}>About</h1>
            <div id={styles.article}>
                <article className={styles.articleSection}>
                    <img src={messageImage} className={styles.image}/>
                    <div className={styles.paragraphs}>
                        <div className={styles.paragraph}>
                            {paragraphs.certifications.map((paragraph, index) => {
                                return <p key={index} className={styles.paragraph}>{paragraph}</p>
                            })}
                        </div>
                    </div>
                </article>
                <article className={styles.articleSection}>
                    <img src={portraitImage} className={styles.image}/>
                    <div className={styles.paragraphs}>
                        <div className={styles.paragraph}>
                            {paragraphs.studies.map((paragraph, index) => {
                                return <p key={index} className={styles.paragraph}>{paragraph}</p>
                            })}
                        </div>
                    </div>
                </article>
                <div id={styles.certImages}>
                    <img src={massageCertImage}/>
                    <img src={phoenixCertImage}/>
                    <img src={lomiCertImage}/>
                    <img src={ishaCertImage}/>
                    <img src={reikiCertImage}/>
                    <img src={nikkenCertImage}/>
                    <img src={myoskeletalCertImage}/>
                </div>
            </div>
        </main>
    );
}

export default About;