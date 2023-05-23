import styles from './FooterLinks.module.css';

import Arrow from '@/components/Arrow/Arrow';

export default function FooterLinks() {
  return (
    <div className={styles.FooterLinksComponent}>
      <div className='font-secondary my-16 flex flex-col bg-black  text-2xl font-thin uppercase leading-loose tracking-widest text-white md:flex-row '>
        <div className='w-full rounded-lg '>
          <ul>
            <li className='border-b-2'>
              Try Shopify <Arrow />
            </li>
            <li className='border-b-2'>
              Start a Sqaurespace <Arrow />{' '}
            </li>
            <li className='border-b-2'>
              Begin an Estimate <Arrow />
            </li>
            <li className='border-b-2'>
              Earn Money <Arrow />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
