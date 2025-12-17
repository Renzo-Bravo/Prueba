// import { IoIosArrowDown } from "react-icons/io";
// import { IoIosArrowUp } from "react-icons/io";
// import { useState } from "react";
// import "./Calendar.css";
// import Guardapampa from "../guardapampa/Guardapampa.jsx";

import cronograma from "./Calender.json";

export default function Cronograma() {
  return (
    <section className="cronograma">
      <h1>{cronograma.evento}</h1>

      {cronograma.fechas.map((fecha, i) => (
        <div key={i} className="dia">
          <h2>{fecha.dia}</h2>

          <ul>
            {fecha.actividades.map((act, index) => (
              <li key={index} className="actividad">
                <span className="hora">
                  {act.inicio}
                  {act.fin && ` – ${act.fin}`}
                </span>

                <div>
                  <strong>{act.titulo}</strong>
                  {act.descripcion && <p>{act.descripcion}</p>}
                  {act.disertante && (
                    <small>Disertante: {act.disertante}</small>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
