import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { CalcProvider } from '@/context/Calc.provider';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CalcProvider>
      {' '}
      <Component {...pageProps} />
    </CalcProvider>
  );
}
