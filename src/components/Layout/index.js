import Header from './Header/index.js';
import Footer from './Footer/index.js';
import { useTheme } from '../ThemeContext.js';
import { useEffect, useState } from 'react';
import analytics from 'analytics-benson';
import LoadingOverlay from '../LoadingOverlay/index.js';
import { useLoadingContext } from '../LoadingOverlay/LoadingContext.js';

function Layout({ children }) {
  const { isFirstLoad, setIsFirstLoad } = useLoadingContext();
  const [isLoading, setLoading] = useState(isFirstLoad);

  useEffect(() => {
    if (isFirstLoad) {
      setTimeout(() => setLoading(false), 1000);
      setIsFirstLoad(false);
    } else {
      setLoading(false);
    }
    analytics('My Portfolio', 'd526e49d-cc0f-468f-b04d-f59e21f6365a');
  }, []);

  const { theme } = useTheme();

  return (
    <>
      <LoadingOverlay
        onAnimationComplete={setLoading}
        isVisible={isLoading}
      />
      {!isLoading && <Header />}
      <main className={`main${' '}${theme}`}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
