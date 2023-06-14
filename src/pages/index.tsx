import dynamic from 'next/dynamic';
import Head from 'next/head';
import Script from 'next/script';
import * as React from 'react';

import About from '@/components/About/About';
import Hero from '@/components/Hero/Hero';
import Pricing from '@/components/Pricing/Pricing';
import Services from '@/components/Services/Services';
import Shopify from '@/components/Shopify/Shopify';

const Work = dynamic(() => import('@/components/Work/Work').then((mod) => mod));

const Footer = dynamic(() =>
  import('@/components/Footer/Footer').then((mod) => mod)
);

export default function HomePage() {
  return (
    <>
      <Head>
        <title>M7 STUDIO - a digital strategy and software studio. </title>
      </Head>
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
      <Hero />
      <section className='relative overflow-x-hidden bg-black'>
        <div className='  mx-auto'>
          <About />
          <Services />
          {/* <Work /> */}
          <Shopify />
          <Pricing />
          {/* <Consulting /> */}

          <Footer />
        </div>
      </section>
    </>
  );
}
