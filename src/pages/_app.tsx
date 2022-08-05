import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { ChakraProvider } from '@chakra-ui/react';
import { CacheProvider } from '@emotion/react';
import { DefaultSeo } from 'next-seo';

import emotionCache from '@/lib/emotion';

import theme from '@/theme';

import DEFAULT_SEO from '../../next-seo.config.js';
import Layout from '@/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider theme={theme}>
        <DefaultSeo
          {...DEFAULT_SEO}
          canonical={`https://next-chakra-ts-starter.vercel.app${router.asPath}`}
          openGraph={{
            url: `https://next-chakra-ts-starter.vercel.app${router.asPath}`,
          }}
        />
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </CacheProvider>
  );
}

export default MyApp;
