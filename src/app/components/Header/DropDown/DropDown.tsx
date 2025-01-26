'use client';

import React, { useState } from 'react';
import './style.css';
import Image from 'next/image';
import ArrowDown from '../../../Assets/arrow-down.svg';

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
      <Image src={ArrowDown} className="arrow" alt="Стрелка" />
      {isOpen && (
        <div className="dropdown-content">
          {links.map((link, index) => (
            <a key={index} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
