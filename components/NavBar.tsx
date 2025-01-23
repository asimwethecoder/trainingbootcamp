'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import SmartFocusLogo from '@/assets/images/SmartFocusLogo.png';
import { usePathname, useRouter } from 'next/navigation';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      if (pathname !== '/') {
        router.push(`/#${sectionId}`);
      } else {
        section.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  const handleNavClick = (href: string, onClick?: () => void) => {
    if (onClick) {
      onClick();
    } else {
      router.push(href);
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/bootcamps', label: 'Bootcamps' },
    { 
      href: '/#calendar', 
      label: 'Calendar', 
      onClick: () => scrollToSection('calendar') 
    },
  ];

  return (
    <>
      <div className="flex-1 flex items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src={SmartFocusLogo} 
            alt="Smart Focus Logo" 
            width={40} 
            height={40} 
            className="dark:invert" 
          />
          <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
            Smart Focus
          </span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center">
        <div className="ml-10 flex items-baseline space-x-4">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href, link.onClick);
              }}
              aria-current={pathname === link.href ? 'page' : undefined}
              className="nav-link text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          className="inline-flex items-center justify-center p-2 rounded-md 
            text-gray-400 dark:text-gray-500 
            hover:text-gray-500 dark:hover:text-gray-400 
            hover:bg-gray-100 dark:hover:bg-gray-700 
            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#4361ee]"
        >
          <span className="sr-only">
            {isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
          </span>
          {isMobileMenuOpen ? (
            <X className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="block h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href, link.onClick);
                }}
                aria-current={pathname === link.href ? 'page' : undefined}
                className="nav-link block text-gray-700 dark:text-gray-300 
                  hover:bg-gray-100 dark:hover:bg-gray-700 
                  px-3 py-2 rounded-md"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;