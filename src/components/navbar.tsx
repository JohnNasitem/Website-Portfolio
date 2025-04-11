"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from "@/components/theme-toggle";

type NarbarProps = {
    links: { name: string; href: string }[];    // Array of objects with name and href properties
    logo?: string;   // Optional logo URL
}

const Navbar: React.FC<NarbarProps> = ({ links, logo}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className="sticky top-0 bg-[var(--color-bg-alt-accent)] p-4 z-1000">
            <div className="container mx-auto flex justify-between items-center">
                {/* Only add logo if one is supplied */}
                {logo && (
                    <a href ="/" className="flex items-center">
                        <img src={logo} alt="Logo" className="h-8" />
                    </a>
                )}

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6">
                    {links.map((link, index) => (
                        <Link key={index} href={link.href} className="text-[var(--color-foreground)] hover:text-[var(--color-background)]">{link.name}</Link>
                    ))}
                    <ThemeToggle/>
                </div>

                {/* Hamburger Icon for mobile */}
                <button onClick={toggleMenu} className="md:hidden text-[var(--color-foreground)]">
                    ☰
                </button>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-[var(--color-bg-alt-accent)] p-4">
                        {links.map((link, index) => (
                            <Link key={index} href={link.href} className="block text-[var(--color-foreground)] py-2 hover:text-[var(--color-background)]">{link.name}</Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
