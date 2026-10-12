import { Link, NavLink } from "react-router-dom";

export default function Consulting() {
  return (<>
    <section className={"detail-header"}><h1>{"Finiture"}</h1><p>{"Le lavorazioni che completano un ambiente."}</p></section><section className={"section"}><div className={"wrap"}><article className={"detail-body"}><h2>{"Cartongesso, tinteggiature e posa"}</h2><p>{"Valutiamo lavori di finitura singoli oppure all’interno di una ristrutturazione. Definiamo le opere in base allo stato delle superfici e al risultato richiesto."}</p><ul><li>{"Preparazione e tinteggiatura di pareti e soffitti"}</li><li>{"Pareti e controsoffitti in cartongesso"}</li><li>{"Posa di pavimenti e rivestimenti"}</li><li>{"Sistemazione delle finiture danneggiate"}</li></ul><div className={"buttons space"}><Link className={"btn"} to={"/contact"}>{"Richiedi informazioni"}</Link><Link className={"btn outline"} to={"/services"}>{"Tutti i servizi"}</Link></div></article></div></section>
  </>);
}
