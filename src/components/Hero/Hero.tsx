import { useEffect, useState } from "react";
import "./Hero.css";
import profileImg from "../../assets/me.jpg";
import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";

const roles = [
  "C++ Developer",
  "Graphics Designer",
  "Backend Developer",
  "Cybersecurity Enthusiast",
  "Problem Solver",
  "Creative Builder",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [letter, setLetter] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[index];

    const typingSpeed = deleting ? 80 : 120;

    const timer = setTimeout(() => {
      if (!deleting && letter < currentRole.length) {
        setText(currentRole.slice(0, letter + 1));
        setLetter(letter + 1);
      } else if (deleting && letter > 0) {
        setText(currentRole.slice(0, letter - 1));
        setLetter(letter - 1);
      } else if (letter === currentRole.length) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (letter === 0 && deleting) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [letter, deleting, index]);

  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        {/* LEFT SIDE */}
        <div className="left">
          <h1>
            Hi, I'm <span>Goodluck</span>
          </h1>

          <p className="typed">
            I am a <span className="dynamic">{text}</span>
            <span className="cursor">|</span>
          </p>

          <p className="lead">
            Passionate about building clean systems, solving problems,
            experimenting with C++ backend engineering and crafting visual
            ideas.
          </p>

          <div className="tags">
            <span>C++</span>
            <span>React</span>
            <span>Python</span>
            <span>Backend Logic</span>
            <span>Sqlite3</span>
          </div>

          <div className="actions">
            <a href="#projects" className="cta">
              View projects
            </a>
            <a href="#contact" className="ghost">
              Get in touch
            </a>
          </div>

          <div className="socials">
            <a
              href="https://github.com/Okesh101"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://behance.net/" target="_blank" rel="noreferrer">
              <FaBehance />
            </a>
            {/* <a href="/Goodluck-CV.pdf" download><FaDownload /></a> */}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="card">
          <img className="profile-img" src={profileImg} alt="Goodluck" />
          <div className="meta">
            <p>
              <strong>C++</strong> Developer
            </p>
            <p>Based in Lagos, Nigeria</p>
          </div>
        </div>
      </div>
    </section>
  );
}
