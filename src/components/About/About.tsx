import "./About.css";
import profileImg from "../../assets/me.jpg";

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-container">
        <img src={profileImg} alt="Goodluck portrait" className="about-img" />

        <div className="about-text">
          <p>
            Hi, I'm <strong>Goodluck</strong> — a passionate{" "}
            <span className="highlight">C++ developer</span> who loves solving
            problems and building things that actually work.
          </p>

          <p>
            I enjoy working with <strong>modern, efficient technologies</strong>
            — from React & TypeScript on the front-end to C++ systems and
            tooling.
          </p>

          <p>
            My interests include system architecture, performance tuning,
            back-end services, and clean user experience principles.
          </p>

          <p>
            I value <strong>clarity, precision and maintainability</strong> in
            every project I touch.
          </p>

          <div className="skills-block">
            <h3>What I Work With</h3>
            <div className="skill-badges">
              <span>C++</span>
              <span>React</span>
              <span>TypeScript</span>
              <span>UI Engineering</span>
              <span>Custom CSS</span>
              <span>Crow Framework</span>
              <span>Sqlite3</span>
              <span>Git / CI basics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
