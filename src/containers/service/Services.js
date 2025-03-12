import React from "react";
import { Link } from "react-router-dom";
import data from "./data";
import Service from "../../components/Service";
import styles from "./services.module.css";

function Services() {
    return (
        <div id={styles.servicePage}>
            <h1 id={styles.title}>Services</h1>
            <div id={styles.contact}>
                <p style={{marginTop: "0"}}>By Appointment only</p>
                <Link to="/contact">
                    <button>Contact</button>
                </Link>   
            </div>
            <div id={styles.servicesList}>
                {data.map((obj, index) => (
                    <Service key={index} title={obj.title} description={obj.description} prices={obj.prices}/>
                ))}
            </div>
        </div>
    );
}

export default Services;