const Projects = () => {
  const projects = [
    {
      title: "Wanderlust",
      description: "A full-stack web application that allows users to explore, create, and book travel accommodations, inspired by Airbnb. Features include user authentication, dynamic listing with image uploads, and RESTful APIs.",
      tags: ["ReactJS", "NodeJS", "Express", "MongoDB", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      link: "https://wanderlust-qt24.onrender.com/"
    },
    {
      title: "UrbanKart",
      description: "A comprehensive full-stack e-commerce platform offering a seamless online shopping experience. Features include product browsing, cart management, user authentication, and secure checkout workflows.",
      tags: ["ReactJS", "NodeJS", "Express", "MongoDB", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
      link: "https://urbankart-0j02.onrender.com"
    },
    {
      title: "AI-Email Sender",
      description: "An intelligent email automation application that leverages artificial intelligence to draft and send personalized emails efficiently. Built with the MERN stack to ensure scalability and a smooth user experience.",
      tags: ["ReactJS", "NodeJS", "MongoDB", "OpenAI API"],
      image: "https://images.unsplash.com/photo-1576404740173-98cb47d9b9c9?auto=format&fit=crop&w=800&q=80",
      link: "https://mern-ai-email-sender-1-rjdg.onrender.com"
    }
  ];

  return (
    <section id="projects" className="section relative">
      <div className="container">
        <h2 className="heading-lg mb-8 text-center animate-fade-up">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
            <div key={index} className="glass-card animate-fade-up" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', animationDelay: `${(index + 1) * 0.1}s` }}>
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} className="project-img" onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 className="mb-2" style={{ fontSize: '1.25rem' }}>{project.title}</h3>
                <p className="mb-4" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', flexGrow: 1 }}>
                  {project.description}
                </p>
                <div className="flex gap-2 items-center flex-wrap mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', color: 'var(--accent-secondary)', whiteSpace: 'nowrap' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ textAlign: 'center', width: '100%', padding: '0.6rem 1rem' }}>View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
