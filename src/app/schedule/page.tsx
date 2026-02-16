"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./schedule.module.css";
import Footer from "../components/Footer";

const day1Events = [
    {
        time: "10:00 AM - 11:00 AM",
        title: "Event Inauguration",
        type: "session",
        colorClass: "blue",
        speakers: [{ name: "Anoop Ambika", role: "CEO, Kerala Startup Mission", image: "/assets/anoop.jpg", badge: "/assets/badge.png" }],
    },
    {
        time: "11:00 AM - 11:15 AM",
        title: "Break",
        type: "break",
        colorClass: "gray",
    },
    {
        time: "11:15 AM - 12:15 PM",
        title: "Panel 1: ",
        subtitle: "Design Thinking in the New Creative Economy",
        type: "panel",
        colorClass: "lavender",
        speakers: [
            { name: "Kavya Baburaj", image: "/assets/kavya.jpg" },
            { name: "Anil Reddy", image: "/assets/anil.jpg" },
            { name: "Devika Panicker Prasad", image: "/assets/devika.jpg" },
            { name: "Hiran Venugopalan", image: "/assets/hiran.jpg" },
        ],
    },
    {
        time: "12:15 PM - 1:15 PM",
        title: "Lunch Break",
        type: "break",
        colorClass: "gray",
    },
    {
        time: "1:15 PM - 2:30 PM",
        title: "Panel 2: ",
        subtitle: "AI, Creativity, and the Future of Design Practice",
        type: "panel",
        colorClass: "lavender",
        speakers: [
            { name: "Gourav Jaiswal", image: "/assets/gourav.jpg" },
            { name: "Suleiman Ghori", image: "/assets/suleiman.jpg" },
            { name: "Lijin Varghese", image: "/assets/lijin.jpg" },
            { name: "Unni Banerji", image: "/assets/unni.jpg" },
        ],
    },
    {
        time: "2:30 PM - 3:30 PM",
        title: "Insight Session 1: ",
        subtitle: "Q&A session with Adobe India",
        type: "session",
        colorClass: "yellow",
        speakers: [
            { name: "Adobe Expert", placeholder: true },
        ],
    },
    {
        time: "4:00 PM - 5:00 PM",
        title: "Insight Session 2: ",
        subtitle: "Expert Talk",
        type: "session",
        colorClass: "yellow",
        speakers: [{ name: "Design Expert", placeholder: true }],
    },
];

const day2Events = [
    {
        time: "9:00 AM - 11:00 AM",
        title: "3D Printing Workshop by Kerala Startup Mission",
        type: "session",
        colorClass: "lavender",
    },
    {
        time: "11:00 AM - 11:15 AM",
        title: "Break",
        type: "break",
        colorClass: "gray",
    },
    {
        time: "11:15 AM - 12:00 PM",
        title: "3D Printing Workshop by Kerala Startup Mission",
        type: "session",
        colorClass: "lavender",
    },
    {
        time: "12:15 PM - 1:15 PM",
        title: "Lunch break",
        type: "break",
        colorClass: "gray",
    },
    {
        time: "1:30 PM - 4:30 PM",
        title: "Academic Research Paper Presentation",
        type: "session",
        colorClass: "lavender",
    },
];

