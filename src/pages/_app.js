import { ThemeProvider } from '@src/components/ThemeContext';
import '@src/styles/sass/main.scss';
import Script from 'next/script';
import prism from './prism';
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <Script src={prism} />
    </ThemeProvider>
  );
}
