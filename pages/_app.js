import React from 'react';
import '../styles/globals.scss';
import { ThemeProvider } from 'next-themes';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider attribute="class">
      <Layout>
          <Component {...pageProps} />
      </Layout>
      </ThemeProvider>
  );
}

export default MyApp;
