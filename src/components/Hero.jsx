import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <section id="home" className="section relative" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2" style={{ animationDelay: '2s' }}></div>
      
      <div className="container text-center animate-fade-up">
        <h1 className="heading-xl mb-4 animate-fade-up">
          Hi, I'm <span className="text-gradient">Sonu Kumar</span>
        </h1>
        <h2 className="heading-md mb-6 animate-fade-up delay-1" style={{ color: 'var(--text-secondary)' }}>
          <span className="text-gradient">Software Engineer & MERN Stack Developer</span>
        </h2>
        <p className="mb-8 animate-fade-up delay-2" style={{ maxWidth: '600px', margin: '0 auto 2rem auto', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
          I am an IT Graduate from BPIT with a strong foundation in software development and programming. I build full-stack applications using the MERN stack and have a passion for problem-solving.
        </p>
        <div className="flex justify-center gap-4">
          <AnchorLink href="#projects" className="btn btn-primary">View My Work</AnchorLink>
          <AnchorLink href="#contact" className="btn btn-outline">Contact Me</AnchorLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