export default function SchedulePage() {
    const [activeDay, setActiveDay] = useState<1 | 2>(1);

    return (
        <div className={styles.container}>
            {/* Navbar */}
            <nav className={styles.navbar}>
                <a href="/" className={styles.logo}>
                    <Image src="/assets/logoframe.svg" alt="ADC Logo" width={80} height={40} className={styles.logoImage} />
                </a>
                <div className={styles.navLinks}>
                    <a href="/schedule">Event Schedule</a>
                    <a href="/sponsors">Sponsors</a>
                    <a href="/#contact">Contact us</a>
                </div>
            </nav>

            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Event Schedule</h1>
                    <p className={styles.heroSubtitle}>
                        A carefully curated programme of panels, insight sessions, and exhibitions
                        designed to bridge the gap between design education and industry practice.
                    </p>
                    <a href="#schedule" className={styles.registerButton}>Register Now</a>
                </div>
            </section>

            {/* Schedule Section */}
            <section id="schedule" className={styles.scheduleSection}>
                <div className={styles.scheduleWrapper}>
                    <h2 className={styles.scheduleTitle}>
                        A Structured Day of<br />Insight and Dialogue
                    </h2>

                    <div className={styles.scheduleLayout}>
                        {/* Day Tabs */}
                        <div className={styles.dayTabs}>
                            <button
                                className={`${styles.dayTab} ${activeDay === 1 ? styles.dayTabActive : ""}`}
                                onClick={() => setActiveDay(1)}
                            >
                                Day 1
                            </button>
                            <button
                                className={`${styles.dayTab} ${activeDay === 2 ? styles.dayTabActive : ""}`}
                                onClick={() => setActiveDay(2)}
                            >
                                Day 2
                            </button>
                        </div>

                        {/* Timeline */}
                        <div className={styles.timeline}>
                            {activeDay === 1 && (
                                <>
                                    <div className={styles.dateHeader}>
                                        <span className={styles.dateIcon}>📅</span>
                                        <span>Wednesday — Mar 5th 2026</span>
                                    </div>
                                    {day1Events.map((event, index) => (
                                        <div
                                            key={index}
                                            className={`${styles.timelineItem} ${styles[event.colorClass || 'gray']}`}
                                        >
                                            <div className={styles.timeLabel}>{event.time}</div>
                                            <div className={styles.eventContent}>
                                                <h3 className={styles.eventTitle}>
                                                    {event.title}
                                                    {event.subtitle && <span className={styles.eventSubtitle}>{event.subtitle}</span>}
                                                </h3>
                                                {event.speakers && event.speakers.length > 0 && (
                                                    <div className={styles.speakerGrid}>
                                                        {event.speakers.map((speaker, sIndex) => (
                                                            <div key={sIndex} className={styles.speakerCard}>
                                                                <div className={styles.speakerImageWrap}>
                                                                    {speaker.image ? (
                                                                        <Image
                                                                            src={speaker.image}
                                                                            alt={speaker.name}
                                                                            width={80}
                                                                            height={80}
                                                                            className={styles.speakerImage}
                                                                        />
                                                                    ) : (
                                                                        <div className={styles.speakerPlaceholder}></div>
                                                                    )}
                                                                </div>
                                                                <span className={styles.speakerName}>{speaker.name}</span>

                                                                {/* Floating Badge for 1st speaker */}
                                                                {speaker.badge && (
                                                                    <div className={styles.floatingBadge}>
                                                                        <Image src={speaker.badge} alt="" width={40} height={40} />
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}

                            {activeDay === 2 && (
                                <>
                                    <div className={styles.dateHeader}>
                                        <span className={styles.dateIcon}>📅</span>
                                        <span>Thursday — Mar 6th 2026</span>
                                    </div>
                                    {day2Events.map((event, index) => (
                                        <div
                                            key={index}
                                            className={`${styles.timelineItem} ${styles[event.colorClass || 'gray']}`}
                                        >
                                            <div className={styles.timeLabel}>{event.time}</div>
                                            <div className={styles.eventContent}>
                                                <h3 className={styles.eventTitle}>{event.title}</h3>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Exhibition Section */}
            <section className={styles.exhibitionSection}>
                <div className={styles.exhibitionWrapper}>
                    <div className={styles.exhibitionDate}>
                        <span className={styles.dateIcon}>📅</span>
                        <span>5th - 6th Mar 2026</span>
                    </div>
                    <div className={styles.exhibitionCard}>
                        <div className={styles.exhibitionInfo}>
                            <span className={styles.exhibitionTime}>10:00 AM – 4:30 PM</span>
                            <h3 className={styles.exhibitionTitle}>Exhibition</h3>
                        </div>
                        <div className={styles.exhibitionFrameWrap}>
                            <Image
                                src="/assets/frame118.svg"
                                alt=""
                                width={280}
                                height={140}
                                className={styles.exhibitionFrame}
                            />
                            <Image
                                src="/assets/frame118.svg"
                                alt=""
                                width={280}
                                height={140}
                                className={styles.exhibitionFrame}
                            />
                            <Image
                                src="/assets/frame118.svg"
                                alt=""
                                width={280}
                                height={140}
                                className={styles.exhibitionFrame}
                            />
                            <Image
                                src="/assets/frame118.svg"
                                alt=""
                                width={280}
                                height={140}
                                className={styles.exhibitionFrame}
                            />
                            <Image
                                src="/assets/frame118.svg"
                                alt=""
                                width={280}
                                height={140}
                                className={styles.exhibitionFrame}
                            />
                            <Image
                                src="/assets/frame118.svg"
                                alt=""
                                width={280}
                                height={140}
                                className={styles.exhibitionFrame}
                            />
                            <Image
                                src="/assets/frame118.svg"
                                alt=""
                                width={280}
                                height={140}
                                className={styles.exhibitionFrame}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
