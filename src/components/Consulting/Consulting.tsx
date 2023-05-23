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
      <div className=' w-1/2 bg-black px-4 py-16 text-left'>
        <p className='font-secondary bold  px-4 text-xl uppercase text-white'>
          Let's brainstorm
        </p>
        <p className='font-secondary   my-8 bg-black px-4  text-2xl font-thin  text-white'>
          We're now offering the opportunity to book us by the hour to discuss
          everything related to startups & business - the strategies, the
          technical aspects, and the overall experience.
        </p>
        <div className='ml-0 flex w-1/2 justify-center text-left'>
          <Button>
            <Link
              href='https://www.figma.com/proto/3l1CWDVlEHYvyfXbULUVdn/Projects-(Community)?page-id=0%3A1&type=design&node-id=2-4&viewport=300%2C1010%2C0.19&scaling=scale-down'
              target='_blank'
            >
              <p className='font-secondary font-xs'>BOOK A CALL</p>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
