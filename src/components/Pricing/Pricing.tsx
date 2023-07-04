import Link from 'next/link';

import styles from './Pricing.module.css';

import Button from '@/components/Button/Button';

export default function Pricing() {
  return (
    <section
      className={styles.PricingComponent + ' m-8 border border-white p-8'}
    >
      <h1 className='font-secondary  my-8 max-w-4xl  text-sm font-normal uppercase tracking-widest text-white'>
        Packages & Pricing
      </h1>
      <div className=' grid grid-cols-1 gap-8 lg:grid-cols-3 '>
        <div className='border-white p-8 lg:border-r-2'>
          <h1 className='font-secondary  my-8 max-w-4xl  text-sm font-normal uppercase tracking-widest text-white'>
            MONTHLY
          </h1>
          <h3 className='font-primary  my-8 max-w-4xl  text-3xl font-bold uppercase  text-white'>
            $1,750 / mo
          </h3>
          <ul className='list-disc pl-2 text-sm'>
            <li className='font-secondary tw-block my-8 tracking-wide text-white'>
              One flat monthly fee, with software delivered so fast that it will
              blow your mind.
            </li>
            <li className='font-secondary tw-block my-8 tracking-wide text-white'>
              Queue up requests to be fulfilled one at a time.
            </li>

            <li className='font-secondary tw-block my-8 tracking-wide text-white'>
              Perfect for small projects, monthly maintence or ad-hoc work.
            </li>
            <li>
              <Button>
                <Link
                  href='https://buy.stripe.com/28o03C3YNgL3bFmdQT'
                  target='_blank'
                >
                  <p className='font-secondary  font-xs   .,  my-8 max-w-4xl font-bold  uppercase text-white'>
                    GET STARTED
                  </p>
                </Link>
              </Button>
            </li>
          </ul>
        </div>
        <div className='border-white p-8 lg:border-r-2'>
          <h1 className='font-secondary  my-8 max-w-4xl  text-sm font-normal uppercase tracking-widest text-white'>
            QUARTERLY
          </h1>
          <h3 className='font-primary  my-8 max-w-4xl  text-3xl font-bold uppercase  text-white'>
            $1,500 / mo
          </h3>
          <ul className='list-disc pl-2 text-sm'>
            <li className='font-secondary tw-block my-8 tracking-wide text-white'>
              A flat fee for a 3 month service plan. Comes with a discount.
            </li>
            <li className='font-secondary tw-block my-8 tracking-wide text-white'>
              Queue up requests to be fulfilled one at a time.
            </li>
            <li className='font-secondary tw-block my-8 tracking-wide text-white'>
              Ideal for medium to large projects, team augmentation, and
              long-term technical support.
            </li>
            <li>
              <Button>
                <Link
                  href='https://buy.stripe.com/8wM6s0gLzgL34cU004'
                  target='_blank'
                >
                  <p className='font-secondary  font-xs my-8 max-w-4xl font-bold  uppercase text-white'>
                    GET STARTED
                  </p>
                </Link>
              </Button>
            </li>
          </ul>
        </div>
        <div className='p-16'>
          <h1 className='font-secondary  my-8 max-w-4xl  text-sm font-normal uppercase tracking-widest text-white'>
            REQUEST A BID
          </h1>
          <ul>
            <li className='font-secondary tw-block my-8 tracking-wide text-white'>
              Some projects are complex enough to not fit on a retainer basis.
            </li>
          </ul>

          <Link
            href='https://2frgctxs18u.typeform.com/to/b9j9IZQQ'
            target='_blank'
          >
            <p className='font-secondary my-8 max-w-4xl max-w-fit rounded-full border p-3  text-center text-xs font-bold  uppercase text-white'>
              BEGIN AN ESTIMATE
            </p>
          </Link>
        </div>
      </div>
      <h3 className='font-secondary text-sky  my-8  text-white opacity-50 md:text-sm'>
        NOTE: DUE TO THE HIGH-QUALITY NATURE OF OUR WORK, AVAILABLE MEMBERSHIPS
        MAY BE LIMITED.
      </h3>
    </section>
  );
}
