import { Link, NavLink } from "react-router-dom";

export default function Construction() {
  return (<>
    <section className={"detail-header"}><h1>{"Opere edili"}</h1><p>{"Lavorazioni da definire in base all’immobile e al progetto."}</p></section><section className={"section"}><div className={"wrap"}><article className={"detail-body"}><h2>{"Edilizia e ripristini"}</h2><p>{"Valutiamo opere edili e interventi di riparazione per immobili privati e spazi comuni. L’ambito del lavoro, le attività e l’organizzazione vengono concordati con il referente."}</p><ul><li>{"Opere di muratura e ripristino"}</li><li>{"Lavorazioni nell’ambito di ristrutturazioni"}</li><li>{"Coordinamento con il referente del lavoro"}</li><li>{"Preventivo per le opere individuate"}</li></ul><div className={"buttons space"}><Link className={"btn"} to={"/contact"}>{"Richiedi un preventivo"}</Link><Link className={"btn outline"} to={"/services"}>{"Tutti i servizi"}</Link></div></article></div></section>
  </>);
}
