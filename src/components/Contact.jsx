const Contact = () => {
  return (
    <section id="contact" className="section relative">
      <div className="container">
        <div className="glass-card animate-fade-up text-center" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
          <h2 className="heading-lg mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="mb-8" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            <a href="mailto:jhasonu9876@gmail.com" className="glass-card" style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', whiteSpace: 'nowrap', flex: '1 1 auto', justifyContent: 'center' }}>
              <span>📧</span> jhasonu9876@gmail.com
            </a>
            <a href="tel:+918448637681" className="glass-card" style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', whiteSpace: 'nowrap', flex: '1 1 auto', justifyContent: 'center' }}>
              <span>📞</span> +91-8448637681
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="glass-card" style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', whiteSpace: 'nowrap', flex: '1 1 auto', justifyContent: 'center' }}>
              <span>💻</span> GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="glass-card" style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', whiteSpace: 'nowrap', flex: '1 1 auto', justifyContent: 'center' }}>
              <span>🔗</span> LinkedIn
            </a>
            <a href="https://leetcode.com/u/sonu-jha/" target="_blank" rel="noreferrer" className="glass-card" style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', whiteSpace: 'nowrap', flex: '1 1 auto', justifyContent: 'center' }}>
              <span>👨‍💻</span> LeetCode
            </a>
          </div>
          
          <a href="mailto:jhasonu9876@gmail.com" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
