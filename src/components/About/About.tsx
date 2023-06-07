import Link from 'next/link';

import Button from '@/components/Button/Button';

export default function About() {
  return (
    <div className='relative flex w-screen flex-col overflow-hidden bg-black p-8 text-white md:flex-row md:p-16'>
      <div className='relative z-10 w-full '>
        <h1 className='font-secondary  my-8 max-w-4xl px-0  text-sm font-normal uppercase tracking-widest text-white'>
          About US
        </h1>
        <p className='my-2 mb-10 text-2xl font-thin leading-snug'>
          <strong className='text-xl'>M7 STUDIO </strong> is a digital agency
          headquartered in Kansas City. We're a tight-knit group of experts. We
          have over a decade of experience working with sucessful start-ups and
          for brands like Bridgestone Americas, Dayton Truck Tires, Lexus, Title
          Boxing Club, and Planet Sub.
        </p>
        <p className='my-8 text-2xl font-thin leading-snug'>
          Whether you need to improve your e-commerce capabilities, build a new
          website, or enhance your brand visibility, we have the expertise to
          help you achieve your goals in the digital space.
        </p>
        <div className='flex flex-col items-center justify-center gap-5 text-center md:flex-row md:items-start md:justify-start'>
          <Button>
            <Link
              href='https://www.figma.com/proto/3l1CWDVlEHYvyfXbULUVdn/Projects-(Community)?page-id=0%3A1&type=design&node-id=2-4&viewport=300%2C1010%2C0.19&scaling=scale-down'
              target='_blank'
            >
              <p className='font-secondary font-xs'>CASE STUDIES</p>
            </Link>
          </Button>
          <Button>
            <Link
              href='https://www.figma.com/proto/3l1CWDVlEHYvyfXbULUVdn/Projects-(Community)?page-id=0%3A1&type=design&node-id=2-4&viewport=300%2C1010%2C0.19&scaling=scale-down'
              target='_blank'
            >
              <p className='font-secondary font-xs'>SUBMIT PROJECT</p>
            </Link>
          </Button>
        </div>
      </div>
      <div className='mx-0  mt-16 w-full md:my-8 '>
        <img src='/images/ibm.png' alt='' className='floating mx-0 w-full' />
      </div>
    </div>
  );
}
