import { useState, useEffect, useRef } from "react";
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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update cardsToShow based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setCardsToShow(1.1);
      } else if (width <= 768) {
        setCardsToShow(1.5);
      } else if (width <= 1024) {
        setCardsToShow(2.2);
      } else {
        setCardsToShow(2.5);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, certs.length - Math.floor(cardsToShow));

  const handleNext = () => {
    if (isTransitioning || currentIndex >= maxIndex) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const handlePrev = () => {
    if (isTransitioning || currentIndex <= 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const getTransform = () => {
    // Calculate how many pixels to slide
    if (trackRef.current && containerRef.current) {
      const cardWidth =
        trackRef.current.children[0]?.getBoundingClientRect().width || 0;
      const gap = 20; // Match CSS gap
      const offset = Math.min(currentIndex, maxIndex);
      return `translateX(-${offset * (cardWidth + gap)}px)`;
    }
    return `translateX(-${currentIndex * (100 / cardsToShow)}%)`;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isTransitioning]);

  // Touch support
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return (
    <section id="certifications" className="certifications">
      <h2 className="section-title">Certifications</h2>

      <div className="cert-slider-wrapper">
        <button
          className={`nav-btn prev ${currentIndex <= 0 ? "disabled" : ""}`}
          onClick={handlePrev}
          disabled={currentIndex <= 0 || isTransitioning}
          aria-label="Previous certifications"
        >
          <FaChevronLeft />
        </button>

        <button
          className={`nav-btn next ${currentIndex >= maxIndex ? "disabled" : ""}`}
          onClick={handleNext}
          disabled={currentIndex >= maxIndex || isTransitioning}
          aria-label="Next certifications"
        >
          <FaChevronRight />
        </button>

        <div
          className="cert-slider-container"
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="cert-track"
            ref={trackRef}
            style={{
              transform: getTransform(),
              transition: isTransitioning
                ? "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)"
                : "none",
            }}
          >
            {certs.map((c, i) => (
              <article className="cert-card" key={i}>
                <div className="cert-img-container">
                  <img src={c.img} alt={c.title} loading="lazy" />
                </div>
                <div className="cert-info">
                  <span className="cert-issuer">{c.issuer}</span>
                  <h3>{c.title}</h3>
                  <div className="cert-meta">
                    <span className="cert-date">{c.date}</span>
                    <div className="cert-tags">
                      {c.stack.map((cm, idx) => (
                        <span key={idx} className="cert-stack-tag">
                          {cm}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="cert-dots">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              className={`dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentIndex(i);
                  setTimeout(() => setIsTransitioning(false), 600);
                }
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
