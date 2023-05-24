import Link from 'next/link';

import styles from './Consulting.module.css';

import Button from '@/components/Button/Button';

export default function Consulting() {
  return (
    <div
      className={
        styles.ConsultingComponent + ' flex flex-col bg-black md:flex-row'
      }
    >
      {/* Consulting */}
      <div className=' w-full bg-black px-4 py-16 text-center'>
        <p className='font-secondary font-bolder  mx-auto max-w-6xl px-4 text-4xl uppercase text-white'>
          Are you a solo entrepreneur, a visionary boss, or the daredevil at the
          helm of a corporate behemoth, ready to kick things up a notch?
        </p>
        {/* <p className='font-secondary mx-auto my-8 flex max-w-4xl bg-black px-4  text-2xl font-thin  text-white'>
          Are you a solo entrepreneur, a small business owner, or the leader of
          a large corporation seeking to reach new heights?
        </p> */}
        <p className='font-secondary mx-auto my-8 flex max-w-4xl bg-black px-4  text-2xl font-thin  text-white'>
          With a track record contributing to sucessful start-ups and Fortune
          500 projects, our team brings a wealth of experience to the table. We
          have empowered numerous entrepreneurs and leaders of large companies
          to surpass their goals and realize their true potential. Now, we're
          giving you the shot to tap into our brainpower by the hour.
        </p>
        <div className='mx-auto flex max-w-fit '>
          <Button>
            <Link
              href='https://www.figma.com/proto/3l1CWDVlEHYvyfXbULUVdn/Projects-(Community)?page-id=0%3A1&type=design&node-id=2-4&viewport=300%2C1010%2C0.19&scaling=scale-down'
              target='_blank'
            >
              <p className='font-secondary font-xs'>BOOK A 1:1 SESSION</p>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
