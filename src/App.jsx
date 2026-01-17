import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* HEADER */}
      <h1 className="title">Shrey Chadokar</h1>
      <p className="subtitle">Frontend / MERN Stack Developer</p>

      {/* PROJECTS SECTION */}
      <section className="projects">
        <h2>Projects</h2>

        <div className="project-cards">
          {/* CARD 1 */}
          <div className="card">
            <h3>Game Portfolio</h3>
            <p>
              A React-based game portfolio website deployed on Vercel with
              GitHub integration.
            </p>
            <p className="tech">Tech: React, Vite, CSS</p>

            <div className="buttons">
              <a
                href="https://shrey-portfolio-sigma.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <a
                href="https://github.com/ShreyChadokar123/ShreyPortfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="card">
            <h3>EMI Calculator</h3>
            <p>
              EMI calculator with dynamic charts and yearly breakdown.
            </p>
            <p className="tech">Tech: React, Chart.js, Bootstrap</p>

            <div className="buttons">
              <span className="coming">Live Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <h2>About Me</h2>

        <p className="about-text">
          Frontend / MERN Stack Developer with experience in building responsive
          React applications and deploying them on Vercel.
        </p>

        <a
          className="resume-btn"
          href="/Shrey_Chadokar_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </section>


      {/* SKILLS SECTION */}
<section className="skills">
  <h2>Skills</h2>

  <div className="skills-list">
    <span>HTML</span>
    <span>CSS</span>
    <span>JavaScript</span>
    <span>React</span>
    <span>Node.js</span>
    <span>Express</span>
    <span>MongoDB</span>
    <span>Git</span>
    <span>GitHub</span>
    <span>Vercel</span>
  </div>
</section>


      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Shrey Chadokar</p>

        <div className="social-links">
          <a
            href="https://github.com/ShreyChadokar123"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/shrey-chadokar-895b72265/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:shreychadokar@gmail.com">
            Email
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
