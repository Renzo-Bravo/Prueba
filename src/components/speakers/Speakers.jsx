import Line from "../line/Line.jsx";
import "./Speakers.css";

export default function Speakers() {
  const speakers = [
    { nombre: "Nombre y Apellido", charla: "Título de charla" },
    { nombre: "Nombre y Apellido", charla: "Título de charla" },
    { nombre: "Nombre y Apellido", charla: "Título de charla" },
  ];

  return (
    <section className="speakers-section" id="speakers">
      <div className="calendar-header">
        <h2 className="title">Disertantes</h2>
        <div className="title-underline"></div>
      </div>

      <div className="speakers-grid">
        {speakers.map((d, index) => (
          <div key={index} className="speaker-card">
            <div className="foto-wrapper">
              <div className="foto-placeholder">
                <i className="fas fa-user-alt"></i>
              </div>
            </div>
            
            <div className="speaker-info">
              <a
                href="http://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="speaker-link"
              >
                <h3>{d.nombre}</h3>
              </a>
              <p>{d.charla}</p>
            </div>
          </div>
        ))}
      </div>
      <Line />
    </section>
  );
}