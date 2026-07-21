import "./About.css";
import profileImg from "../../assets/me.png";

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-container">
        <img src={profileImg} alt="Goodluck portrait" className="about-img" />

        <div className="about-text">
          <p>
            Hi, I'm <strong>Goodluck</strong> — a{" "}
            <span className="highlight">backend-focused</span> software
            developer who enjoys building the systems that power modern
            applications.
          </p>

          <p>
            I specialize in designing backend services, APIs, and server-side
            logic using Python (Flask) and C++. I enjoy solving complex problems
            involving authentication, data processing, and communication between
            systems.
          </p>

          <p>
            My work focuses on building reliable backend architectures — from
            designing API endpoints and managing databases to structuring
            applications that scale and remain maintainable.
          </p>

          <p>
            I enjoy working close to the core logic of software, where
            performance, system design, and clean architecture matter most.
          </p>

          <p>
            I value <strong>clarity, precision and maintainability</strong> in
            every project I touch.
          </p>

          <div className="skills-block">
            <h3>What I Work With</h3>
            <div className="skill-badges">
              <span>C++</span>
              <span>Python</span>
              <span>Flask</span>
              <span>C#</span>
              <span>PostgreSQL</span>
              <span>Sqlite3</span>
              {/* <span>SQL</span> */}
              <span>Crow Framework</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
