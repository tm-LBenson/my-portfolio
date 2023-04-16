import React, { useState, useEffect } from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

function Header() {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 1000);
    };

    handleResize(); // Initialize the state on first render
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrollingUp(currentScrollTop < lastScrollTop);
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header${isScrollingUp ? '' : ' slide-up'}`}>
      <Link
        className="logo"
        href="/"
      >
        Lewis Benson
      </Link>
      <nav className="nav">
        {isMobileScreen ? <MobileNav /> : <DesktopNav />}
        <DarkModeToggle />
      </nav>
    </header>
  );
}

export default Header;
