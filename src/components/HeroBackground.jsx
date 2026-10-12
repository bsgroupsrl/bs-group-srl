import { Link, NavLink } from "react-router-dom";

export default function HeroBackground() {
  return (<>
    <section className={"hero"}><div><h1>{"Edilizia, ristrutturazioni e "}<span className={"yellow"}>{"manutenzione"}</span></h1><p>{"Opere edili, cartongesso, tinteggiature, pavimenti e rivestimenti. Lavoriamo con proprietari, amministratori di condominio e imprese."}</p><div className={"buttons"}><Link className={"btn"} to={"/projects"}>{"I nostri lavori"}</Link><Link className={"btn outline"} to={"/contact"}>{"Richiedi un sopralluogo"}</Link></div></div></section>
  </>);
}
