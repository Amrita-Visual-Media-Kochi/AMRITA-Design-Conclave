"use client";

import Image from "next/image";
import styles from "../misc.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
    return (
        <div className={styles.container}>
            <Navbar />

            <main className={styles.hero}>
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>

                <Image
                    src="/assets/shapes/Vector Star.svg"
                    alt="Star"
                    width={60}
                    height={60}
                    className={styles.floatingIcon1}
                />

                <h1 className={styles.heroTitle}>About the Conclave</h1>
                <p className={styles.heroSubtitle}>
                    Bridging design education with real-world industry practice to prepare the next generation of creative leaders.
                </p>
            </main>

            <section className={styles.contentWrapper}>
                <div className={styles.content}>
                    <h2>Our Vision</h2>
                    <p>The Amrita Design Conclave was established with a singular vision: to tear down the invisible walls between academic design theory and the fast-paced, high-stakes environments of real-world studios, startups, and corporations.</p>
                    <p>Too often, design education focuses heavily on aesthetics and isolated projects, leaving graduates unprepared for the complex realities of product management, stakeholder friction, and business metrics. We are here to change that narrative.</p>

                    <h2>What We Do</h2>
                    <ul>
                        <li>Curate deep-dive sessions with active industry leaders.</li>
                        <li>Expose young designers to constraints and compromises they will face in their careers.</li>
                        <li>Build an intensive networking ecosystem between emerging talent and established organizations.</li>
                    </ul>
                </div>
            </section>

            <Footer />
        </div>
    );
}
