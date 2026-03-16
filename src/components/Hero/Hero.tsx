import { useEffect, useState } from "react";
import "./Hero.css";
import profileImg from "../../assets/me.jpg";
import { FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaDev, FaXTwitter } from "react-icons/fa6";

const roles = [
  // "C++ Developer",
  "Backend Developer",
  "API Developer",
  "Systems Programmer",
  "Server-Side Engineer",
  "C++ Backend Engineer",
  "Python Backend Engineer"
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
            Backend-focused developer building REST APIs, authentication
            systems, and server-side applications using Python (Flask) and C++.
          </p>

          <div className="tags">
            <span>Python</span>
            <span>C++</span>
            <span>Flask</span>
            <span>C#</span>
            <span>Crow</span>
            <span>REST APIs</span>
            <span>Backend Architecture</span>
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

          <svg width="0" height="0" style={{ position: "absolute" }}>
            <linearGradient
              id="instagram-gradient"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop stopColor="#f9ce34" offset="0%" />
              <stop stopColor="#ee2a7b" offset="50%" />
              <stop stopColor="#6228d7" offset="100%" />
            </linearGradient>
          </svg>

          <div className="socials">
            <a
              href="https://github.com/Okesh101"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a href="https://x.com/goodluckdev" target="_blank" className="x">
              <FaXTwitter />
            </a>
            <a
              href="https://instagram.com/goodluck_dev"
              target="_blank"
              className="instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://dev.to/goodluckdev"
              target="_blank"
              className="devto"
            >
              <FaDev />
            </a>
            <a
              href="https://wa.me/2348144152544?text=Hello%20Goodluck"
              target="_blank"
              className="whatsapp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="card">
          <img className="profile-img" src={profileImg} alt="Goodluck" />
          <div className="meta">
            <p>
              <strong>Backend</strong> Developer
            </p>
            <p>Based in Lagos, Nigeria</p>
          </div>
        </div>
      </div>
    </section>
  );
}
