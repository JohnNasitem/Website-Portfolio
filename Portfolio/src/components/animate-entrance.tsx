"use client"

import { useEffect, useState } from 'react';

const AnimateEntrance = (elementId : string) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Check if the element is in the viewport
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once the element is visible
                }
            },
            { threshold: 0 } // Trigger the animation when 50% of the element is in view
        );

        const target = document.getElementById(elementId);
        if (target) {
            observer.observe(target);
        }
    }, [elementId])

    return isVisible;
}

export default AnimateEntrance;