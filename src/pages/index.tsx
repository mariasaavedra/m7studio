import dynamic from 'next/dynamic';
import Head from 'next/head';
import * as React from 'react';

import About from '@/components/About/About';
import Consulting from '@/components/Consulting/Consulting';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import Shopify from '@/components/Shopify/Shopify';
import SquareSpace from '@/components/SquareSpace/SquareSpace';

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
      <Hero />
      <About />

      <Shopify />
      <SquareSpace />

      <Services />
      <Consulting />

      <Work />
      <Footer />
    </>
  );
}
