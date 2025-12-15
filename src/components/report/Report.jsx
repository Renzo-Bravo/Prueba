import "./Report.css";

export default function Report() {
  return (
    <section className="ediciones-contacto">
      <div className="ediciones">
        <h3>Ediciones anteriores</h3>
        <p>
          Edición 2025 “Jornadas regionales de FEDIAP Inteligencia Artificial”
        </p>
        <span>Fuentes:</span>
        <a href="#">LINK1</a>
        <a href="#">LINK2</a>
      </div>

      <div className="contacto">
        <h3>Contacto</h3>
        <p>Dudas, consultas y más información:</p>

        <div className="contact-item">
          <a href="mailto:sergioruemente@cruzadapatatonica.org">
            sergiorumente@cruzadapatatonica.org
          </a>
        </div>

        <div className="contact-item">
          <a href="tel:+541155770930">+54 11 55770930</a>
        </div>
      </div>
    </section>
  );
}
