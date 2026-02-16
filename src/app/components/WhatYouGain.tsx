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
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="8" cy="8" r="3.5" fill={color} />
                    <circle cx="16" cy="8" r="3.5" fill={color} />
                    <circle cx="24" cy="8" r="3.5" fill={color} />
                    <circle cx="8" cy="16" r="3.5" fill={color} />
                    <circle cx="16" cy="16" r="3.5" fill={color} />
                    <circle cx="24" cy="16" r="3.5" fill={color} />
                    <circle cx="8" cy="24" r="3.5" fill={color} />
                    <circle cx="16" cy="24" r="3.5" fill={color} />
                    <circle cx="24" cy="24" r="3.5" fill={color} />
                </svg>
            );
        case "star":
            return (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                        d="M16 2L19.5 12.5L30 16L19.5 19.5L16 30L12.5 19.5L2 16L12.5 12.5L16 2Z"
                        fill={color}
                    />
                </svg>
            );
        case "sparkle":
            return (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="10" fill={color} />
                    <circle cx="16" cy="16" r="5" fill="white" />
                </svg>
            );
        case "circle":
            return (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="12" fill={color} />
                </svg>
            );
        case "target":
            return (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="12" stroke={color} strokeWidth="3" fill="none" />
                    <circle cx="16" cy="16" r="6" fill={color} />
                </svg>
            );
        default:
            return null;
    }
}

export default function WhatYouGain() {
    const trackRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let animationId: number;
        let scrollPos = 0;
        const speed = 0.5;

        const animate = () => {
            if (!isPaused && track) {
                scrollPos += speed;
                const halfWidth = track.scrollWidth / 2;
                if (scrollPos >= halfWidth) {
                    scrollPos = 0;
                }
                track.style.transform = `translateX(-${scrollPos}px)`;
            }
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationId);
    }, [isPaused]);

    const allGains = [...gains, ...gains];

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                {/* Top image banner */}
                <div className={styles.topArea}>
                    <Image
                        src="/assets/girlwithglasses.png"
                        alt="What you gain"
                        fill
                        className={styles.bgImage}
                    />
                    <div className={styles.imageOverlay}></div>
                    <div className={styles.titleArea}>
                        <span className={styles.quoteIcon}>&ldquo;</span>
                        <h2 className={styles.title}>What you gain</h2>
                    </div>
                </div>

                {/* Carousel overlapping below */}
                <div
                    className={styles.carouselArea}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className={styles.carouselTrack} ref={trackRef}>
                        {allGains.map((gain, index) => (
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
