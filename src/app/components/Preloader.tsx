"use client";

import { useEffect, useState } from "react";
import styles from "./Preloader.module.css";

export default function Preloader() {
    const [isVisible, setIsVisible] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
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
        }, 1500); // Show for 1.5s

        return () => clearTimeout(timer);
    }, [isVisible]);

    if (!shouldRender) return null;

    return (
        <div className={`${styles.container} ${isVisible ? "" : styles.hidden}`}>
            <div className={styles.loaderWrapper}>
                {/* Inline frame118.svg */}
                <svg
                    width="138"
                    height="336"
                    viewBox="0 0 138 336"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Group 1: Top (Teal Shapes) - Delay 0s */}
                    <g className={styles.waveElement} style={{ animationDelay: "0s" }}>
                        <path d="M134.296 1.94448e-05L134.296 13.9921C124.831 13.9921 117.011 21.8112 117.011 31.2764C117.011 40.7416 124.693 48.5607 134.296 48.5607L134.296 62.5527C117.149 62.5527 103.157 48.5607 103.157 31.2764C103.157 13.9921 117.149 1.92403e-05 134.296 1.94448e-05Z" fill="#5DC4B8" />
                        <path d="M72.2918 0.137348L72.2918 14.1294C81.7571 14.1294 89.5761 21.9485 89.5761 31.4137C89.5761 40.8789 81.8942 48.698 72.2918 48.698L72.2918 62.6901C89.439 62.6901 103.431 48.698 103.431 31.4137C103.431 14.1294 89.439 0.137348 72.2918 0.137348Z" fill="#5DC4B8" />
                    </g>

                    {/* Group 2: Upper Mid (Orange Complex) - Delay 0.1s */}
                    <g className={styles.waveElement} style={{ animationDelay: "0.1s" }}>
                        <path d="M61.5926 82.5804L56.3799 92.32L66.3938 97.1212L57.203 103.431L63.9247 112.211L52.8133 113.445L54.5966 124.419L44.3083 120.441L40.7417 131.004L33.4714 122.636L25.3779 130.318L22.9087 119.481L12.2089 122.636L14.9525 111.799L4.1155 109.604L11.523 101.374L2.88089 94.2405L13.3063 90.3995L8.91669 80.2484L20.028 81.6202L20.8511 70.646L30.0419 76.9562L35.9405 67.6282L41.0161 77.5049L50.6185 71.8806L50.4813 82.992L61.5926 82.5804Z" fill="#F5885D" />
                    </g>

                    {/* Group 3: Mid (Yellow Top + Pink) - Delay 0.2s */}
                    <g className={styles.waveElement} style={{ animationDelay: "0.2s" }}>
                        <path d="M4.52649 135.805L4.52649 201.65L70.5086 201.65L70.5086 135.805L4.52649 135.805Z" fill="#FACD0F" />
                        <path d="M70.6462 168.728L68.5885 169.276C53.6362 172.98 41.9762 184.64 38.2724 199.592L37.7237 201.65L37.175 199.592C33.4712 184.64 21.8112 172.98 6.85889 169.276L4.80124 168.728L6.85889 168.179C21.8112 164.475 33.4712 152.815 37.175 137.863L37.7237 135.805L38.2724 137.863C41.9762 152.815 53.6362 164.475 68.5885 168.179L70.6462 168.728Z" fill="#EE3C6F" />
                    </g>

                    {/* Group 4: Lower Mid (Teal Circle + Masked) - Delay 0.3s */}
                    <g className={styles.waveElement} style={{ animationDelay: "0.3s" }}>
                        <path d="M69.6857 235.259C69.6857 217.303 55.13 202.748 37.1747 202.748C19.2195 202.748 4.66379 217.303 4.66379 235.259C4.66379 253.214 19.2194 267.77 37.1747 267.77C55.13 267.77 69.6857 253.214 69.6857 235.259Z" fill="#5DC4B8" />
                        {/* Simplified Masked Group */}
                        <circle cx="106" cy="255" r="5" fill="#FACE11" />
                        <circle cx="106" cy="235" r="5" fill="#FACE11" />
                        <circle cx="126" cy="255" r="5" fill="#FACE11" />
                        <circle cx="126" cy="235" r="5" fill="#FACE11" />
                    </g>

                    {/* Group 5: Bottom (Purple) - Delay 0.4s */}
                    <g className={styles.waveElement} style={{ animationDelay: "0.4s" }}>
                        <path d="M131.964 284.094L126.477 294.245L136.902 299.183L127.3 305.63L134.296 314.958L122.773 316.193L124.693 327.579L113.856 323.326L110.29 334.3L102.745 325.658L94.3773 333.615L91.6337 322.366L80.6596 325.658L83.5403 314.41L72.1546 312.078L79.8365 303.573L70.92 296.302L81.757 292.187L77.2302 281.624L88.753 283.133L89.5761 271.611L99.0413 278.195L105.214 268.455L110.564 278.744L120.441 272.982L120.441 284.505L131.964 284.094Z" fill="#5D489D" />
                    </g>
                </svg>
            </div>
        </div>
    );
}
