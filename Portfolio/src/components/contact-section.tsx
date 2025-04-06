"use client"

import { useEffect, useState } from 'react';

const ContactSection = () => {
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
        )

        const target = document.getElementById('contact');
        if (target) {
            observer.observe(target);
        }
    })

    

    return (
        <div id="contact" className="grid grid-rows-[20px_1fr_20px] min-h-screen items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-orange-500">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            <div className={`list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)] ${isVisible ? 'animate-fade-slide' : ''}`}>
                <h1 className="text-4xl sm:text-6xl font-bold justify-self-center">
                Contact
                </h1>
            </div>
        </main>
        </div> 
    )
};
    
  export default ContactSection;