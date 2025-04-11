"use client"

import React, { useState, useEffect } from 'react';
import { JSX } from 'react';
import { Moon, Sun } from 'lucide-react';

const SVGRenderer = ({icon}: {icon: string}) => {
    const nameToIcon: Record<string, JSX.Element> = {
        light: <Moon />,
        dark: <Sun />,
    }

    return nameToIcon[icon] || <div>Icon not added to SVGRenderer</div>
}

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
            <SVGRenderer icon={theme} />
        </button>
    )
}

export default ThemeToggle