import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <section id="home" className="section relative" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2" style={{ animationDelay: '2s' }}></div>
      
      <div className="container text-center animate-fade-up">
        <p className="mb-2" style={{ color: 'var(--accent-primary)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Hello, World! I am
        </p>
        <h1 className="heading-xl mb-4">
          Sonu Kumar<br/>
          <span className="text-gradient">IT Student & MERN Stack Developer</span>
        </h1>
        <p className="mb-8" style={{ maxWidth: '600px', margin: '0 auto 3rem auto', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          I am a B.Tech IT student at BPIT with a strong foundation in software development and programming. I build full-stack applications using the MERN stack and have a passion for problem-solving.
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
