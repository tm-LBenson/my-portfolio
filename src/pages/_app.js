import { ThemeProvider } from '@src/components/ThemeContext';
import '@src/styles/sass/main.scss';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
