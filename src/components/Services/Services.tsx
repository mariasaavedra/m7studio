import styles from './Services.module.css';

export default function Services() {
  return (
    <div className={styles.ServicesComponent + ' bg-black py-4'}>
      {/* SERVICES */}
      <p className='font-p  px-8 py-0 text-xl uppercase text-white'>Services</p>
      <div className='font-secondary flex flex-col text-2xl font-thin uppercase leading-loose tracking-widest text-white md:flex-row '>
        <div className='m-4 rounded-lg p-4 md:w-1/2'>
          <ul>
            <li className='border-b-2'>E-commerce SOLUTIONS</li>
            <li className='border-b-2'>SHOPIFY & SQUARESPACE</li>
            <li className='border-b-2'>THIRD-PARTY INTEGRATIONS</li>
            <li className='border-b-2'>WebSITE Development</li>
            <li className='border-b-2'>Custom Software</li>
          </ul>
        </div>
        <div className='m-4 rounded-lg p-4  md:w-1/2'>
          <ul>
            <li className='border-b-2'>Business Strategy</li>
            <li className='border-b-2'>Content Creation</li>
            <li className='border-b-2'>Branding</li>
            <li className='border-b-2'>Marketing</li>
            <li className='border-b-2'>CONSULTING</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
