import { useState } from "react";
import CruzadaLogo from "@/assets/logo/logo-sin-fondo.webp";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <a href="https://cruzadapatagonica.org/" target="_blank" rel="noopener noreferrer">
            <img src={CruzadaLogo} alt="Cruzada Patagonica Logo" />
          </a>
        </div>

        <button 
          className="label-hamburguesa" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menú"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="list-icon"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>

        <ul className={`ul-links ${isMenuOpen ? "open" : ""}`}>
          <li className="li-links">
            <a href="#hero" className="links" onClick={() => setIsMenuOpen(false)}>Inicio</a>
          </li>
          <li className="li-links">
            <a href="#info-id" className="links" onClick={() => setIsMenuOpen(false)}>Evento</a>
          </li>
          <li className="li-links">
            <a href="#speakers" className="links" onClick={() => setIsMenuOpen(false)}>Disertantes</a>
          </li>
          <li className="li-links">
            <a href="#calendar-id" className="links" onClick={() => setIsMenuOpen(false)}>Cronograma</a>
          </li>
          <li className="li-links">
            <a href="#footer-id" className="links" onClick={() => setIsMenuOpen(false)}>Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
