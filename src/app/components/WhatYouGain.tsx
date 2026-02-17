"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./WhatYouGain.module.css";

const gains = [
    {
        icon: "grid",
        title: "Clarity on real-world design roles",
        color: "#3B82F6",
    },
    {
        icon: "star",
        title: "Understanding of industry expectations",
        color: "#E11D48",
    },
    {
        icon: "sparkle",
        title: "Insight into everyday design responsibilities",
        color: "#8B5CF6",
    },
    {
        icon: "circle",
        title: "Exposure to professional workflows",
        color: "#F97316",
    },
    {
        icon: "target",
        title: "Practical career guidance",
        color: "#6D28D9",
    },
];

function GainIcon({ type, color }: { type: string; color: string }) {
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
            <div className={styles.wrapper}>
                {/* Left side: Image */}
                <div className={styles.imageContainer}>
                    <Image
                        src="/assets/girlwithglasses.png"
                        alt="What you gain"
                        fill
                        className={styles.image}
                    />
                    <div className={styles.imageOverlay}></div>
                </div>

                {/* Right side: Content */}
                <div className={styles.contentContainer}>
                    <h2 className={styles.title}>What you gain</h2>
                    <div className={styles.grid}>
                        {gains.map((gain, index) => (
                            <div key={index} className={styles.card}>
                                <div className={styles.cardIcon}>
                                    <GainIcon type={gain.icon} color={gain.color} />
                                </div>
                                <h3 className={styles.cardTitle}>{gain.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
