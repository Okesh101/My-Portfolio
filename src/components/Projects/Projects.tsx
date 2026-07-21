import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Example images — replace with your own
import projExam from "../../assets/proj_exam.png";
// import projPortfolio from "../../assets/proj_portfolio.png";
import projPassword from "../../assets/proj_ps-checker.png";
import projDebate from "../../assets/proj_debate.png";
// import projFace from "../../assets/proj_face_auth.png";
// import projJob from "../../assets/proj_job.png";
import projHealthShield from "../../assets/proj_health_shield.png";
import projFarmDrive from "../../assets/proj_farmdrive.png";
import projForge from "../../assets/proj_forge.png";
import projLucidify from "../../assets/proj_lucidify.png";

type Project = {
  title: string;
  stack: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  live?: string;
  hackathon?: string;
  range?: string;
  hackathon_link?: string;
};

const projects: Project[] = [
  {
    title: "Lucidify",
    stack: "Backend",
    description:
      "Built the backend for Lucidify — a Flask-powered engine that automates CAC compliance for Nigerian businesses. From custom PDF generation to automated reminder scheduling, I engineered the logic that keeps small businesses penalty-free.",
    tech: ["Python", "Flask", "Sqlite3", "Groq API", "Llama3 LLM", "PyPDF"],
    image: projLucidify,
    github: "https://github.com/Okesh101/Lucidify",
    // live: "https://lucidify2.netlify.app/",
    hackathon: "Code4Justice Hackathon",
    range: "Apr - May 2026",
  },
  {
    title: "FarmDrive",
    stack: "Backend",
    description:
      "Engineered the real-time backend for a farm-to-market logistics platform, connecting farmers with drivers using GPS for tracking and AI for smart matching.",
    tech: ["Python", "Flask", "Sqlite3", "Groq API", "Flask-SocketIO"],
    image: projFarmDrive,
    github: "https://github.com/Marvel123g/FarmDrive",
    live: "https://farmdrive.netlify.app/",
    hackathon: "Enyata Community Buildathon",
    range: "Mar - Apr 2026",
    hackathon_link: "https://buildathon.enyata.com/",
  },
  {
    title: "Health Shield AI",
    stack: "Backend",
    description:
      "Developed the backend infrastructure for this health assistant application that was trained on over 18+ diseases and their symptoms for accurate predictions of potential health conditions based on user symptoms and medical history.",
    tech: ["Python", "Flask", "Sqlite3", "Whisper API", "Llama3 LLM"],
    image: projHealthShield,
    github: "https://github.com/Okesh101/Health-Shield",
    // live: "https://health-shield-black.vercel.app/",
    hackathon: "Cavista Technologies Hackathon",
    range: "Feb 2026",
    hackathon_link:
      "https://devpost.com/software/medintel-nyo2l9?ref_content=my-projects-tab&ref_feature=my_projects",
  },
  {
    title: "Forge",
    stack: "Backend",
    description:
      "Built the backend infrastructure for this AI agent powered by Gemini3 that designs a skill-building practice plan, observes performance over time, detects stagnation or growth, and rewrites the practice loop at intervals autonomously.",
    tech: ["Python", "Flask", "Gemini3 API", "APScheduler", "JSON"],
    image: projForge,
    github: "https://github.com/Okesh101/Forge",
    live: "https://forge2ai.vercel.app/",
    hackathon: "Google Gemini3 Hackathon",
    range: "Dec - Feb 2026",
    hackathon_link:
      "https://devpost.com/software/gemini-api-app?ref_content=my-projects-tab&ref_feature=my_projects",
  },
  {
    title: "GAI Debate",
    stack: "Full-Stack",
    description:
      "A debate platform that leverages the power of AI to simulate arguments and counter-arguments flow.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI API",
      "Flask",
      "LangChain",
    ],
    image: projDebate,
    github: "https://github.com/Okesh101/gai-debate-python-api",
    // live: "https://gai-debate.onrender.com/",
  },
  {
    title: "Password Strength Checker",
    stack: "Full-Stack",
    description:
      "A tool to check the strength of passwords using various algorithms and known breached lists.",
    tech: ["HTML", "CSS", "JavaScript", "C++", "Crow"],
    image: projPassword,
    github: "https://github.com/Okesh101/psChecker",
    // live: "https://ps-checker.onrender.com/",
  },
  {
    title: "Exam Portal",
    stack: "Full-Stack",
    description:
      "A modern school exam system built with React for the frontend and Crow (C++) for the backend.",
    tech: ["React", "TypeScript", "C++", "Crow", "JSON"],
    image: projExam,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <article className="project-card" key={i}>
            {/* Thumbnail */}
            <div className="project-thumb">
              <img src={p.image} alt={p.title} loading="lazy" />
            </div>

            {/* Text Area */}
            <div className="project-body">
              <div className="title-wrapper">
                <h3 className="project-title">
                  <span className="title-text">{p.title}</span>
                  <span className="tag-spacer"></span>
                  <span
                    className={`project-stack ${p.stack === "Backend" ? "tag-backend" : "tag-frontend"}`}
                  >
                    {p.stack}
                  </span>
                </h3>
              </div>
              <p className="desc">{p.description}</p>

              <div className="tech-tags">
                {p.tech.map((t, idx) => (
                  <span key={idx}>{t}</span>
                ))}
              </div>

              <div className="project-footer">
                <div className="project-links">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                  )}

                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>

                <div className="project-meta">
                  {p.hackathon && (
                    <a
                      href={p.hackathon_link}
                      target="_blank"
                      rel="noreferrer"
                      className="hackathon-link"
                    >
                      {p.hackathon}
                    </a>
                  )}
                  {p.range && <span className="project-date">{p.range}</span>}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
