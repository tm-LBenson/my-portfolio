import Header from './Header/index.js';
import Footer from './Footer/index.js';
import { useTheme } from '../ThemeContext.js';
import { useEffect } from 'react';

function Layout({ children }) {
  useEffect(() => {
    analytics('My Portfolio', 'd526e49d-cc0f-468f-b04d-f59e21f6365a');
  }, []);
  const { theme } = useTheme();
  return (
    <>
      <Header />
      <main className={`main${' '}${theme}`}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
