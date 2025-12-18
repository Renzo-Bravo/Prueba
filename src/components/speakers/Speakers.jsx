import { useState, useEffect } from "react";
import Line from "../line/Line.jsx";
import "./Speakers.css";

export default function Speakers() {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    fetch("/data/speakers.json")
      .then((response) => {
        if (!response.ok) throw new Error();
        return response.json();
      })
      .then((data) => setSpeakers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="speakers-section" id="speakers">
      <h2 className="title">Disertantes</h2>
      <div className="title-underline"></div>

      <div className="speakers-grid">
        {speakers.map((speak, index) => (
          <div key={index} className="speaker-card">
            <div className="foto-wrapper">
              {speak.imagen ? (
                <img
                  src={speak.imagen}
                  alt={speak.nombre}
                  className="foto-disertante"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <div className="foto-placeholder">
                  <i className="fas fa-user-alt"></i>
                </div>
              )}
            </div>

            <div className="speaker-info">
              <a
                href={speak.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="speaker-link"
              >
                <h3>{speak.nombre}</h3>
              </a>
              <p>{speak.titulo_charla}</p>
            </div>
          </div>
        ))}
      </div>
      <Line />
    </section>
  );
}
