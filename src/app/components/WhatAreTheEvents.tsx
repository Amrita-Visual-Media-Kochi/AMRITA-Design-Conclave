"use client";

import Image from "next/image";
import styles from "./WhatAreTheEvents.module.css";

const allEvents = [
    {
        icon: "panels",
        title: "Panel Discussions",
        description:
            "Multiple industry perspectives in one conversation. Contrasting views on roles, realities, and career paths. Moderated to provide insight, not agreement.",
        image: "/other/panel discussion.png",
    },
    {
        icon: "insights",
        title: "Insight Sessions",
        description:
            "Direct access to speakers. Ask the questions classrooms usually avoid. Honest answers, no gatekeeping.",
        image: "/other/insight sessions.png",
    },
    {
        icon: "workshop",
        title: "Workshop",
        description:
            "Hands-on sessions by Kerala startup mission grounded in real workflows. Learn how design problems are actually approached and solved. Focused on process, not polish.",
        image: "/other/workshop.png",
    },
    {
        icon: "research",
        title: "Research paper presentation",
        description:
            "A platform for students and scholars to present research in design and related disciplines. Focused on inquiry, methodology, and evidence-based thinking.",
        image: "/other/research paper presentation.png",
    },
    {
        icon: "exhibition",
        title: "Exhibition",
        description:
            "Curated displays of student work across design disciplines. Showcasing process, experimentation, and final outcomes. A space for peer review, feedback, and visibility.",
        image: "/other/exhibition.png",
    },
];

// Duplicate for infinite loop
const duplicatedEvents = [...allEvents, ...allEvents];

function EventIcon({ type }: { type: string }) {
    switch (type) {
        case "panels":
            return (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="2" y="4" width="10" height="8" rx="2" stroke="white" strokeWidth="1.5" />
                    <rect x="16" y="4" width="10" height="8" rx="2" stroke="white" strokeWidth="1.5" />
                    <rect x="2" y="16" width="10" height="8" rx="2" stroke="white" strokeWidth="1.5" />
                    <rect x="16" y="16" width="10" height="8" rx="2" stroke="white" strokeWidth="1.5" />
                </svg>
            );
        case "insights":
            return (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="10" r="6" stroke="white" strokeWidth="1.5" />
                    <path d="M10 22h8M12 18h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            );
        case "workshop":
            return (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="3" y="3" width="22" height="16" rx="3" stroke="white" strokeWidth="1.5" />
                    <path d="M9 23h10M14 19v4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            );
        case "research":
            return (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="5" y="2" width="18" height="24" rx="3" stroke="white" strokeWidth="1.5" />
                    <path d="M10 8h8M10 12h8M10 16h5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            );
        case "exhibition":
            return (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="3" y="3" width="22" height="22" rx="3" stroke="white" strokeWidth="1.5" />
                    <circle cx="11" cy="11" r="3" stroke="white" strokeWidth="1.5" />
                    <path d="M3 20l6-6 4 4 4-4 8 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        default:
            return null;
    }
}

export default function WhatAreTheEvents() {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>What are the events?</h2>

                <div className={styles.carouselGlobal}>
                    <div className={styles.track}>
                        {duplicatedEvents.map((event, index) => (
                            <div key={index} className={styles.card}>
                                <div className={styles.cardImage}>
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className={styles.image}
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={styles.cardIcon}>
                                        <EventIcon type={event.icon} />
                                    </div>
                                    <h3 className={styles.cardTitle}>{event.title}</h3>
                                    <p className={styles.cardDescription}>{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
