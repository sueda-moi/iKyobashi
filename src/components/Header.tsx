// components/Header.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiAlignJustify } from 'react-icons/fi';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/Pg001', label: 'ホーム' },
    { path: '/Pg002', label: '概要' },
    { path: '/Pg003', label: '事業内容' },
    { path: '/Pg004', label: 'お問い合わせ' },
  ];

  return (
    <header className={`${scrolled ? 'scrolled' : ''}`}>

      {/* Logo */}
      <div className="flex-shrink-0">
        <Image src="/image/logo.png" alt="Logo" width={150} height={100} />
      </div>

      {/* Add onClick handler to toggle menu */}
      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span>
        <FiAlignJustify size={24} color="white" />
        </span>
      </div>

      {/* Navigation */}
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
        {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                {isActive ? (
                  <span className="nav-link active">{item.label}</span>
                ) : (
                  <Link href={item.path} 
                  className="nav-link"
                  onClick={toggleMenu}>
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>


    </header>
  );
};

export default Header;
