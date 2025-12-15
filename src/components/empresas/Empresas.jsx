import "./Empresas.css";
import Line from "../line/Line.jsx";

export default function Empresas() {
  return (
    <section className="empresas">
      <h2>Empresas</h2>
      <div className="container">
        <div className="tarjetas">
          <h3>Sponsor Agua</h3>
          <p>
            Proyección de logo durante el evento. Aparición del logo en el
            próximo anuario institucional de la Fundación. Presencia del logo en
            redes sociales, en el newsletter institucional y en la landing
            Posibilidad de promoción de acciones dentro de las Jornadas Fediap
            2026
          </p>
          <button className="precio">$3.500.000</button>
        </div>
        <div className="tarjetas">
          <h3>Sponsor Tierra</h3>
          <p>
            Proyección de logo durante el evento. Aparición del logo en el
            próximo anuario institucional de la Fundación. Presencia del logo en
            redes sociales, en el newsletter institucional y en la landing
          </p>
          <button className="precio">$2.500.000</button>
        </div>
        <div className="tarjetas">
          <h3>Sponsor Fuego</h3>
          <p>
            Proyección de logo durante el evento. Presencia del logo en redes
            sociales, en el newsletter institucional y en la landing
          </p>
          <button className="precio">$1.500.000</button>
        </div>
      </div>

      <Line />

      <h2>Becas</h2>
      <div className="container-becas">
        <div className="tarjetas-becas">
          <h3>Becas Para Alimentacion</h3>
          <p>
            Gastos de almuerzo, merienda y cena para 3 días durante las jornadas
            por docente
          </p>
          <button className="precio">$120.000</button>
        </div>
        <div className="tarjetas-becas">
          <h3>Becas Para Pernocte</h3>
          <p>
            Gastos de alojamiento y desayuno para 3 días durante las jornadas
            por docente
          </p>
          <button className="precio">$45.000</button>
        </div>
      </div>
    </section>
  );
}
