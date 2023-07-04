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
        <div className=' absolute bottom-0 bottom-0 left-0 right-0 top-0 flex h-full items-center justify-center text-black'>
          <h3 className='font-primary relative z-[9999] mx-auto flex  max-w-5xl p-8 text-center text-6xl  uppercase  md:text-8xl'>
            Streamlined Digital & Ecommerce Solutions
          </h3>
        </div>
        <Viewer></Viewer>

        <AnimatedText position='bottom' />
        <Image
          className='absolute bottom-20 right-5 z-10  invert'
          src='/images/logo.svg'
          width={120}
          height={120}
          alt='Logo'
        />
      </div>
    </div>
  );
}
