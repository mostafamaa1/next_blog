import React from 'react';
import '../styles/globals.scss';
import { Layout } from '../components';
import { ThemeProvider } from 'next-themes';

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
