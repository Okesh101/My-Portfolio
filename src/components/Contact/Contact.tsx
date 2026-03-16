import "./Contact.css";
import profileImg from "../../assets/me.jpg";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const PUBLIC_KEY = import.meta.env.VITE_EMAIL_KEY;
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    // Send message to YOU
    emailjs.sendForm("service_kgyicjd", "contact_template_id", form.current, {
      publicKey: PUBLIC_KEY,
    });

    // Send auto reply to USER
    emailjs
      .sendForm("service_kgyicjd", "autoreply_template_id", form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
      });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>

      <div className="contact-grid">
        {/* Left - Form */}
        <div className="left">
          <p className="muted">
            Interested in working together? Send me a message
          </p>

          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <input placeholder="Your name" name="name" required />
            <input placeholder="Email" type="email" name="email" required />
            <textarea placeholder="Message" name="message" rows={6} required />

            <button className="send">Send Message →</button>
          </form>
        </div>

        {/* Right - Profile Contact Card */}
        <aside className="right">
          <div className="card">
            <img className="profile-img" src={profileImg} alt="Goodluck" />

            <h4>Goodluck</h4>
            <p className="muted">Backend Developer — Nigeria</p>

            <p className="contact-info">
              <FaEnvelope />{" "}
              <a href="mailto:ebubeokechukwu13@gmail.com">
                ebubeokechukwu13@gmail.com
              </a>
            </p>

            <p className="contact-info">
              <FaPhone /> <a href="tel:+2348144152544">+234 814 415 2544</a>
            </p>

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
                className="github"
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
                href="https://wa.me/2348144152544?text=Hello%20Goodluck%2C%20I%27m%20interested%20in%20working%20with%20you"
                target="_blank"
                className="whatsapp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
