import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang='en'>
      <Head></Head>
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-89Z9D0T85Q'
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-89Z9D0T85Q');
    console.log('gtag init');
  `}
      </Script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
