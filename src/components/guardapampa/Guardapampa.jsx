import GuardaPampaEnt from "@/assets/design/Guardapampaentera.png";
import GuardaPampaMed from "@/assets/design/guardapampamediana.png";
import "./Guardapampa.css";


export default function Guardapampa() {
  return <section className="guardapampa-section">
    <img src={GuardaPampaEnt} alt="Guarda Pampa" className="guardapampa-entera"/>
    <img src={GuardaPampaMed} alt="Guarda Pampa" className="guardapampa-mediana"/>
  </section>;
}
