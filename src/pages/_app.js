import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from 'styles/theme';
import createEmotionCache from 'styles/createEmotionCache';
import withReduxStore from 'helpers/with-redux-store';
import { Provider } from 'react-redux';
import Layout from 'components/Layout';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    reduxStore,
  } = props;

  return (
    <Provider store={reduxStore}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline enableColorScheme />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
};

export default withReduxStore(App);
