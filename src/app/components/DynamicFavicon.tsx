"use client";

import { useEffect } from "react";

const FAVICONS = [
    "/other/1.svg",
    "/other/2.svg",
    "/other/3.svg",
    "/other/4.svg",
    "/other/5.svg",
];

export default function DynamicFavicon() {
    useEffect(() => {
        let currentIndex = 0;

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % FAVICONS.length;

            let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
            if (!link) {
                link = document.createElement("link");
                link.rel = "icon";
                document.head.appendChild(link);
            }

            link.href = FAVICONS[currentIndex];
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return null;
}
