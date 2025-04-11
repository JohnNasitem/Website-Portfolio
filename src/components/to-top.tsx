"use client"

import { useEffect, useState } from 'react';

// Smooth scroll to the top of the page
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const ToTop = () => {
    const [isNotDefaultPos, setIsDefaultPos] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        setIsDefaultPos(window.scrollY == 0);
        setScrolled(true);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        if (window.scrollY > 0)
            setScrolled(true);

        // Clean up event listern
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button onClick={scrollToTop} className={`z-999 text-[var(--color-foreground)] bg-[var(--color-bg-alt-accent)] flex items-center h-10 w-10 rounded-lg fixed bottom-5 right-5 p-4 ${scrolled ? (isNotDefaultPos ? 'animate-fade-slide-out' : 'animate-fade-slide-in') : 'hidden'}`}>
            ↑
        </button>
    )
}

export default ToTop;