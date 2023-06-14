import styles from './Shopify.module.css';

export default function Shopify() {
  return (
    <div
      className={
        styles.ShopifyComponent +
        ' flex flex-col bg-black p-8 md:flex-row md:p-16'
      }
    >
      {/* Shopify */}
      <div className=' w-full bg-black py-16 text-left'>
        <h1 className='font-secondary  my-8 max-w-4xl  text-sm font-normal uppercase tracking-widest text-white'>
          Shopify Development & Maintenance
        </h1>
        {/* <p className='font-primary font-bolder  max-w-4xl text-5xl uppercase text-white'>
          Are you a solo entrepreneur, a visionary boss, or the daredevil at the
          helm of a corporate behemoth, ready to kick things up a notch?
        </p> */}
        <p className='font-primary font-bolder  max-w-4xl text-3xl uppercase text-white md:text-6xl'>
          Is your business falling short of delivering the experience you & your
          customers deserve?
        </p>
        <p className='font-secondary my-8 flex max-w-4xl bg-black  text-2xl font-thin  text-white'>
          In a crowded e-commerce market, a poorly maintained website and social
          presence can spell the end. It can result in lost sales, lower
          customer engagement, and ruin brand reputation.
        </p>
        <p className='font-secondary my-8 flex max-w-4xl bg-black  text-2xl font-thin  text-white'>
          We specialize not just in developing captivating themes, but also in
          offering top-notch theme maintenance and customizations that truly
          reflect your brand. Partner with us so you can focus on what you do
          best.
        </p>
      </div>
    </div>
  );
}
