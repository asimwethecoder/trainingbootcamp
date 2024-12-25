"use client"

import React, { useState, useEffect } from 'react';
import Navigation from './NavBar'
import ModeToggle from './ModeToggle' 

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <header 
      className={`
        fixed w-full z-50 transition-colors duration-300 
        ${isScrolled 
          ? 'bg-background/80 backdrop-blur-sm border-b shadow-sm' 
          : 'bg-transparent'}
        dark:bg-background/80 dark:border-border/50
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Navigation />
          <div className="flex items-center gap-4">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
