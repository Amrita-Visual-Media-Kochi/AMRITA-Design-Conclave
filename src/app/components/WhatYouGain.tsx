"use client";

import styles from "./WhatYouGain.module.css";

const gains = [
    {
        icon: "grid",
        title: "Clarity on real-world design roles",
        description: "Gain a clear understanding of the diverse roles in the design industry and where you fit in.",
        color: "#3B82F6",
    },
    {
        icon: "star",
        title: "Understanding of industry expectations",
        description: "Learn what top companies look for in designers and working to meet those standards.",
        color: "#E11D48",
    },
    {
        icon: "sparkle",
        title: "Insight into everyday design responsibilities",
        description: "Get a glimpse into the daily tasks and challenges faced by professional designers.",
        color: "#8B5CF6",
    },
    {
        icon: "circle",
        title: "Exposure to professional workflows",
        description: "Discover the tools and processes used by successful design teams to deliver great work.",
        color: "#F97316",
    },
    {
        icon: "target",
        title: "Practical career guidance",
        description: "Receive actionable advice on building your portfolio and navigating your career path.",
        color: "#6D28D9",
    },
];

function GainIcon({ type, color }: { type: string; color: string }) {
    // Icons remain the same...
    switch (type) {
        case "grid":
            return (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="8" cy="8" r="3.5" fill={color} />
                    <circle cx="18" cy="8" r="3.5" fill={color} />
                    <circle cx="28" cy="8" r="3.5" fill={color} />
                    <circle cx="8" cy="18" r="3.5" fill={color} />
                    <circle cx="18" cy="18" r="3.5" fill={color} />
                    <circle cx="28" cy="18" r="3.5" fill={color} />
                    <circle cx="8" cy="28" r="3.5" fill={color} />
                    <circle cx="18" cy="28" r="3.5" fill={color} />
                    <circle cx="28" cy="28" r="3.5" fill={color} />
                </svg>
            );
        case "star":
            return (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path
                        d="M18 2L21.5 14.5L34 18L21.5 21.5L18 34L14.5 21.5L2 18L14.5 14.5L18 2Z"
                        fill={color}
                    />
                </svg>
            );
        case "sparkle":
            return (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="12" fill={color} />
                    <circle cx="18" cy="18" r="6" fill="white" />
                </svg>
            );
        case "circle":
            return (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="14" fill={color} />
                </svg>
            );
        case "target":
            return (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="14" stroke={color} strokeWidth="3" fill="none" />
                    <circle cx="18" cy="18" r="7" fill={color} />
                </svg>
            );
        default:
            return null;
    }
}

export default function WhatYouGain() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>What You Gain</h2>
                <p className={styles.subtitle}>Scroll down to stack the cards. Scroll back up to unstack them.</p>
            </div>
            <ul
                className={styles.cards}
                id="cards"
                style={{
                    "--numcards": gains.length,
                } as React.CSSProperties}
            >
                {gains.map((gain, index) => (
                    <li
                        key={index}
                        className={styles.card}
                        id={`card-${index + 1}`}
                        style={{
                            "--index": index + 1,
                        } as React.CSSProperties}
                    >
                        <div className={styles.cardContent}>
                            <div className={styles.textContent}>
                                <h3 style={{ color: gain.color }}>{gain.title}</h3>
                                <p>{gain.description}</p>
                            </div>
                            <div className={styles.iconContainer} style={{ backgroundColor: `${gain.color}10` }}>
                                <GainIcon type={gain.icon} color={gain.color} />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
