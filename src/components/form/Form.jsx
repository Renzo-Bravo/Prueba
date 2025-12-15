import Guardapampa from "../guardapampa/Guardapampa.jsx";
import Line from "../line/Line.jsx";
import logo from "@/assets/logo/logo-en-blanco-sin-fondo.png";
import "./Form.css";

export default function Form() {
  return (
    <section className="formulario" id="joinSection">
      <Guardapampa />
      <div className="info-form">
        <h2 className="title-with-bar">Formulario de inscripción</h2>
        <p>
          Únete a nosotros en este encuentro transformador. La inscripción
          incluye todas las conferencias, talleres, materiales y refrigerios.
        </p>
      </div>

      <div className="date-price">
        <p>Costo por persona</p>
        <p>$150.000</p>
      </div>

      <section className="form-section">
        <div className="image-With-Logo">
          <div className="backgr">
            <img src={logo} alt="Logo cruzada patagonica" />
          </div>
        </div>
        <div className="form-container">
          <form>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" placeholder="Ej: Juan" required />
            </div>

            <div className="form-group">
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                id="apellido"
                placeholder="Ej: Pérez"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="correo@ejemplo.com"
                required
              />
            </div>

            <button type="submit" className="btn-enviar">
              Enviar
            </button>
          </form>
        </div>
      </section>
      <Line />
    </section>
  );
}
