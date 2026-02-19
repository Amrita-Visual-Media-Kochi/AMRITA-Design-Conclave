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
        icon: "/other/1.svg",
        title: "Clarity on real-world design roles",
        description: "Gain a clear understanding of the diverse roles in the design industry and where you fit in.",
    },
    {
        icon: "/other/2.svg",
        title: "Understanding of industry expectations",
        description: "Learn what top companies look for in designers and working to meet those standards.",
    },
    {
        icon: "/other/3.svg",
        title: "Insight into everyday design responsibilities",
        description: "Get a glimpse into the daily tasks and challenges faced by professional designers.",
    },
    {
        icon: "/other/4.svg",
        title: "Exposure to professional workflows",
        description: "Discover the tools and processes used by successful design teams to deliver great work.",
    },
    {
        icon: "/other/5.svg",
        title: "Practical career guidance",
        description: "Receive actionable advice on building your portfolio and navigating your career path.",
    },
];

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
                                    <Image
                                        src={gain.icon}
                                        alt=""
                                        width={48}
                                        height={48}
                                    />
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
