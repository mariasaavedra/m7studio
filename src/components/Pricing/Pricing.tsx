import Link from 'next/link';

import styles from './Pricing.module.css';

import Button from '@/components/Button/Button';

export default function Pricing() {
  return (
    <section className={styles.PricingComponent + ' p-8'}>
      <h1 className='font-secondary  my-8 max-w-4xl  text-sm font-normal uppercase tracking-widest text-white'>
        Packages & Pricing
      </h1>
      <div className=' grid gap-16 md:grid-cols-3 '>
        <div>
          <h1 className='font-secondary  my-8 max-w-4xl  text-sm font-normal uppercase tracking-widest text-white'>
            MONTHLY
          </h1>
          <h3 className='font-primary  my-8 max-w-4xl  text-3xl font-bold uppercase  text-white'>
            $3,500 / mo
          </h3>
          <ul>
            <li className='font-secondary tw-block my-8 text-white md:text-xl'>
              one flat monthly fee, with software delivered so fast that it will
              blow your mind.
            </li>
            <li className='font-secondary tw-block my-8 text-white md:text-xl'>
              Perfect for small projects or monthly maintence.
            </li>
            <li>
              <Button>
                <Link
                  href='https://buy.stripe.com/aEU3fOdzncuNgZGcMO'
                  target='_blank'
                >
                  <p className='font-secondary  text-xxl  my-8 max-w-4xl font-bold  uppercase text-white'>
                    GET STARTED
                  </p>
                </Link>
              </Button>
            </li>
          </ul>
        </div>
        <div>
          <h1 className='font-secondary  my-8 max-w-4xl  text-sm font-normal uppercase tracking-widest text-white'>
            QUARTERLY
          </h1>
          <h3 className='font-primary  my-8 max-w-4xl  text-3xl font-bold uppercase  text-white'>
            $3,250 / mo
          </h3>
          <ul>
            <li className='font-secondary tw-block my-8 text-white md:text-xl'>
              Paid quarterly, with software delivered so fast that it will blow
              your mind.
            </li>
            <li className='font-secondary tw-block my-8 text-white md:text-xl'>
              Perfect for medium-large projects, campaigns, and support.
            </li>
            <li>
              <Button>
                <Link
                  href='https://buy.stripe.com/dR69Ec8f31Q9cJqcMN'
                  target='_blank'
                >
                  <p className='font-secondary  text-xxl  my-8 max-w-4xl font-bold  uppercase text-white'>
                    GET STARTED
                  </p>
                </Link>
              </Button>
            </li>
          </ul>
        </div>
        <div>
          <h1 className='font-secondary  my-8 max-w-4xl  text-sm font-normal uppercase tracking-widest text-white'>
            REQUEST A BID
          </h1>
          <ul>
            <li className='font-secondary tw-block my-8 text-white md:text-xl'>
              Some projects are complex enough to not fit on a retainer basis.
            </li>
          </ul>

          <Link
            href='https://2frgctxs18u.typeform.com/to/b9j9IZQQ'
            target='_blank'
          >
            <p className='font-secondary  text-xxl my-8 max-w-4xl max-w-fit rounded-full  border p-3 font-bold  uppercase text-white'>
              BEGIN AN ESTIMATE
            </p>
          </Link>
        </div>
      </div>
      <h3 className='font-secondary text-sky  my-32  text-white opacity-50 md:text-sm'>
        NOTE: DUE TO THE HIGH-QUALITY NATURE OF OUR WORK, AVAILABLE MEMBERSHIPS
        MAY BE LIMITED.
      </h3>
    </section>
  );
}
