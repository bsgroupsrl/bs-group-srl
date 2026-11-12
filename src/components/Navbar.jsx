import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  ["/home", "Home"],
  ["/about", "Chi siamo"],
  ["/team", "Team"],
  ["/services", "Servizi"],
  ["/projects", "Progetti"],
  ["/contact", "Contatti"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="reference-header">
      <Link className="reference-banner" to="/home" onClick={close}>
        <img src="/images/brand-banner-hd-v2.svg" alt="BS GROUP SRL - EDILIZIA & MANUTENZIONE" width="3840" height="768" fetchPriority="high" />
      </Link>
      <div className="reference-menu">
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen((v) => !v)}>
          {open ? "Chiudi menu" : "Menu"}
        </button>
        <nav id="main-nav" className={open ? "open" : ""} aria-label="Navigazione principale">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/home"} onClick={close}>{label}</NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
