import "./Footer.css";
import { FaGithub, FaLinkedin, FaWhatsapp, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="separator"></div>

      <div className="footer-inner">
        <p className="name">Goodluck</p>

        <div className="icons">
          <a href="https://github.com/Okesh101" target="_blank">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/2348144152544?text=Hello%20Goodluck"
            target="_blank"
          >
            <FaWhatsapp />
          </a>
        </div>

        <p className="copy">
          © {new Date().getFullYear()} Goodluck. All rights reserved.
        </p>

        <button className="to-top" onClick={scrollTop}>
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}
