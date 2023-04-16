import React, { useState, useEffect } from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

function Header() {
  const [isMobileScreen, setIsMobileScreen] = useState(false);

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

  return (
    <header className="header">
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
