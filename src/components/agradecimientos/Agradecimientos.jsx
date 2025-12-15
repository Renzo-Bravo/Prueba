import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import "./Agradecimientos.css";

export default function Accordion() {
  const [openSponsors, setOpenSponsors] = useState(false);
  const [openAuspician, setOpenAuspician] = useState(false);
  const [openInstituciones, setOpenInstituciones] = useState(false);

  return (
    <section className="agradecimientos" id="specialThanks">
      <h2 className="titleAg">Agradecimientos</h2>

      <div className="menuDesplegable">
        <button
          className="menu-btn"
          onClick={() => setOpenSponsors(!openSponsors)}
        >
          Sponsors {openSponsors ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>

        {openSponsors && (
          <div className="menu-content">
            <ul>
              <li>Sponsor 1</li>
              <li>Sponsor 2</li>
              <li>Sponsor 3</li>
            </ul>
          </div>
        )}
      </div>

      <div className="menuDesplegable">
        <button
          className="menu-btn"
          onClick={() => setOpenAuspician(!openAuspician)}
        >
          Auspician {openAuspician ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>

        {openAuspician && (
          <div className="menu-content">
            <ul>
              <li>Auspiciante 1</li>
              <li>Auspiciante 2</li>
              <li>Auspiciante 3</li>
            </ul>
          </div>
        )}
      </div>

      <div className="menuDesplegable">
        <button
          className="menu-btn"
          onClick={() => setOpenInstituciones(!openInstituciones)}
        >
          Instotuciones Aliadas{" "}
          {openInstituciones ? <IoIosArrowUp /> : <IoIosArrowDown />}{" "}
        </button>

        {openInstituciones && (
          <div className="menu-content">
            <ul>
              <li>Institución 1</li>
              <li>Institución 2</li>
              <li>Institución 3</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
