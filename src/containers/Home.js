import React, { useRef, useEffect, useState } from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";


function Home() {
    const yelpRefs = useRef([]);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.yelp.com/embed/widgets.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        return () => {
          document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        yelpRefs.current[0] = ` 
                        <span class="yelp-review" data-review-id="GteKnDDTcpeK1TfDNsKyIQ" data-hostname="www.yelp.com">
                            Read 
                            <a href="https://www.yelp.com/user_details?userid=xfrLxcRQxPW6D-j5ccbcQg" rel="nofollow noopener">
                                Kristina J.
                            </a>'s 
                            <a href="https://www.yelp.com/biz/healing-energy-san-jose-2?hrid=GteKnDDTcpeK1TfDNsKyIQ" rel="nofollow noopener">
                                review
                            </a>
                                of 
                            <a href="https://www.yelp.com/biz/6tRcPoVxj5AUB7UegsJrUQ" rel="nofollow noopener">Healing Energy</a>
                                on 
                            <a href="https://www.yelp.com" rel="nofollow noopener">
                                Yelp
                            </a>
                        </span>
                    `;
    }, [])

    return (
        <div id={styles.home}>
            <div id={styles.hero}>
                <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?fm=jpg&amp;q=60&amp;
                // w=3000&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <div id={styles.heroInfo}>
                    <h1>Your destination for healing</h1>
                    <div id={styles.heroButtons}>
                        <button>Contact</button>
                        <button>Services</button>
                    </div>
                </div>
            </div>

            <div id={styles.about}>
                <div id={styles.summary}>
                    <div className={styles.lore}>
                        <h2>About Us</h2>
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
                    <div className={styles.lore}>
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
            </div>

            <div id={styles.testimonials}>
                <h2>What our customers think</h2>
                <div id={styles.reviews}>
                    <div>
                        <div dangerouslySetInnerHTML={{__html: yelpRefs.current[0]}}/>
                    </div>
                </div>
            </div>

            <div id={styles.officePics}>
                <h2>Our office</h2>
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

            <div id={styles.contact}>
            <iframe id={styles.map} 
                loading="lazy" 
                // allowfFullScreen 
                src={process.env.REACT_APP_GOOGLE_MAP_KEY}>

            </iframe>
            </div>

        </div>
    );
}

export default Home;