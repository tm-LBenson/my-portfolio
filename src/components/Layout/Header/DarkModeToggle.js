import { useTheme } from '@src/components/ThemeContext';
import React from 'react';
import { Icon } from '@iconify/react';
function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Icon
      className='pointer'
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      icon="line-md:light-dark"
    />
  );
}

export default DarkModeToggle;
