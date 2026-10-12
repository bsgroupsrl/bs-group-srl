
export default function OurTeam() {
  return (<>
    <section className={"section gray"} id={"team"}><div className={"wrap"}><h2>{"Il nostro "}<span className={"yellow"}>{"Team"}</span></h2><div className={"cards team"}><article className={"card"}><img className={"team-circle"} src={"/images/bebo-ebid.png"} alt={"Bebo Ebid"} width={"144"} height={"144"} loading={"lazy"} decoding={"async"} /><h3>{"Bebo Ebid"}</h3><p>{"CEO & Direttore dei Lavori"}</p></article><article className={"card"}><img className={"team-circle"} src={"/images/simone-mosaad.png"} alt={"Simone Mosaad"} width={"144"} height={"144"} loading={"lazy"} decoding={"async"} /><h3>{"Simone Mosaad"}</h3><p>{"Founder & Commerciale"}</p></article><article className={"card"}><img className={"team-circle"} src={"/images/francesco-mastrodonato.png"} alt={"Francesco Mastrodonato"} width={"144"} height={"144"} loading={"lazy"} decoding={"async"} /><h3>{"Francesco Mastrodonato"}</h3><p>{"Direttore Tecnico"}</p><a href={"mailto:geom.francesco@bsgroupsrl.net"}>{"geom.francesco@bsgroupsrl.net"}</a><br /><a href={"tel:+393279449458"}>{"Diretto: +39 327 944 9458"}</a></article></div></div></section>
  </>);
}
