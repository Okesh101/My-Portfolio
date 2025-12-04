import "./Navbar.css";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Detect active section while scrolling
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    function onScroll() {
      let current = "";
      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = (section as HTMLElement).offsetTop - 200;
        const height = section.clientHeight;

        if (top >= offset && top < offset + height) {
          current = section.id;
        }
      });
      setActive(current);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="brand">
          <a href="#home">Goodluck Okechukwu</a>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-links ${isOpen ? "show" : ""}`}>
          <a className={active === "about" ? "active" : ""} href="#about">
            About
          </a>
          <a className={active === "projects" ? "active" : ""} href="#projects">
            Projects
          </a>
          <a className={active === "contact" ? "active" : ""} href="#contact">
            Contact
          </a>
          <a
            href="/Goodluck_Resume.pdf"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
