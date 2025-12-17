import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";
import "./Calendar.css";
import Guardapampa from "../guardapampa/Guardapampa.jsx";

export default function Accordion() {
  const [calendar, setCalendar] = useState([]);
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    fetch("/data/calendar.json")
      .then((res) => res.json())
      .then((data) => setCalendar(data.days))
      .catch((err) => console.error("Error cargando cronograma:", err));
  }, []);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="calendar-section" id="calendar-id">
      <h2 className="title">Cronograma de actividades</h2>

      <div className="menu-container">
        {calendar.map((item) => (
          <div className="menuDesplegable" key={item.id}>
            <button
              className="menu-btn"
              onClick={() => toggleAccordion(item.id)}
            >
              {item.fecha}
              {openId === item.id ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>

            {openId === item.id && (
              <div className="menu-content">
                <ul>
                  {item.horarios.map((hora, index) => (
                    <li key={index}>{hora}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <Guardapampa />
    </section>
  );
}
