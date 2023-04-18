import { ThemeProvider } from '@src/components/ThemeContext';
import '@src/styles/sass/main.scss';
import Script from 'next/script';
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Script src="/prism.js" />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}
