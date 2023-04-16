import Header from './Header/index.js';
import Footer from './Footer/index.js';
import { useTheme } from '../ThemeContext.js';

function Layout({ children }) {
  const { theme } = useTheme();
  return (
    <>
      <Header />
      <main className={`${theme}`}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
