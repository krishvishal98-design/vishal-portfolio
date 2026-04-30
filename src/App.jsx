import React, { useEffect, useState } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    // Handle navbar scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <header id="navbar" className={isScrolled ? 'scrolled' : ''}>
        <div className="container nav-container">
          <a href="#home" className="logo">VISHAL<span className="accent">.</span></a>
          <nav>
            <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
              <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
              <li><a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a></li>
              <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a></li>
              <li><a href="#why-me" onClick={() => setIsMobileMenuOpen(false)}>Why Me</a></li>
              <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
            </ul>
          </nav>
          <div className="hamburger" onClick={toggleMobileMenu}>
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="container hero-container">
            <div className="hero-image-container" data-aos="fade-right">
              <div className="yellow-circle"></div>
              <img 
                src="/WhatsApp Image 2026-04-30 at 2.42.00 PM.jpeg" 
                alt="Vishal - AI/ML Student" 
                className="hero-img" 
              />
            </div>
            <div className="hero-content" data-aos="fade-left">
              <h1 className="hero-greeting">HELLO</h1>
              <h2 className="hero-title">I'M <span className="accent">VISHAL</span></h2>
              <h3 className="hero-subtitle">AI/ML Student <span className="divider">|</span> Future Data Scientist</h3>
              <p className="hero-desc">
                I am passionate about Artificial Intelligence and Machine Learning. I love building intelligent systems, exploring data, and solving real-world problems using technology.
              </p>
              <div className="hero-buttons">
                <a href="#contact" className="btn btn-primary">HIRE ME</a>
                <a href="/newresume.pdf" download className="btn btn-outline">DOWNLOAD CV</a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about section-padding">
          <div className="container">
            <h2 className="section-title" data-aos="fade-up">About <span className="accent">Me</span></h2>
            <div className="about-content" data-aos="fade-up" data-aos-delay="200">
              <div className="about-text glass-card">
                <i className="fas fa-microchip about-icon"></i>
                <p>
                  As an enthusiastic AI/ML student, I am driven by an insatiable curiosity to understand how intelligent systems can transform our world. My journey in technology is fueled by a passion for continuous learning and a desire to build impactful solutions.
                </p>
                <p>
                  I specialize in data analysis, predictive modeling, and developing machine learning algorithms. I believe in combining strong theoretical foundations with practical, hands-on experience to solve complex, real-world challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills section-padding">
          <div className="container">
            <h2 className="section-title" data-aos="fade-up">My <span className="accent">Skills</span></h2>
            <div className="skills-grid">
              {[
                { name: 'Python', icon: 'fab fa-python', level: '90%' },
                { name: 'Machine Learning', icon: 'fas fa-brain', level: '85%' },
                { name: 'Deep Learning', icon: 'fas fa-network-wired', level: '75%' },
                { name: 'Data Analysis', icon: 'fas fa-chart-bar', level: '88%' },
                { name: 'SQL', icon: 'fas fa-database', level: '80%' },
                { name: 'Git & GitHub', icon: 'fab fa-github', level: '85%' },
              ].map((skill, index) => (
                <div key={index} className="skill-card glass-card" data-aos="zoom-in" data-aos-delay={index * 100}>
                  <i className={`${skill.icon} skill-icon`}></i>
                  <h3>{skill.name}</h3>
                  <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: skill.level }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects section-padding">
          <div className="container">
            <h2 className="section-title" data-aos="fade-up">Featured <span className="accent">Projects</span></h2>
            <div className="projects-grid">
              {[
                {
                  title: 'Predictive Health Analytics',
                  desc: 'A machine learning model to predict early signs of chronic diseases based on patient historical data.',
                  tech: ['Python', 'Scikit-Learn', 'Pandas']
                },
                {
                  title: 'Computer Vision Object Tracker',
                  desc: 'Real-time object detection and tracking system using OpenCV and deep learning algorithms.',
                  tech: ['OpenCV', 'YOLOv8', 'Python']
                },
                {
                  title: 'NLP Sentiment Analysis',
                  desc: 'Web scraper and sentiment analysis tool for analyzing public opinion on social media trends.',
                  tech: ['NLP', 'TensorFlow', 'NLTK']
                }
              ].map((project, index) => (
                <div key={index} className="project-card glass-card" data-aos="fade-up" data-aos-delay={index * 200}>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                    <div className="tech-stack">
                      {project.tech.map((t, i) => <span key={i}>{t}</span>)}
                    </div>
                    <a href="#" className="btn btn-sm btn-outline">View Project</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Me Section */}
        <section id="why-me" className="why-me section-padding">
          <div className="container">
            <h2 className="section-title" data-aos="fade-up">Why <span className="accent">Me?</span></h2>
            <div className="why-me-grid">
              {[
                { title: 'Problem-Solving Mindset', icon: 'fas fa-lightbulb', desc: 'I approach challenges methodically and enjoy finding elegant, efficient solutions to complex problems.' },
                { title: 'Fast Learner', icon: 'fas fa-rocket', desc: 'I adapt quickly to new technologies and frameworks, keeping up with the rapid pace of AI innovation.' },
                { title: 'Strong Fundamentals', icon: 'fas fa-layer-group', desc: 'Deep understanding of the mathematical and statistical foundations that power modern algorithms.' },
                { title: 'Passion for AI', icon: 'fas fa-heart', desc: 'Driven by a genuine enthusiasm to build systems that can learn, adapt, and improve human lives.' }
              ].map((item, index) => (
                <div key={index} className="why-card glass-card" data-aos="flip-left" data-aos-delay={index * 150}>
                  <i className={`${item.icon} why-icon`}></i>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact section-padding">
          <div className="container">
            <h2 className="section-title" data-aos="fade-up">Get in <span className="accent">Touch</span></h2>
            <div className="contact-container glass-card" data-aos="zoom-in">
              <div className="contact-info">
                <h3>Let's Talk</h3>
                <p>Interested in working together or have a question? Feel free to reach out.</p>
                <div className="contact-links">
                  <a href="mailto:krishvishal98@gmail.com" className="contact-link">
                    <i className="fas fa-envelope"></i> krishvishal98@gmail.com
                  </a>
                  <a href="https://www.linkedin.com/in/vishal-krish-aiml/" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <i className="fab fa-linkedin"></i> vishal-krish-aiml
                  </a>
                  <a href="https://github.com/krishvishal98-design" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <i className="fab fa-github"></i> krishvishal98-design
                  </a>
                </div>
              </div>
              <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
                <input type="hidden" name="access_key" value="bac7861a-804f-4648-b0fa-27f66e51abc2" />
                <div className="form-group">
                  <input type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                </div>
                <input type="hidden" name="from_name" value="Portfolio Contact Form" />
                <input type="hidden" name="subject" value="New Message from Portfolio" />
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="container footer-content">
          <p>&copy; 2026 Vishal. All rights reserved.</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/vishal-krish-aiml/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/krishvishal98-design" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
