import "./Report.css";

export default function Report() {
  return (
    <section className="contact-section" id="contact-id">
      <div className="ediciones">
        <div className="report-header-left">
          <h2 className="title-report">Ediciones anteriores</h2>
          <div className="title-underline-left"></div>
        </div>
        
        <p className="text-report">
          Edición 2025 “Jornadas regionales de FEDIAP Inteligencia Artificial”
        </p>
        
        <div className="fuentes-container">
          <span className="fuentes-label">Fuentes:</span>
          <div className="links-wrapper">
            <a href="https://infotecrealico.com.ar/contenido/75514/docentes-del-colegio-agropecuario-realico-presentaron-su-proyecto-en-las-jornada" target="_blank" className="report-link">Nota Infotecrealico</a>
            <a href="https://alteredu.com.ar/cruzada-patagonica-la-escuela-agrotecnica-es-una-gran-fuente-de-recursos-didacticos-porque-trabaja-con-seres-vivos-y-variedad-de-materiales-para-la-produccion/" target="_blank" className="report-link">Nota AlterEdu</a>
          </div>
        </div>
      </div>

      <div className="contacto">
        <div className="report-header-left">
          <h2 className="title-report">Contacto</h2>
          <div className="title-underline-left"></div>
        </div>
        
        <p className="text-report">Dudas, consultas y más información:</p>

        <div className="contact-methods">
          <a href="mailto:sergioruemente@cruzadapatatonica.org" className="contact-item-link">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="contact-icon" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg>
            <span>sergiorumente@cruzadapatatonica.org</span>
          </a>

          <a href="tel:+541155770930" className="contact-item-link">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="contact-icon" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z" />
            </svg>
            <span>+54 11 55770930</span>
          </a>
        </div>
      </div>
    </section>
  );
}