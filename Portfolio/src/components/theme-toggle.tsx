"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ThemeToggle = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        if (storedTheme) {
            setTheme(storedTheme)
        }
    }, [])

    useEffect(() => {
        // Set theme
        document.documentElement.setAttribute('data-theme', theme);

        // save to local storage
        localStorage.setItem('theme', theme);
    }, [theme]) // Re-run whenever theme changages

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

      
    return (
        <button onClick={toggleTheme} className='hover:animate-grow animate-shrink'>
            <Image src={`/${(theme === 'light' ? 'moon' : 'sun')}.png`} width={24} height={24} alt={`${(theme === 'light' ? 'moon' : 'sun')}`}/>
        </button>
    )
}

export default ThemeToggle