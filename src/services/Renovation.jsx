import { Link, NavLink } from "react-router-dom";

export default function Renovation() {
  return (<>
    <section className={"detail-header"}><h1>{"Ristrutturazioni"}</h1><p>{"Opere edili e finiture per rinnovare gli ambienti."}</p></section><section className={"section"}><div className={"wrap"}><article className={"detail-body"}><h2>{"Ristrutturare un appartamento o un locale"}</h2><p>{"Ci occupiamo di interventi di ristrutturazione e finitura. Partiamo dalle esigenze del cliente e dallo stato degli ambienti per individuare le lavorazioni necessarie."}</p><ul><li>{"Opere edili interne"}</li><li>{"Cartongesso e finiture"}</li><li>{"Pavimenti, rivestimenti e tinteggiature"}</li><li>{"Coordinamento con tecnici esterni per elettricità e idraulica"}</li></ul><div className={"buttons space"}><Link className={"btn"} to={"/contact"}>{"Parliamo del progetto"}</Link><Link className={"btn outline"} to={"/services"}>{"Tutti i servizi"}</Link></div></article></div></section>
  </>);
}
