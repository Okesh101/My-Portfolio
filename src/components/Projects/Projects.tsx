import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Example images — replace with your own
import projExam from "../../assets/proj_exam.png";
import projPortfolio from "../../assets/proj_portfolio.png";
import projPassword from "../../assets/proj_ps-checker.png";
import projDebate from "../../assets/proj_debate.png";
import projFace from "../../assets/proj_face_auth.png";
import projJob from "../../assets/proj_job.png"

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "GAI Debate",
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
    github: "https://github.com/Okesh101",
    live: "https://gai-debate.onrender.com/",
  },
  {
    title: "Password Strength Checker",
    description:
      "A tool to check the strength of passwords using various algorithms and known breached lists.",
    tech: ["HTML", "CSS", "JavaScript", "C++", "Crow"],
    image: projPassword,
    github: "https://github.com/Okesh101",
    live: "https://ps-checker.onrender.com/",
  },
  {
    title: "Portfolio",
    description:
      "Personal portfolio built with Vite, TypeScript and custom UI engineering.",
    tech: ["React", "TypeScript", "CSS"],
    image: projPortfolio,
    github: "https://github.com/Okesh101/My-Portfolio",
    live: "https://Okesh101.github.io/My-Portfolio/",
  },
  {
    title: "Exam Portal",
    description:
      "A modern school exam system built with React for the frontend and Crow (C++) for the backend.",
    tech: ["React", "TypeScript", "C++", "Crow", "JSON"],
    image: projExam,
    github: "https://github.com/Okesh101",
    // live: "#",
  },
  {
    title: "Job Search (In-Progress)",
    description:
      "Currently contributing to the backend infrastructure of this site that helps developers find jobs online.",
    tech: ["React", "JavaScript", "C++", "Crow", "Sqlite3"],
    image: projJob,
    github: "https://github.com/Okesh101",
    // live: "#",
  },
  {
    title: "Face Recognition Login System (In-Progress)",
    description:
      "A project that uses facial scanning for sign-up and sign-in as a biometric authentication system",
    tech: ["React", "TypeScript", "OpenCV", "C++", "Crow", "JSON"],
    image: projFace,
    github: "https://github.com/Okesh101",
    // live: "#",
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
              <img src={p.image} alt={p.title} />
            </div>

            {/* Text Area */}
            <div className="project-body">
              <h3>{p.title}</h3>
              <p className="desc">{p.description}</p>

              <div className="tech-tags">
                {p.tech.map((t, idx) => (
                  <span key={idx}>{t}</span>
                ))}
              </div>

              <div className="project-links">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                )}

                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
