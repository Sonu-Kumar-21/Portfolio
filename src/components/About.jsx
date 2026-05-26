const About = () => {
  return (
    <section id="about" className="section relative">
      <div className="container">
        <h2 className="heading-lg mb-8 text-center animate-fade-up">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div className="glass-card animate-fade-up delay-1" style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '-20px',
              width: '100px',
              height: '100px',
              background: 'var(--accent-primary)',
              filter: 'blur(40px)',
              zIndex: -1,
              borderRadius: '50%'
            }}></div>
            <h3 className="mb-4" style={{ fontSize: '1.5rem' }}>Brief Summary</h3>
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              I am Sonu Kumar, an IT Graduate with a B.Tech in Information Technology from Bhagwan Parshuram Institute of Technology (2022-2026). During my academic years, I have developed a strong foundation in software development, programming, problem-solving skills, and Communication Skills.
            </p>
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              I am proficient in languages such as Java and Python, and have experience with tools and technologies including ReactJs, MERN stack development, databases, and version control systems.
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              Beyond coding, I am an active member of DRISHTI, a society focused on social service for the needy. In my free time, I enjoy playing cricket and listening to music.
            </p>
          </div>
          
          <div className="animate-fade-up delay-2" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
            <div className="glass-card">
              <h4 className="text-gradient mb-2" style={{ fontSize: '1.5rem' }}>Education</h4>
              <div className="mb-4">
                <h5 style={{ fontSize: '1.1rem' }}>B.Tech - Information Technology</h5>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Bhagwan Parshuram Institute of Technology | 2022 - 2026 | 70.20%</p>
              </div>
              <div className="mb-4">
                <h5 style={{ fontSize: '1.1rem' }}>12th (CBSE)</h5>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>RPVV A-6 Paschim Vihar, New Delhi | 2020 | 87.80%</p>
              </div>
              <div>
                <h5 style={{ fontSize: '1.1rem' }}>10th (CBSE)</h5>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>GBSSS-Nangloi Phase-2 Delhi, New Delhi | 2018 | 85.20%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
