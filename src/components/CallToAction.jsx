import { Link, NavLink } from "react-router-dom";

export default function CallToAction() {
  return (<>
    <section className={"section gray"}><div className={"wrap"}><h2>{"Come lavoriamo con "}<span className={"yellow"}>{"te"}</span></h2><div className={"cards"}><article className={"card"}><div className={"symbol"} aria-hidden={"true"}>{"1"}</div><h3>{"Lavorazioni definite"}</h3><p>{"Prima di iniziare, individuiamo le opere da eseguire e prepariamo una proposta per il lavoro richiesto."}</p></article><article className={"card"}><div className={"symbol"} aria-hidden={"true"}>{"2"}</div><h3>{"Un contatto diretto"}</h3><p>{"Puoi parlare con la società per spiegare il problema, chiedere informazioni e organizzare il sopralluogo."}</p></article><article className={"card"}><div className={"symbol"} aria-hidden={"true"}>{"3"}</div><h3>{"Attività coordinate"}</h3><p>{"Concordiamo l’organizzazione del lavoro con il referente e coinvolgiamo tecnici esterni quando servono."}</p></article></div><div className={"center space"}><Link className={"btn"} to={"/services"}>{"Scopri i nostri servizi"}</Link></div></div></section>
  </>);
}
