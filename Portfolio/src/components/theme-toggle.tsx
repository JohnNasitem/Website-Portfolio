"use client"

import React, { useState, useEffect } from 'react';


const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        // Get the saved theme from localStorage or default to 'light'
        return window.localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        // Set theme
        document.documentElement.setAttribute('data-theme', theme);

        // save to local storage
        window.localStorage.setItem('theme', theme);
    }, [theme]) // Re-run whenever theme changages

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

      
    return (
        <button onClick={toggleTheme}>
            switch to {theme === 'light' ? 'dark' : 'light'} mode
        </button>
    )
}

export default ThemeToggle