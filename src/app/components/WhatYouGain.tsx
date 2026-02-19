"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./WhatYouGain.module.css";

// Register ScrollTrigger safely
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

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
        icon: "arc",
        title: "Practical career guidance",
        description: "Receive actionable advice on building your portfolio and navigating your career path.",
        color: "#F97316",
    },
];

function GainIcon({ type, color }: { type: string; color: string }) {
    switch (type) {
        case "grid":
            return (
                <svg width="48" height="48" viewBox="0 0 36 36" fill="none">
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
                <svg width="48" height="48" viewBox="0 0 36 36" fill="none">
                    <path
                        d="M18 2L21.5 14.5L34 18L21.5 21.5L18 34L14.5 21.5L2 18L14.5 14.5L18 2Z"
                        fill={color}
                    />
                </svg>
            );
        case "sparkle":
            return (
                <svg width="48" height="48" viewBox="0 0 36 36" fill="none">
                    <path
                        d="M18 0L20 8L27 3L26 11L34 10L29 17L36 21L28 24L32 32L24 29L21 36L18 29L15 36L12 29L4 32L8 24L0 21L7 17L2 10L10 11L9 3L16 8L18 0Z"
                        fill={color}
                    />
                </svg>
            );
        case "circle":
            return (
                <svg width="48" height="48" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="14" fill={color} />
                </svg>
            );
        case "arc":
            return (
                <svg width="48" height="48" viewBox="0 0 36 36" fill="none">
                    <path
                        d="M2 28 C2 12, 34 12, 34 28"
                        stroke={color}
                        strokeWidth="8"
                        strokeLinecap="round"
                        fill="none"
                    />
                </svg>
            );
        default:
            return null;
    }
}

export default function WhatYouGain() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!sectionRef.current || !cardsRef.current) return;

        // Ensure fresh state
        ScrollTrigger.refresh();

        const cards = gsap.utils.toArray<HTMLElement>(`.${styles.card}`);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                pin: true,
                start: "top top",
                end: "+=4000",
                scrub: 1,
                pinSpacing: true, // Explicitly enforce spacing
                anticipatePin: 1,
                invalidateOnRefresh: true,
            }
        });

        cards.forEach((card, i) => {
            tl.to(card, {
                top: "50%",
                y: "-50%",
                duration: 1,
                ease: "power2.out",
            });
        });

    }, { scope: sectionRef });

    return (
        <section className={styles.section} id="what-you-gain" ref={sectionRef}>
            <div className={styles.bgContainer}>
                <Image
                    src="/assets/images/girl.png"
                    alt="What You Gain Background"
                    fill
                    className={styles.bgImage}
                    priority
                />
            </div>

            <h2 className={styles.title}>What you gain</h2>

            <div className={styles.cardsContainer} ref={cardsRef}>
                {gains.map((gain, index) => (
                    <div
                        key={index}
                        className={styles.card}
                        style={{ zIndex: index + 10 }}
                    >
                        <div className={styles.cardContent}>
                            <div className={styles.cardBody}>
                                <div className={styles.iconWrapper}>
                                    <GainIcon type={gain.icon} color={gain.color} />
                                </div>
                                <div className={styles.textContent}>
                                    <h3>{gain.title}</h3>
                                    <p>{gain.description}</p>
                                </div>
                            </div>

                            <div className={styles.cardFooter}>
                                <Image
                                    src="/assets/shapes/group10.svg"
                                    alt=""
                                    width={400}
                                    height={50}
                                    className={styles.decorationImage}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
