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
        <p className='font-secondary bold  px-4 text-xl uppercase text-white'>
          Let's brainstorm
        </p>
        <p className='font-secondary mx-auto my-8 flex max-w-4xl bg-black px-4  text-2xl font-thin  text-white'>
          We're now offering the opportunity to book us by the hour to discuss
          everything related to startups and business - the strategies, the
          technical aspects, and the overall experience.
        </p>
        <div className='mx-auto flex max-w-fit '>
          <Button>
            <Link
              href='https://www.figma.com/proto/3l1CWDVlEHYvyfXbULUVdn/Projects-(Community)?page-id=0%3A1&type=design&node-id=2-4&viewport=300%2C1010%2C0.19&scaling=scale-down'
              target='_blank'
            >
              <p className='font-secondary font-xs'>Let's Chat</p>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
