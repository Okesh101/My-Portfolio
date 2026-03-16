import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaWhatsapp, FaArrowUp, FaInstagram, FaDev } from "react-icons/fa";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="separator"></div>

      <div className="footer-inner">
        <p className="name">Goodluck</p>

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

        <div className="icons">
          <a
            href="https://github.com/Okesh101"
            target="_blank"
            rel="nonreferrer"
            className="github"
          >
            <FaGithub />
          </a>
          {/* <a href="https://linkedin.com/" target="_blank">
            <FaLinkedin />
          </a> */}
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
