'use client';

import React, { useState } from 'react';
import './style.css';
import Link from 'next/link';

interface DropdownProps {
    name: string;
    links: Array<{ href: string; label: string }>;
}

const Dropdown = ({ name = 'Dropdown', links = [] }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleMouseEnter = () => setIsOpen(true);
    const handleMouseLeave = () => setIsOpen(false);

    return (
        <div
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button className="dropbtn" onClick={toggleDropdown}>
                {name}
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link href={link.href}>
                              {link.label}
                            </Link>
                        </li>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
