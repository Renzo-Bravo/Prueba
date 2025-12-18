import "./Footer.css";
import Logo from "@/assets/logo/logo-en-blanco-sin-fondo.png";
import FondoFooter from "@/assets/design/food-bank_56.png";

export default function Footer() {
  return (
    <footer className="footer" id="footer-id">
      <div className="footer-head">
        <img src={FondoFooter} alt="Fondo Decorativo" className="fondo-img" />
      </div>

      <section className="footer-end">
        <div className="footer-column brand-col">
          <img src={Logo} alt="Cruzada Logo" className="footer-logo" />
          <p className="footer-description">
            Evento solidario para familias, empresas y organizaciones que buscan transformar la realidad rural.
          </p>
        </div>

        <div className="footer-column links-col">
          <h4>Secciones</h4>
          <ul className="footer-links">
            <li><a href="#hero">Inicio</a></li>
            <li><a href="#info-id">Evento</a></li>
            <li><a href="#speakers">Disertantes</a></li>
            <li><a href="#calendar-id">Cronograma</a></li>
            <li><a href="#form-id">Inscripción</a></li>
            <li><a href="#contact-id">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-column contact-col">
          <h4>Contacto</h4>
          <div className="contact-info-footer">
            <a href="tel:+5491100000000" className="contact-footer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon-footer" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z"/>
              </svg>
              +54 9 11 0000 0000
            </a>
            <a href="mailto:fundacion@cruzadapatagonica.org" className="contact-footer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon-footer" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
              </svg>
              fundacion@cruzadapatagonica.org
            </a>
          </div>
          
          <div className="footer-social">
            <a href="https://youtube.com" target="_blank" className="social-link"><i className="fab fa-youtube"></i></a>
            <a href="https://instagram.com" target="_blank" className="social-link"><i className="fab fa-instagram"></i></a>
            <a href="https://facebook.com" target="_blank" className="social-link"><i className="fab fa-facebook-f"></i></a>
          </div>
        </div>
      </section>

      <div className="footer-copy">
        <p>© 2025 Cruzada Patagónica – Todos los derechos reservados</p>
      </div>
    </footer>
  );
}