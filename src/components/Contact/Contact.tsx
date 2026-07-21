import "./Contact.css";
import profileImg from "../../assets/me.png";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const PUBLIC_KEY = import.meta.env.VITE_EMAIL_KEY;
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current || isSending) return;

    setIsSending(true);
    setFormStatus({ type: null, message: "" });

    // Send message to YOU
    emailjs
      .sendForm("service_kgyicjd", "contact_template_id", form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(() => {
        // Send auto reply to USER
        return emailjs.sendForm(
          "service_kgyicjd",
          "autoreply_template_id",
          form.current!,
          {
            publicKey: PUBLIC_KEY,
          },
        );
      })
      .then(() => {
        setFormStatus({
          type: "success",
          message: "✅ Message sent successfully! I'll get back to you soon.",
        });
        form.current?.reset();
      })
      .catch((error) => {
        console.log(error);
        setFormStatus({
          type: "error",
          message:
            "❌ Failed to send message. Please try again or contact me directly.",
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact</h2>

      <div className="contact-grid">
        {/* Left - Form */}
        <div className="left">
          <p className="muted contact-subtitle">
            Interested in working together? Send me a message
          </p>

          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <input
              placeholder="Your name"
              name="name"
              required
              disabled={isSending}
            />
            <input
              placeholder="Email"
              type="email"
              name="email"
              required
              disabled={isSending}
            />
            <textarea
              placeholder="Message"
              name="message"
              rows={6}
              required
              disabled={isSending}
            />

            {formStatus.type && (
              <div className={`form-status ${formStatus.type}`}>
                {formStatus.message}
              </div>
            )}

            <button
              className={`send ${isSending ? "sending" : ""}`}
              type="submit"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message →"}
            </button>
          </form>
        </div>

        {/* Right - Profile Contact Card */}
        <aside className="right">
          <div className="card">
            <img
              className="profile-img"
              src={profileImg}
              alt="Goodluck - Backend Developer"
              loading="lazy"
            />

            <h4>Goodluck</h4>
            <p className="muted role">Backend Developer — Nigeria</p>

            <div className="contact-info">
              <FaEnvelope aria-hidden="true" />
              <a href="mailto:ebubeokechukwu13@gmail.com">
                ebubeokechukwu13@gmail.com
              </a>
            </div>

            <div className="contact-info">
              <FaPhone aria-hidden="true" />
              <a href="tel:+2348144152544">+234 814 415 2544</a>
            </div>

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

            <div className="socials" role="list">
              <a
                href="https://github.com/Okesh101"
                target="_blank"
                rel="noreferrer"
                className="github"
                aria-label="GitHub"
                role="listitem"
              >
                <FaGithub />
              </a>
              <a
                href="https://x.com/goodluckdev"
                target="_blank"
                rel="noreferrer"
                className="x"
                aria-label="X (Twitter)"
                role="listitem"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://instagram.com/goodluck_dev"
                target="_blank"
                rel="noreferrer"
                className="instagram"
                aria-label="Instagram"
                role="listitem"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/2348144152544?text=Hello%20Goodluck%2C%20I%27m%20interested%20in%20working%20with%20you"
                target="_blank"
                rel="noreferrer"
                className="whatsapp"
                aria-label="WhatsApp"
                role="listitem"
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
