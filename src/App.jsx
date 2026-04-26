import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, Cpu, Brain, Rocket, MapPin, Code2, User2, Terminal, Download, ShieldCheck, Phone, ChevronRight } from 'lucide-react';
import { DATA } from './data';

const App = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="portfolio">
      <div className="mesh-grid"></div>
      <div className="bg-gradient"></div>

      {/* Nav */}
      <nav className="container" style={{ padding: '2rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-heading" 
          style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-1px' }}
        >
          AK<span style={{ color: 'var(--accent-cyan)' }}>.</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ display: 'flex', gap: '2rem' }}
        >
          <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>Projects</a>
          <a href="#skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>Skills</a>
          <a href="mailto:kachareabhishek3@gmail.com" className="btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>Hire Me</a>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <header className="container" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <motion.div {...fadeInUp}>
          <span style={{ 
            background: 'rgba(0, 242, 254, 0.1)', 
            color: 'var(--accent-cyan)', 
            padding: '0.5rem 1.2rem', 
            borderRadius: '100px', 
            fontSize: '0.85rem', 
            fontWeight: 600,
            border: '1px solid rgba(0, 242, 254, 0.2)'
          }}>
            Available for AI/ML Opportunities
          </span>
        </motion.div>
        
        <div style={{ marginBottom: '3rem', position: 'relative', marginTop: '2rem' }}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ 
              width: '180px', 
              height: '180px', 
              borderRadius: '50%', 
              border: '4px solid var(--accent-cyan)',
              margin: '0 auto 2rem',
              backgroundImage: 'url("/professional_headshot.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '0 0 40px rgba(0, 243, 255, 0.3)',
              zIndex: 2,
              position: 'relative'
            }}
          />
          <div style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(0, 243, 255, 0.1) 0%, transparent 70%)',
            zIndex: 1
          }}></div>
        </div>

        <motion.h1 {...fadeInUp} style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', lineHeight: 1.1, fontWeight: 800, marginBottom: '1.5rem', background: 'linear-gradient(to bottom, #fff, #888)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Crafting the Future with <span style={{ color: 'var(--accent-cyan)' }}>Agentic AI</span>
        </motion.h1>

        <motion.p {...fadeInUp} transition={{ delay: 0.2 }} style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
          I'm {DATA.profile.name}, an AI & ML Engineer dedicated to building intelligent systems that solve real-world complexities.
        </motion.p>

        <motion.div {...fadeInUp} transition={{ delay: 0.3 }} style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            View Portfolio
          </button>
          <a 
            href="/Abhishek_Kachare_Professional_Resume.html" 
            target="_blank"
            className="btn-primary" 
            style={{ padding: '0.8rem 2rem', borderRadius: '12px', textDecoration: 'none', color: '#fff', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <Download size={20} /> View & Print PDF
          </a>
          <a 
            href={DATA.profile.linkedin} 
            target="_blank"
            className="glass-card" 
            style={{ padding: '0.8rem 2rem', borderRadius: '12px', textDecoration: 'none', color: '#fff', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <User2 size={20} /> LinkedIn
          </a>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href={DATA.profile.linkedin} target="_blank" className="glass-card" style={{ padding: '0.8rem', borderRadius: '12px' }}><User2 size={20} /></a>
            <a href={`https://github.com/${DATA.profile.github}`} target="_blank" className="glass-card" style={{ padding: '0.8rem', borderRadius: '12px' }}><Code2 size={20} /></a>
          </div>
        </motion.div>
      </header>

      {/* Skills Grid */}
      <section id="skills" className="container" style={{ padding: '8rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Expertise</h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--accent-cyan)', margin: '0 auto', borderRadius: '2px' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {DATA.skills.map((skill, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="glass-card"
            >
              <div style={{ color: 'var(--accent-cyan)', marginBottom: '1.5rem' }}>
                {i === 0 ? <Brain size={32} /> : i === 1 ? <Cpu size={32} /> : i === 2 ? <Code2 size={32} /> : <Rocket size={32} />}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{skill.category}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skill.items.map((item, j) => (
                  <span key={j} style={{ 
                    fontSize: '0.8rem', 
                    background: 'rgba(255,255,255,0.05)', 
                    padding: '0.3rem 0.8rem', 
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container" style={{ padding: '8rem 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Featured Work</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Innovative solutions developed with modern AI stacks.</p>
          </div>
          <a href={`https://github.com/${DATA.profile.github}`} className="glass-card" style={{ padding: '0.6rem 1.2rem', textDecoration: 'none', color: 'inherit', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            View GitHub <ExternalLink size={14} />
          </a>
        </div>

        <motion.div 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {DATA.projects.map((project, i) => (
            <motion.div 
              key={i}
              className="glass-card"
              style={{ display: 'flex', flexDirection: 'column' }}
              whileHover={{ y: -10 }}
              variants={{
                initial: { y: 30, opacity: 0 },
                animate: { y: 0, opacity: 1 }
              }}
            >
              <div style={{ 
                height: '220px', 
                background: `linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url('${project.image || 'https://source.unsplash.com/random/800x600?tech,ai&sig=' + i}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '16px',
                marginBottom: '1.5rem',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
              }}></div>
              <div style={{ flexGrow: 1 }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>{project.category}</span>
                <h3 style={{ fontSize: '1.8rem', margin: '0.5rem 0' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{project.description}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {project.tech.slice(0, 2).map((t, j) => (
                    <span key={j} style={{ fontSize: '0.7rem', opacity: 0.6 }}>#{t}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href={project.github} className="float" style={{ color: 'var(--text-secondary)' }}><Terminal size={20} /></a>
                  <a href="#" style={{ color: 'var(--accent-cyan)' }}><ExternalLink size={20} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container" style={{ padding: '6rem 0' }}>
        <motion.div 
          style={{ 
            background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
            borderRadius: '24px',
            padding: '4rem 2rem',
            textAlign: 'center',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }}
          whileInView={{ y: [20, 0], opacity: [0, 1] }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Let's Build Something <span style={{ color: 'var(--accent-cyan)' }}>Intelligent</span></h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Available for AI/ML internships, research collaborations, and full-stack development projects. Reach out via your preferred channel.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`mailto:${DATA.profile.email}`} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '1rem 2.5rem' }}>
              <Mail size={20} /> Email Me
            </a>
            <a href={`tel:+918799827537`} className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '1rem 2.5rem', textDecoration: 'none', color: '#fff', fontWeight: 600 }}>
              <Phone size={20} /> Call Now
            </a>
            <a href={DATA.profile.linkedin} target="_blank" className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '1rem 2.5rem', textDecoration: 'none', color: '#fff', fontWeight: 600 }}>
              <User2 size={20} /> LinkedIn <ChevronRight size={16} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="container" style={{ padding: '4rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem' }}>Certifications</h2>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
          {DATA.certifications.map((cert, i) => (
            <motion.div 
              key={i} 
              className="glass-card" 
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem 2rem' }}
              whileHover={{ scale: 1.05 }}
            >
              <ShieldCheck size={24} style={{ color: 'var(--accent-cyan)' }} />
              <div>
                <p style={{ fontWeight: 700 }}>{cert.title}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{cert.issuer} • {cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--border-color)', marginTop: '8rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.5rem' }}>Abhishek Kachare</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>© 2026 Crafted with integrity.</p>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href={`mailto:${DATA.profile.email}`} style={{ color: 'var(--text-secondary)' }}><Mail size={24} /></a>
            <a href={DATA.profile.linkedin} style={{ color: 'var(--text-secondary)' }}><User2 size={24} /></a>
            <a href={`https://github.com/${DATA.profile.github}`} style={{ color: 'var(--text-secondary)' }}><Terminal size={24} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
