import "./Home.css";
import Hero from "../../components/Hero/Hero.tsx";
import About from "../../components/About/About.tsx";
import Projects from "../../components/Projects/Projects.tsx";
import Contact from "../../components/Contact/Contact.tsx";
import FloatingWhatsApp from "../../components/FloatingWhatsapp/FloatingWhatsApp.tsx";
import Footer from "../../components/Footer/Footer.tsx";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <FloatingWhatsApp />
      <Footer />
    </main>
  );
}
