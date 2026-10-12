import { Link, NavLink } from "react-router-dom";

export default function RecentProjects() {
  return (<>
    <section className={"section"}><div className={"wrap"}><h2>{"I nostri "}<span className={"yellow"}>{"lavori"}</span></h2><p className={"intro"}>{"Le fotografie e le descrizioni degli interventi reali saranno inserite in questa sezione."}</p><div className={"cards"}><article className={"card portfolio"}><h3>{"Ristrutturazioni"}</h3><p>{"Opere edili per appartamenti e locali."}</p><Link className={"btn space"} to={"/services"}>{"Scopri le attività"}</Link></article><article className={"card portfolio"}><h3>{"Finiture"}</h3><p>{"Cartongesso, tinteggiature e posa."}</p><Link className={"btn space"} to={"/services"}>{"Scopri le attività"}</Link></article><article className={"card portfolio"}><h3>{"Manutenzione"}</h3><p>{"Ripristini e riparazioni degli edifici."}</p><Link className={"btn space"} to={"/services"}>{"Scopri le attività"}</Link></article></div></div></section>
  </>);
}
