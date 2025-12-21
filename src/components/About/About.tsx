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
            <span className="highlight">C++ programmer</span> who loves solving
            problems and building things that actually work.
          </p>

          <p>
            I enjoy working with <strong>modern, efficient technologies</strong>
            , whether I'm crafting web applications in TypeScript or solving
            complex problems with the speed and precision of C++.
          </p>

          <p>
            I build software using a diverse stack, ranging from performance
            logic in C++ to modern web interfaces with React and TypeScript. I
            use Crow, Flask and SQLite3 for lightweight services.
          </p>

          <p>
            My technical interests span the full spectrum of modern engineering:
            from robotics and cybersecurity to intelligent systems (AI/ML) and
            the creation of intuitive, user-centric software.
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
              <span>Custom CSS</span>
              <span>Flask</span>
              <span>Crow Framework</span>
              <span>Sqlite3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
