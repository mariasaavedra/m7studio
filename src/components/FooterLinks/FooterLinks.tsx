import Link from 'next/link';

import styles from './FooterLinks.module.css';

import Arrow from '@/components/Arrow/Arrow';

export default function FooterLinks() {
  return (
    <div className={styles.FooterLinksComponent}>
      <div className='font-secondary my-16 flex flex-col bg-black  text-2xl font-thin uppercase leading-loose tracking-widest text-white md:flex-row '>
        <div className='w-full rounded-lg '>
          <ul>
            <li className='border-b-2'>
              <Link target='_blank' href='https://www.shopify.com/'>
                Try Shopify <Arrow />
              </Link>
            </li>
            <li className='border-b-2'>
              <Link
                target='_blank'
                href='https://2frgctxs18u.typeform.com/to/b9j9IZQQ'
              >
                Begin an Estimate <Arrow />
              </Link>
            </li>
            {/* <li className='border-b-2'>
              <Link target='_blank' href='#'>
                Earn Money <Arrow />
              </Link>
            </li>
            <li className='border-b-2'>
              <Link target='_blank' href='#'>
                Resources <Arrow />
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
