import dynamic from 'next/dynamic';

export default function HomeSection() {
  const Hero = dynamic(() =>
    import('@/components/Hero/Hero').then((mod) => mod)
  );

  const About = dynamic(() =>
    import('@/components/About/About').then((mod) => mod)
  );

  const Services = dynamic(() =>
    import('@/components/Services/Services').then((mod) => mod)
  );

  const Work = dynamic(() =>
    import('@/components/Work/Work').then((mod) => mod)
  );

  const Footer = dynamic(() =>
    import('@/components/Footer/Footer').then((mod) => mod)
  );

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Work />
      <Footer />
    </>
  );
}
