import NextDocument, { Html, Main, Head, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content="white"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content="black"
          />
          <meta
            name="description"
            content="Pablo Jonatan, a software engineer from Brazil!"
          />
          <link rel="shortcut icon" href="/favicon.ico" />

          <meta name="application-name" content="Pablo Jonatan" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />

          <meta name="apple-mobile-web-app-title" content="Pablo Jonatan" />
          <meta name="description" content="Software Engineer" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />


          {/* Social Media */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://pjonatan.dev/" />
          <meta name="twitter:title" content="Pablo Jonatan" />
          <meta
            name="twitter:description"
            content="Software Engineer"
          />
          <meta
            name="twitter:image"
            content="https://unavatar.io/twitter/pjonatansr"
          />
          <meta name="twitter:creator" content="@pjonatansr" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Pablo Jonatan" />
          <meta
            property="og:description"
            content="Software Engineer"
          />
          <meta property="og:site_name" content="Pablo Jonatan" />
          <meta property="og:url" content="https://pjonatan.dev/" />
          <meta
            property="og:image"
            content="https://unavatar.io/twitter/pjonatansr"
          />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
