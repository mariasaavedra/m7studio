import Image from 'next/image';
export default function SquiggleIcon() {
  return (
    <Image
      className='mx-4 inline-block'
      width={50}
      height={50}
      alt='A cute squiggly icon'
      src='/images/squiggle_1.svg'
    />
  );
}
