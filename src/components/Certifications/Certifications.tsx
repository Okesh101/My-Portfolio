import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Certifications.css";
import certIntroCsharp from "../../assets/cert_introCsharp.jpg";
import certIntermCsharp from "../../assets/cert_intermCsharp.jpg";
import certGetConnect from "../../assets/cert_getConnected.jpg";
import certCyberSec from "../../assets/cert_cyberSecurity.jpg";
import certEnyata from "../../assets/cert_enyataHack.jpg";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  stack: string[];
  img: string;
}

const certs: Certificate[] = [
  {
    title: "Enyata Hackathon Participant",
    issuer: "Interswitch & Enyata",
    date: "Mar - Apr 2026",
    stack: ["Hackathon", "Problem Solving"],
    img: certEnyata,
  },
  {
    title: "Cybersecurity Essentials",
    issuer: "JGIYC Digital Economy Training Academy",
    date: "Mar 2026",
    stack: ["CyberSecurity", "Kali Linux"],
    img: certCyberSec,
  },
  {
    title: "C# Intermediate",
    issuer: "Sololearn",
    date: "Feb 2026",
    stack: ["C#"],
    img: certIntermCsharp,
  },
  {
    title: "Introduction to C#",
    issuer: "Sololearn",
    date: "Feb 2026",
    stack: ["C#"],
    img: certIntroCsharp,
  },
  {
    title: "Get Connected",
    issuer: "Cisco NetAcademy",
    date: "Jun 2023",
    stack: ["Networking", "CyberSecurity"],
    img: certGetConnect,
  },
];

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(2.5);

  // Update cardsToShow based on screen width
  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(window.innerWidth <= 768 ? 1.2 : 2.5);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Logic: The last index is the total count minus the integer part of cards visible
  // const maxIndex = Math.max(0, certs.length - Math.floor(cardsToShow));

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, certs.length - cardsToShow));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // Calculation for the transform:
  // If we're near the end, we clamp the value so the last card aligns with the right edge.
  const getTransform = () => {
    const offset = Math.min(currentIndex, certs.length - cardsToShow);
    return `translateX(-${offset * (100 / cardsToShow)}%)`;
  };

  return (
    <section id="certifications" className="certifications">
      <h2 className="section-title">Certifications</h2>

      <div className="cert-slider-wrapper">
        <button
          className={`nav-btn prev ${currentIndex <= 0 ? "disabled" : ""}`}
          onClick={handlePrev}
          disabled={currentIndex <= 0}
        >
          <FaChevronLeft />
        </button>

        <button
          className={`nav-btn next ${currentIndex >= certs.length - cardsToShow ? "disabled" : ""}`}
          onClick={handleNext}
          disabled={currentIndex >= certs.length - cardsToShow}
        >
          <FaChevronRight />
        </button>

        <div className="cert-slider-container">
          <div className="cert-track" style={{ transform: getTransform() }}>
            {certs.map((c, i) => (
              <article className="cert-card" key={i}>
                <div className="cert-img-container">
                  <img src={c.img} alt={c.title} />
                </div>
                <div className="cert-info">
                  <span className="cert-issuer">{c.issuer}</span>
                  <h3>{c.title}</h3>
                  <div className="cert-meta">
                    <span className="cert-date">{c.date}</span>
                    <div className="cert-tags">
                      {c.stack.map((cm, idx) => (
                        <span key={idx} className="cert-stack-tag">{cm}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
