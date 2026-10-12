import { Link, NavLink } from "react-router-dom";

export default function InterventionCTA() {
  return (<>
    <section className={"section gray"}><div className={"wrap center"}><h2>{"Parliamo del tuo "}<span className={"yellow"}>{"intervento"}</span></h2><div className={"card wide"}><p>{"Descrivi il tipo di lavoro, l’ambiente e le tue esigenze. Valutiamo le informazioni necessarie e se occorre un sopralluogo."}</p><Link className={"btn space"} to={"/contact"}>{"Contatta BS GROUP"}</Link></div></div></section>
  </>);
}
