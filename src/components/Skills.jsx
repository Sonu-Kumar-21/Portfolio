const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "JavaScript", "HTML5", "CSS3"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "Tailwind CSS", "Responsive Design"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs"]
    },
    {
      title: "Database",
      skills: ["MongoDB"]
    },
    {
      title: "Deployment & Tools",
      skills: ["Render", "Git", "GitHub"]
    },
    {
      title: "Core Concepts",
      skills: ["DSA", "OOPs", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="section relative">
      <div className="container">
        <h2 className="heading-lg mb-8 text-center animate-fade-up">
          My <span className="text-gradient">Skills</span>
        </h2>
        
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card animate-fade-up" style={{ animationDelay: `${(index + 1) * 0.1}s`, padding: '1.5rem' }}>
              <h3 className="mb-4 text-gradient" style={{ fontSize: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                {category.title}
              </h3>
              <div className="flex gap-2 flex-wrap">
                {category.skills.map((skill, i) => (
                  <span key={i} style={{ 
                    fontSize: '0.9rem', 
                    padding: '0.4rem 1rem', 
                    background: 'rgba(255,255,255,0.05)', 
                    border: '1px solid rgba(255,255,255,0.1)', 
                    borderRadius: '8px', 
                    color: 'var(--text-primary)',
                    whiteSpace: 'nowrap'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
