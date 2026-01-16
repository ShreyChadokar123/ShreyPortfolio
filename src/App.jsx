import "./App.css";

const games = [
  { id: 1, title: "Snake Game", url: "#" },
  { id: 2, title: "Memory Game", url: "#" },
  { id: 3, title: "Tic Tac Toe", url: "#" },
  { id: 4, title: "Quiz Game", url: "#" },
];

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Shrey Games</h1>
        <p>Game Developer | JavaScript • React</p>
      </header>

      {/* ABOUT */}
      <section className="about-section">
        <h2>About Me</h2>
        <p className="about-text">
          I am a passionate frontend and game developer who builds
          interactive, browser-based games using modern web technologies.
          I focus on clean UI, performance, and scalable code.
        </p>
      </section>

      {/* SKILLS */}
      <section className="skills-section">
        <h2>Skills</h2>
        <div className="skills">
          <span>JavaScript</span>
          <span>React.js</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>Vite</span>
          <span>Git & GitHub</span>
        </div>
      </section>

      {/* GAMES */}
      <section className="games-section">
        <h2>My Games</h2>

        <div className="games-wrapper">
          <div className="games">
            {games.map((game) => (
              <a
                key={game.id}
                href={game.url}
                target="_blank"
                rel="noopener noreferrer"
                className="game-card"
              >
                {game.title}
              </a>
            ))}
          </div>
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
      🐙 GitHub
    </a>

    <a
  href="https://www.linkedin.com/in/shrey-chadokar-895b72265/"
  target="_blank"
  rel="noopener noreferrer"
>
  💼 LinkedIn
</a>

<a href="mailto:shreychadokar@gmail.com">
  ✉️ Email
</a>

  </div>
</footer>

    </div>
  );
}

export default App;
