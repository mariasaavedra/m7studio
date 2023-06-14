import Image from 'next/image';

export default function StarIcon() {
  return (
    <Image
      className='mx-2 inline-block p-2'
      width={45}
      height={45}
      src='/images/white-star.svg'
      alt='A white star'
    />
  );
}
