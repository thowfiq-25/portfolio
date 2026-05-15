import './App.css'
import smartCampusImg from './assets/projects/smart-campus.svg'
import cineScopeImg from './assets/projects/cinescope.svg'
import educationImg from './assets/projects/education.svg'

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="nav-logo">Thowfiq Umar S</h1>
          <ul className="nav-menu">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">Summary</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I&apos;m <span className="highlight">Thowfiq Umar S</span>
          </h1>
          <h2 className="hero-subtitle">Front-End Developer &amp; UI/UX Designer</h2>
          <p className="hero-description">
            I build responsive and dynamic web interfaces with React, HTML, CSS, and JavaScript,
            and I design clean, accessible experiences grounded in UI/UX principles.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">Summary</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I am a passionate Front-End Developer and UI/UX Designer with strong skills in HTML,
                CSS, JavaScript, and React.js for building responsive and dynamic web interfaces.
              </p>
              <p>
                I focus on creating clean, accessible designs that deliver a smooth user experience
                across devices. With a solid grasp of UI/UX principles, I translate design concepts
                into functional, interactive front-end code.
              </p>
            </div>
            <div className="about-image">
              <div className="profile-placeholder">
                <span>UI/UX + Frontend</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Technical</h3>
              <ul>
                <li>React JS</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Python</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>UI/UX</h3>
              <ul>
                <li>UI/UX Designing</li>
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>User-centered design</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Tools</h3>
              <ul>
                <li>Git</li>
                <li>Figma</li>
                <li>Inkscape</li>
                <li>Jupyter Notebook</li>
                <li>Google Colab</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Languages</h3>
              <ul>
                <li>English</li>
                <li>Tamil</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Soft Skills</h3>
              <ul>
                <li>Problem Solving</li>
                <li>Time Management</li>
                <li>Adaptability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img
                  src={smartCampusImg}
                  alt="Smart Campus Management project cover"
                  loading="lazy"
                />
                <span className="project-image-label">Smart Campus Management</span>
              </div>
              <div className="project-content">
                <h3>Smart Campus Management</h3>
                <p>UI/UX design for a Smart Campus Management System (Jun 2025 – Jul 2025).</p>
                <div className="project-tech">
                  <span>Wireframing</span>
                  <span>UI/UX</span>
                  <span>Accessibility</span>
                </div>
                <div className="project-links">
                  <a href="#contact" className="btn btn-small">Request Case Study</a>
                  <a href="#contact" className="btn btn-small btn-outline">Contact</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img
                  src={cineScopeImg}
                  alt="CineScope movie app cover"
                  loading="lazy"
                />
                <span className="project-image-label">CineScope</span>
              </div>
              <div className="project-content">
                <h3>CineScope – Movie Information App</h3>
                <p>
                  React Native app to display real-time movie information using the TMDB API
                  (Sep 2025 – Oct 2025).
                </p>
                <div className="project-tech">
                  <span>React Native</span>
                  <span>REST API</span>
                  <span>TMDB</span>
                </div>
                <div className="project-links">
                  <a href="#contact" className="btn btn-small">Ask for Demo</a>
                  <a href="#contact" className="btn btn-small btn-outline">Contact</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img
                  src={educationImg}
                  alt="Education highlights cover"
                  loading="lazy"
                />
                <span className="project-image-label">Education</span>
              </div>
              <div className="project-content">
                <h3>Education</h3>
                <p>Academic background and performance.</p>
                <div className="project-tech">
                  <span>HSC - 96%</span>
                  <span>CGPA - 8.27</span>
                </div>
                <div className="project-links">
                  <a href="#contact" className="btn btn-small">Get Resume</a>
                  <a href="#contact" className="btn btn-small btn-outline">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>UI/UX Designer (Internship)</h3>
                <span className="company">Zoro Innovations</span>
                <span className="date">Jun 2025 - Jul 2025</span>
                <p>
                  Completed a 6-week UI/UX Design internship on the Smart Campus Management System.
                  Worked on wireframing, prototyping, and user-centered design, contributing to team
                  tasks with creativity and a strong learning attitude.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Bachelor of Computer Science and Engineering</h3>
                <span className="company">Rajalakshmi Institute of Technology</span>
                <span className="date">Sep 2023 - Present</span>
                <p>
                  Current CGPA: 8.27
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Higher Secondary Education (HSC)</h3>
                <span className="company">Kalaimagal Matric Hr Sec School</span>
                <span className="date">Jun 2021 - Mar 2023</span>
                <p>
                  HSC: 96%
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <p>I’m open to internships and junior frontend/UI-UX opportunities.</p>
              <p>Feel free to reach out—happy to connect and collaborate.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-label">Email:</span>
                  <a href="mailto:umarthowfiq20@gmail.com">umarthowfiq20@gmail.com</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Phone:</span>
                  <a href="tel:+916385624946">+91 63856 24946</a>
                </div>
              </div>
              <div className="social-links">
                {/* TODO: replace with your real profile URLs */}
                <a
                  href="https://www.linkedin.com/in/thowfiq-umar-s-884b69320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/thowfiq-25"
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Thowfiq Umar S. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
