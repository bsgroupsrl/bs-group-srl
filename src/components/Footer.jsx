import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (<>
    <footer className={"footer"}><div className={"wrap"}><div className={"footer-grid"}><div><h2>{"BS GROUP SRL"}</h2><p>{"Edilizia, ristrutturazioni, finiture e manutenzione."}</p></div><div><h3>{"Link rapidi"}</h3><Link to={"/home"}>{"Home"}</Link><Link to={"/about"}>{"Chi siamo"}</Link><Link to={"/team"}>{"Team"}</Link><Link to={"/services"}>{"Servizi"}</Link><Link to={"/projects"}>{"Progetti"}</Link><Link to={"/contact"}>{"Contatti"}</Link></div><div><h3>{"Contatti"}</h3><p>{"Sede legale: Via Comune Antico 11, 20125 Milano"}</p><a href={"tel:+393519236594"}>{"Telefono principale: +39 351 923 6594"}</a><a href={"mailto:info@bsgroupsrl.net"}>{"info@bsgroupsrl.net"}</a><p>{"P. IVA 12973770964 · REA MI-2696205"}</p></div></div><div className={"copyright"}>{"© 2026 BS GROUP SRL"}</div><div className={"site-credit"}>{"Website by Ing.Bebo Ebid"}</div></div></footer>
  </>);
}
