import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';
import AnimatedLBLogo from './Logo';
import { useLoadingContext } from '@src/components/LoadingOverlay/LoadingContext';

function Header() {
  const { isFirstLoad } = useLoadingContext();
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

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      {isFirstLoad && (
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.5,
            delay: 2,
          }}
          variants={headerVariants}
        ></motion.div>
      )}
      <motion.header
        className={`header${isScrollingUp ? '' : ' slide-up'}`}
        style={isFirstLoad ? { y: -100, opacity: 0 } : {}}
      >
        <Link
          className="logo"
          href="/"
        >
          <AnimatedLBLogo />
        </Link>
        <nav className="nav">
          {isMobileScreen ? <MobileNav /> : <DesktopNav />}
          <DarkModeToggle />
        </nav>
      </motion.header>
    </>
  );
}

export default Header;
