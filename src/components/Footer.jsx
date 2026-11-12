import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <h2>BS GROUP SRL</h2>
            <p>Edilizia, ristrutturazioni, finiture e manutenzione.</p>
          </div>
          <div>
            <h3>Link rapidi</h3>
            <Link to="/home">Home</Link>
            <Link to="/about">Chi siamo</Link>
            <Link to="/team">Team</Link>
            <Link to="/services">Servizi</Link>
            <Link to="/projects">Progetti</Link>
            <Link to="/contact">Contatti</Link>
          </div>
          <div>
            <h3>Contatti</h3>
            <p>Sede legale: Via Comune Antico 11, 20125 Milano</p>
            <a href="https://www.google.com/maps/dir/?api=1&destination=Via%20Comune%20Antico%2011%2C%2020125%20Milano" target="_blank" rel="noopener noreferrer">Come raggiungerci</a>
            <a href="tel:+393519236594">Telefono principale: +39 3519236594</a>
            <a href="tel:+393279449458">Telefono: +39 3279449458</a>
            <a href="https://wa.me/393519236594" target="_blank" rel="noopener noreferrer">WhatsApp · BS GROUP SRL</a>
            <a href="mailto:info@bsgroupsrl.net">info@bsgroupsrl.net</a>
            <a href="mailto:bs.costruzioni.23@pec.it">PEC: bs.costruzioni.23@pec.it</a>
          </div>
        </div>
        <div className="copyright">
          © 2026 BS GROUP SRL · P. IVA 12973770964 · REA MI-2696205 · Capitale sociale € 10.000
        </div>
        <div className="site-credit"><small>Website by Ing. Bebo Ebid</small></div>
      </div>
    </footer>
  );
}
