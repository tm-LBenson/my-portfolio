import Header from './Header/index.js';
import Footer from './Footer/index.js';
import { useTheme } from '../ThemeContext.js';
import { useEffect, useState } from 'react';
import analytics from 'analytics-benson';
import LoadingOverlay from '../LoadingOverlay/index.js';
import { useLoadingContext } from '../LoadingOverlay/LoadingContext.js';
import Head from 'next/head.js';

function Layout({ children }) {
  const { isFirstLoad, setIsFirstLoad } = useLoadingContext();
  const [isLoading, setLoading] = useState(isFirstLoad);

  useEffect(() => {
    let timer;
    if (isFirstLoad) {
      timer = setTimeout(() => setLoading(false), 1000);
      setIsFirstLoad(false);
    } else {
      setLoading(false);
    }
    analytics('My Portfolio', 'd526e49d-cc0f-468f-b04d-f59e21f6365a');

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  const { theme } = useTheme();

  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="/LB.svg"
        />
      </Head>

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
