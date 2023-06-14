import Image from 'next/image';

import styles from './Hero.module.css';

import AnimatedText from '@/components/AnimatedText/AnimatedText';
import Viewer from '@/components/Viewer/Viewer';

export default function Hero() {
  return (
    <div className={styles.HeroComponent}>
      <div
        className={
          styles.bg +
          ' relative  flex h-[80vh] w-screen overflow-hidden bg-black text-white'
        }
      >
        <div className='md:-text-white absolute bottom-0 left-8   hidden h-full  items-center justify-center text-white md:bottom-0 md:left-20 md:top-0 md:flex'>
          <h3 className='font-primary relative  z-[9999]  flex max-w-md  text-4xl md:text-7xl'>
            DIGITAL & ECOMMERCE SOLUTIONS MADE EASY
          </h3>
        </div>
        <Viewer></Viewer>

        <AnimatedText position='bottom' />
        <Image
          className='absolute bottom-20 right-5 z-10 invert md:filter-none'
          src='/images/logo.svg'
          width={120}
          height={120}
          alt='Logo'
        />
      </div>
    </div>
  );
}
