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
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-[999] flex items-center justify-between px-6 py-4 transition-all duration-300',
        scrolled ? 'bg-black/80 shadow-md' : 'bg-transparent',
      )}
    >
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image src="/image/logo.png" alt="Logo" width={120} height={50} />
      </div>

      {/* Hamburger Icon */}
      <div
        className="md:hidden cursor-pointer"
        onClick={toggleMenu}
      >
        <FiAlignJustify size={24} color="white" />
      </div>

      {/* Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col absolute top-full left-0 w-full bg-black/90 p-4 md:hidden text-white text-sm font-medium gap-4 z-50"
          >
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.path} className="list-none">
                    {isActive ? (
                      <span className="text-green-300 font-bold pointer-events-none relative after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-full after:bg-green-300 after:scale-x-100">
                        {item.label}
                      </span>
                    ) : (
                      <Link
                        href={item.path}
                        onClick={() => {
                          // Close the menu first, then navigate.
                          toggleMenu();
                        }}
                        className="relative text-white hover:text-green-300 transition-all duration-200 after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-full after:bg-green-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

          </motion.nav>
        )}
      </AnimatePresence>


    </header>
  );
};

export default Header;
