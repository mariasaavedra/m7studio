import styles from './Services.module.css';

import StarIcon from '@/components/StarIcon/StarIcon';

export default function Services() {
  return (
    <div className={styles.ServicesComponent + ' bg-black p-8 md:p-16'}>
      {/* SERVICES */}
      <h1 className='font-secondary my-8 max-w-4xl  text-sm font-normal uppercase tracking-widest text-white'>
        Services
      </h1>
      <div className='font-secondary text-md flex flex-col font-thin uppercase leading-loose tracking-widest text-white md:flex-row md:text-2xl '>
        <div className='rounded-lg md:w-1/2'>
          <ul>
            <li className='border-b-2 py-2'>
              <StarIcon /> E-commerce SOLUTIONS
            </li>
            <li className='border-b-2 py-2'>
              <StarIcon />
              SHOPIFY & SQUARESPACE
            </li>
            <li className='border-b-2 py-2'>
              <StarIcon />
              THIRD-PARTY INTEGRATIONS
            </li>
            <li className='border-b-2 py-2'>
              <StarIcon />
              WebSITE Development
            </li>
            <li className='border-b-2 py-2'>
              <StarIcon />
              Custom Software
            </li>
          </ul>
        </div>
        <div className='rounded-lg  md:w-1/2'>
          <ul>
            <li className='border-b-2 py-2'>
              <StarIcon />
              Business Strategy
            </li>
            <li className='border-b-2 py-2'>
              <StarIcon />
              Content Creation
            </li>
            <li className='border-b-2 py-2'>
              <StarIcon />
              Branding
            </li>
            <li className='border-b-2 py-2'>
              <StarIcon />
              Marketing
            </li>
            <li className='border-b-2 py-2'>
              <StarIcon />
              CONSULTING
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
