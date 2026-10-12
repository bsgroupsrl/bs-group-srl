import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (<>
    <header className={"reference-header"}><Link className={"reference-banner"} to={"/home"}><img src={"/images/brand-banner.jpg"} alt={"BS GROUP SRL - EDILIZIA & MANUTENZIONE"} width={"1079"} height={"216"} /></Link><div className={"reference-menu"}><nav aria-label={"Navigazione principale"}><NavLink to={"/home"} end>{"Home"}</NavLink><NavLink to={"/about"}>{"Chi siamo"}</NavLink><NavLink to={"/team"}>{"Team"}</NavLink><NavLink to={"/services"}>{"Servizi"}</NavLink><NavLink to={"/projects"}>{"Progetti"}</NavLink><NavLink to={"/contact"}>{"Contatti"}</NavLink></nav></div></header>
  </>);
}
