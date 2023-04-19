import { LoadingProvider } from '@src/components/LoadingOverlay/LoadingContext';
import { ThemeProvider } from '@src/components/ThemeContext';
import '@src/styles/sass/main.scss';
import Script from 'next/script';
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <LoadingProvider>
        <Script src="/prism.js" />

        <Component {...pageProps} />
      </LoadingProvider>
    </ThemeProvider>
  );
}
