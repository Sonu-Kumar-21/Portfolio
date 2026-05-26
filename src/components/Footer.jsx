const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
      <div className="container">
        <p style={{ color: 'var(--text-secondary)' }}>
          &copy; {currentYear} Sonu Kumar. Built with React & <span style={{ color: 'var(--accent-tertiary)' }}>♥</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
