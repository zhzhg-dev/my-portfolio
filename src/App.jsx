// src/App.jsx
import './index.css'

function App() {
  return (
    <div className="page-root">
      <div className="center-card">
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <header className="hero">
          <h1>Hi, I'm Zhang Zihang 👋</h1>
          <h2>Master of Information Technology student at the University of Auckland</h2>
          <p>
            Passionate about technology, data and building useful projects with code.
            I am learning Python, JavaScript and cloud technologies.
          </p>
        </header>
      </div>
    </div>
  )
}

export default App
