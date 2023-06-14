import dynamic from 'next/dynamic';
import Head from 'next/head';
import Script from 'next/script';
import * as React from 'react';

import Hero from '@/components/Hero/Hero';

const About = dynamic(() =>
  import('@/components/About/About').then((mod) => mod)
);
const Pricing = dynamic(() =>
  import('@/components/Pricing/Pricing').then((mod) => mod)
);
const Services = dynamic(() =>
  import('@/components/Services/Services').then((mod) => mod)
);
const Shopify = dynamic(() =>
  import('@/components/Shopify/Shopify').then((mod) => mod)
);

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
        strategy='lazyOnload'
      />
      <Script id='google-analytics' strategy='lazyOnload'>
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-89Z9D0T85Q');
    console.log('gtag init');
  `}
      </Script>
      <section className='relative overflow-x-hidden bg-black'>
        <div className='mx-auto'>
          <Hero />
          <About />
          <Services />
          <Shopify />
          <Pricing />
          <Footer />
        </div>
      </section>
    </>
  );
}
