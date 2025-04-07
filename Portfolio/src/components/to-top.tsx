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

    useEffect(() => {
        const handleScroll = () => {
            setIsDefaultPos(window.scrollY == 0);
            setScrolled(true);
        }

        window.addEventListener('scroll', handleScroll);

        // Clean up event listern
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <button onClick={scrollToTop} className={`flex items-center h-10 w-10 rounded-lg fixed bottom-5 right-5 bg-blue-400 p-4 text-white ${scrolled ? (isNotDefaultPos ? 'animate-fade-slide-out' : 'animate-fade-slide-in') : 'hidden'}`}>
            ↑
        </button>
    )
}

export default ToTop;