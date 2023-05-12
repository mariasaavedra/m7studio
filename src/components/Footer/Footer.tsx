import Link from 'next/link';

import Button from '@/components/Button/Button';

export default function Footer() {
  return (
    <footer className='bg-black p-8 text-xl text-white'>
      <p className='my-4 uppercase tracking-widest'>email: maria@m7studio.co</p>
      <p className='my-4 uppercase tracking-widest'>phone: (816) 945-4147</p>
      {/* <p className='my-4 uppercase tracking-widest underline'>
          Schedule a call
        </p> */}
      {/* CONTACT */}
      <section className='bg-black py-8'>
        <Button>
          <Link
            href='https://mariasaavedra.typeform.com/to/IkPubgrS'
            target='_blank'
          >
            CONTACT
          </Link>
        </Button>
      </section>
    </footer>
  );
}
