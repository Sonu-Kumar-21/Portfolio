import { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'all 0.3s ease',
      padding: scrolled ? '15px 0' : '25px 0',
      background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
    }}>
      <div className="container flex items-center justify-between">
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 'bold' }}>
          Portfolio<span className="text-gradient">.</span>
        </div>
        <ul className="flex gap-6 items-center" style={{ display: 'flex', gap: '2rem' }}>
          <li><AnchorLink href="#home">Home</AnchorLink></li>
          <li><AnchorLink href="#about">About</AnchorLink></li>
          <li><AnchorLink href="#skills">Skills</AnchorLink></li>
          <li><AnchorLink href="#projects">Projects</AnchorLink></li>
          <li><AnchorLink href="#contact" className="btn btn-outline" style={{ padding: '0.5rem 1.5rem' }}>Contact</AnchorLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
