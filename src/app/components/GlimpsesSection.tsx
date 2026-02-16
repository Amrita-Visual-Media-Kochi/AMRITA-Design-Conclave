"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./GlimpsesSection.module.css";

const images = [
    { width: 420, label: "Event 1" },
    { width: 320, label: "Event 2" },
    { width: 280, label: "Event 3" },
    { width: 360, label: "Event 4" },
    { width: 300, label: "Event 5" },
    { width: 400, label: "Event 6" },
];

export default function GlimpsesSection() {
    const trackRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let animationId: number;
        let scrollPos = 0;
        const speed = 0.6;

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

    const allImages = [...images, ...images];

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Glimpses of past Events</h2>
                <div
                    className={styles.carouselContainer}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className={styles.carouselTrack} ref={trackRef}>
                        {allImages.map((img, index) => (
                            <div
                                key={index}
                                className={styles.imageCard}
                                style={{ width: `${img.width}px` }}
                            >
                                <div className={styles.placeholderImage}>
                                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="1.5">
                                        <rect x="3" y="3" width="18" height="18" rx="2" />
                                        <circle cx="8.5" cy="8.5" r="1.5" />
                                        <path d="M21 15l-5-5L5 21" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
