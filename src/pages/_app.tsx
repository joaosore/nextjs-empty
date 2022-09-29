import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import '../styles/global.scss';
import '../styles/light-theme.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
