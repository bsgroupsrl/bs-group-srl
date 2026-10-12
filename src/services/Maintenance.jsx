import { Link, NavLink } from "react-router-dom";

export default function Maintenance() {
  return (<>
    <section className={"detail-header"}><h1>{"Manutenzione edile"}</h1><p>{"Riparazioni per immobili privati e condomini."}</p></section><section className={"section"}><div className={"wrap"}><article className={"detail-body"}><h2>{"Gli interventi che servono al tuo edificio"}</h2><p>{"Un ingresso da tinteggiare, piastrelle da sostituire o una parete da ripristinare. Lavoriamo con proprietari e amministratori per valutare e organizzare la manutenzione degli ambienti."}</p><ul><li>{"Tinteggiature di ingressi, vani scala e ambienti comuni"}</li><li>{"Sostituzione e ripristino di piastrelle"}</li><li>{"Riparazioni edili e opere in cartongesso"}</li><li>{"Interventi elettrici e idraulici con tecnici esterni specializzati"}</li></ul><div className={"buttons space"}><Link className={"btn"} to={"/contact"}>{"Richiedi un sopralluogo"}</Link><Link className={"btn outline"} to={"/services"}>{"Tutti i servizi"}</Link></div></article></div></section>
  </>);
}
