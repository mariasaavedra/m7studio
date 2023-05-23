export default function About() {
  return (
    <div className='relative flex w-screen flex-col  overflow-hidden bg-black p-8 text-white md:flex-row'>
      <div className='relative z-10 w-full self-center md:w-1/2'>
        <p className='font-secondary py-8 text-xl uppercase'>About Us</p>
        <p className='my-2 mb-10 text-2xl font-thin leading-tight'>
          Whether you need to improve your e-commerce capabilities, build a new
          website, or enhance your brand visibility, we have the expertise to
          help you achieve your goals in the digital space.
        </p>
      </div>
      <div className='w-full md:w-1/2'>
        <img src='/images/ibm.png' alt='' className='floating' />
      </div>
    </div>
  );
}
