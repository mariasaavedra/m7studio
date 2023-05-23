export default function About() {
  return (
    <div className='relative flex w-screen flex-col  overflow-hidden bg-black p-8 text-white md:flex-row'>
      <div className='relative z-10 w-full self-center md:w-1/2'>
        <p className='font-secondary py-8 text-xl uppercase'>About Us</p>
        <p className='my-2 mb-10 text-2xl font-thin leading-tight'>
          <strong>M7 STUDIO </strong> is a digital agency headquartered in
          Missouri. We are led by Maria Saavedra, a seasoned software engineer
          with over 11 years of experience working on major projects for brands
          like Bridgestone Americas, Dayton Truck Tires, Hendrick Lexus, Title
          Boxing Club, and Planet Sub.
        </p>
        <p className='my-2 mb-10 text-lg font-thin leading-relaxed'>
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
