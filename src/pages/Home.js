import React from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import Review from "../components/Review";
import waitingRoomImage from "../assets/images/sized/wait_room2.jpg";
import roomEntranceImage from "../assets/images/sized/room_back_angle.jpg";
import roomBackAngle from "../assets/images/sized/room_back_angle2.jpg";
import roomAngle3 from "../assets/images/sized/room_angle3.jpg";
import certsImage from "../assets/images/sized/certs.jpg";
import certs2Image from "../assets/images/sized/certs2.jpg";
import happyBuddhaImage from "../assets/images/sized/happy_buddha.jpg";
import wallAdornmentImage from "../assets/images/sized/wall_adornment.jpg";
import mountainsImage from "../assets/images/sized/mountains_banner_2.jpeg";



function Home() {
    const reviewNames = [ "Carri M.", "Abraham M.", "Igor M." ];
    const reviewTexts = [   "Had a back problem and Marina \"got in there\" with her magic elbows, and sorted me out! She knew where the problems were and how to fix them. Having experienced her deep tissue/therapeutic expertise, I shall certainly return for a relaxing massage another time.",
                            "I have polio which means I limp badly which means I have scoliosis - and I get tensed up and my body hurts. My body is asymmetric and quirky. All of which needs someone who can read my body and give very specialized treatment. Marina is an amazing body whisperer and an absolutely wonderful masseuse. I leave refreshed and relaxed with a while lot less pain every time. Give her a try and you will love her work and how you feel after.",
                            "Marina is very professional and knowledgeable about many different massages and techniques. She is able to customize the massage based on need and target any problem areas. I always have a stiff upper back and neck, Marina is able to relieve the pain after just one session. I feel very refreshed and relaxed after her massages. My sleep and overall energy levels increase every time also. I highly recommend Marina to everyone, she is very easy to work with and schedule appointments."
                        ]

    return (
        <div id={styles.home}>
            <div id={styles.hero}>
                <img src={mountainsImage} />
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
                <h1 className={styles.sectionTitle}>About</h1>
                <div id={styles.lore1}>
                    <p>
                        Welcome to Healing Energy! I'm Marina Borodianski, a dedicated massage therapist passionate about helping clients relax, heal, and feel their 
                        best. With over 20 years of experience, I specialize in a variety of massage techniques, including deep tissue, neuromuscular therapy, Shiatsu and more. 
                        Through the inclusion of psychosomatic therapy, I'm able to address the root cause of your pain and provide a holistic approach to healing.
                    </p>
                    <img src={certsImage}/>
                </div>
                <div id={styles.lore2}>
                    <p>
                        Every session is designed to promote well-being, whether you're seeking stress relief, muscle recovery, or simply a moment of relaxation. 
                        I take pride in offering professional, personalized massages that leave you feeling refreshed and restored.  Book an appointment today and 
                        experience the difference!
                    </p>
                    <img src={happyBuddhaImage}/>
                </div>
            </div>

            <div id={styles.testimonials}>
                <h1 className={styles.sectionTitle}>What customers think</h1>
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
                <h1 className={styles.sectionTitle}>Our Office</h1>
                <div id={styles.collage}>
                    <img src={roomBackAngle} alt="massage room"/>
                    <img src={roomEntranceImage} alt="massage room"/>
                    <img src={roomAngle3} alt="massage room"/>
                    <img src={waitingRoomImage} alt="waiting room"/>
                    <img src={certs2Image} alt="certifactions on wall"/>
                    <img src={wallAdornmentImage} alt="wall decoration"/>
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