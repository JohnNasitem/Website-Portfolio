"use client";

import React, { useState } from 'react';
import Link from 'next/link';

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
        <nav className = "sticky top-0 bg-gray-800 p-4">
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
                        <Link key={index} href={link.href} className="text-white hover:text-gray-400">{link.name}</Link>
                    ))}
                </div>

                {/* Hamburger Icon for mobile */}
                <button onClick={toggleMenu} className="md:hidden text-white">
                    ☰
                </button>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-gray-700 p-4">
                        {links.map((link, index) => (
                            <Link key={index} href={link.href} className="block text-white py-2 hover:bg-gray-600">{link.name}</Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;