import React, { useRef, useEffect, useState } from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import Review from "../components/Review";


function Home() {
    const reviewNames = [ "Carri M.", "Abraham M.", "Igor M." ];
    const reviewTexts = [   "Had a back problem and Marina \"got in there\" with her magic elbows, and sorted me out! She knew where the problems were and how to fix them. Having experienced her deep tissue/therapeutic expertise, I shall certainly return for a relaxing massage another time.",
                            "I have polio which means I limp badly which means I have scoliosis - and I get tensed up and my body hurts. My body is asymmetric and quirky. All of which needs someone who can read my body and give very specialized treatment. Marina is an amazing body whisperer and an absolutely wonderful masseuse. I leave refreshed and relaxed with a while lot less pain every time. Give her a try and you will love her work and how you feel after.",
                            "Marina is very professional and knowledgeable about many different massages and techniques. She is able to customize the massage based on need and target any problem areas. I always have a stiff upper back and neck, Marina is able to relieve the pain after just one session. I feel very refreshed and relaxed after her massages. My sleep and overall energy levels increase every time also. I highly recommend Marina to everyone, she is very easy to work with and schedule appointments."
                        ]

    return (
        <div id={styles.home}>
            <div id={styles.hero}>
                <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?fm=jpg&amp;q=60&amp;
                // w=3000&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <div id={styles.heroInfo}>
                    <h1 style={{color: "#fefef1"}}>Your destination for healing</h1>
                    <div id={styles.heroButtons}>
                        <Link to="/contact">
                            <button>Contact</button>
                        </Link>
                        <Link to="/services">
                            <button>Services</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div id={styles.about}>
                <h2 className={styles.sectionTitle}>About Us</h2>
                <div id={styles.lore1}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, eros eget 
                        scelerisque tristique, justo tellus laoreet felis, dignissim viverra est ex eu urna. 
                        Quisque tristique vel quam vitae molestie. Sed interdum ipsum id felis accumsan vestibulum. 
                        Aliquam fermentum malesuada consectetur. Vestibulum vitae dui nulla. Cras ac interdum nibh. 
                        Vestibulum pretium enim sem, eget convallis diam vehicula semper.
                    </p>
                    <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?fm=jpg&amp;q=60&amp;
                    // w=3000&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                </div>
                <div id={styles.lore2}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, eros eget 
                        scelerisque tristique, justo tellus laoreet felis, dignissim viverra est ex eu urna. 
                        Quisque tristique vel quam vitae molestie. Sed interdum ipsum id felis accumsan vestibulum. 
                        Aliquam fermentum malesuada consectetur. Vestibulum vitae dui nulla. Cras ac interdum nibh. 
                        Vestibulum pretium enim sem, eget convallis diam vehicula semper.
                    </p>
                    <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?fm=jpg&amp;q=60&amp;
                    // w=3000&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                </div>
            </div>

            <div id={styles.testimonials}>
                <h2 className={styles.sectionTitle}>What our customers think</h2>
                <div id={styles.reviews}>
                    <Review name={reviewNames[0]} text={reviewTexts[0]}/>
                    <Review name={reviewNames[1]} text={reviewTexts[1]}/>
                    <Review name={reviewNames[2]} text={reviewTexts[2]}/>
                </div>
                <a style={{marginTop: "1em"}} href="https://www.yelp.com/biz/healing-energy-san-jose-2">
                    Check out what other customers think on our yelp page!
                </a>
            </div>

            <div id={styles.officePics}>
                <h2 className={styles.sectionTitle}>Our office</h2>
                <div id={styles.collage}>
                    <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?fm=jpg&amp;q=60&amp;
                    // w=3000&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?fm=jpg&amp;q=60&amp;
                    // w=3000&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?fm=jpg&amp;q=60&amp;
                    // w=3000&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?fm=jpg&amp;q=60&amp;
                    // w=3000&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?fm=jpg&amp;q=60&amp;
                    // w=3000&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?fm=jpg&amp;q=60&amp;
                    // w=3000&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                </div>
            </div>

            <div id={styles.mapContainer}>
                <iframe id={styles.map}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={process.env.REACT_APP_GOOGLE_MAP_KEY}>
                </iframe>
            </div>
        </div>
    );
}

export default Home;