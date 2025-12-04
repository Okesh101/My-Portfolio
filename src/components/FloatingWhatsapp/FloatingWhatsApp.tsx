import "./FloatingWhatsApp.css";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <div>
      <a
        href="https://wa.me/2348144152544?text=Hello%20Goodluck%2C%20I%27m%20interested%20in%20working%20with%20you"
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>
      <span className="whatsapp-tooltip">Chat on WhatsApp</span>
    </div>
  );
}
