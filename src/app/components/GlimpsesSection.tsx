"use client";

import { useEffect, useRef } from "react";
import styles from "./GlimpsesSection.module.css";

const images = [
    "/event_img/02b41be3548b79538d7286d9564dffe451f7473a.jpg",
    "/event_img/148bc58a7fdc96e81be366004ff468703ace2f74.jpg",
    "/event_img/20fc772613a89d075b9e730f07633632db274e79.jpg",
    "/event_img/2dada24e83e2c506fe5fb65fed031172be594b5a.jpg",
    "/event_img/3422449f040853691a2c3c300c3555d1e4f8b8b1.jpg",
    "/event_img/37d5e196d9c41fd7290bedda4c21516f37f55e39.jpg",
    "/event_img/5dd8787371c655e26f09a01986c299a1357d8121.jpg",
    "/event_img/62401a768552eadc87a4eec2493d1d24a22996de.jpg",
    "/event_img/8dc08d268ae11ca17b2074b6c851c27ada05ef9e.jpg",
    "/event_img/8f5d6082084e9e90f31a96f79d98b39ef2861035.jpg",
    "/event_img/922332a369bb12e8b679e43e26f3f79c70a385db.jpg",
    "/event_img/b6bf358dc1da600f52af2dda18a4162bd4f1cf09.jpg",
    "/event_img/bc867210f657e9fcca6244c3eb56a028a5434438.jpg",
];

export default function GlimpsesSection() {
    const trackRef = useRef<HTMLDivElement>(null);
    const isPausedRef = useRef(false);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let animationId: number;
        let scrollPos = 0;
        const speed = 0.6;

        const animate = () => {
            if (!isPausedRef.current && track) {
                scrollPos += speed;
                const halfWidth = track.scrollWidth / 2;
                if (scrollPos >= halfWidth) {
                    scrollPos -= halfWidth;
                }
                track.style.transform = `translateX(-${scrollPos}px)`;
            }
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationId);
    }, []);

    const allImages = [...images, ...images];

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Glimpses of past Events</h2>
                <div
                    className={styles.carouselContainer}
                    onMouseEnter={() => { isPausedRef.current = true; }}
                    onMouseLeave={() => { isPausedRef.current = false; }}
                >
                    <div className={styles.carouselTrack} ref={trackRef}>
                        {allImages.map((src, index) => (
                            <div key={index} className={styles.imageCard}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={src}
                                    alt={`Past event ${(index % images.length) + 1}`}
                                    className={styles.eventImage}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
