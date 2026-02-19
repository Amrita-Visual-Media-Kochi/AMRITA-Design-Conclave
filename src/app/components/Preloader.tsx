"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./Preloader.module.css";

export default function Preloader() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [isVisible, setIsVisible] = useState(isHome);
    const [shouldRender, setShouldRender] = useState(isHome);

    useEffect(() => {
        if (!isHome) {
            setShouldRender(false);
            return;
        }

        // Prevent scrolling when visible
        if (isVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        // Timer to fade out
        const timer = setTimeout(() => {
            setIsVisible(false);
            // Remove from DOM after transition
            setTimeout(() => setShouldRender(false), 800);
        }, 1800); // 1.5s for load progress

        return () => clearTimeout(timer);
    }, [isVisible, isHome]);

    if (!shouldRender) return null;

    return (
        <div className={`${styles.container} ${isVisible ? "" : styles.hidden}`}>
            <div className={styles.loaderContent}>
                <Image
                    src="/assets/icons/adc-logo.svg"
                    alt="Amrita Design Conclave"
                    width={180}
                    height={80}
                    className={styles.logo}
                    priority
                />

                <div className={styles.progressBar}>
                    <div className={styles.progressFill}></div>
                </div>
            </div>
        </div>
    );
}
