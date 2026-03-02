import "./Contact.css";
import profileImg from "../../assets/me.jpg";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const PUBLIC_KEY = import.meta.env.VITE_EMAIL_KEY;
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_kgyicjd", "template_goru7jm", form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          alert("Successfully sent! Thank you for contacting us.");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message.");
        },
      );
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
            <textarea placeholder="Message" name="title" rows={6} required />

            <button className="send">Send Message →</button>
          </form>
        </div>

        {/* Right - Profile Contact Card */}
        <aside className="right">
          <div className="card">
            <img className="profile-img" src={profileImg} alt="Goodluck" />

            <h4>Goodluck</h4>
            <p className="muted">C++ Developer — Nigeria</p>

            <p className="contact-info">
              <FaEnvelope />{" "}
              <a href="mailto:ebubeokechukwu13@gmail.com">
                ebubeokechukwu13@gmail.com
              </a>
            </p>

            <p className="contact-info">
              <FaPhone /> <a href="tel:+2348144152544">+234 814 415 2544</a>
            </p>

            <div className="socials">
              <a
                href="https://github.com/Okesh101"
                target="_blank"
                className="github"
              >
                <FaGithub />
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
