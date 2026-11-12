import { Link } from "react-router-dom";

export default function Cookie() {
  return (
    <section className="section"><div className="wrap legal">
      <h1>Cookie policy</h1>
      <p className="note">Ultimo aggiornamento: novembre 2026</p>
      <h2>Cookie utilizzati</h2>
      <p>Questo sito non utilizza cookie di profilazione né strumenti di analisi o pubblicità di terze parti. Per questo motivo non mostra un banner per il consenso.</p>
      <h2>Archiviazione tecnica</h2>
      <p>Il sito può salvare nel tuo browser la lingua scelta (localStorage). Si tratta di un dato tecnico, necessario al funzionamento, che non viene inviato a noi né a terzi e non serve a identificarti.</p>
      <h2>Link a servizi esterni</h2>
      <p>I link a Google Maps e WhatsApp aprono servizi di terze parti, che applicano proprie informative e proprie policy sui cookie.</p>
      <h2>Come cancellare i dati</h2>
      <p>Puoi eliminare i dati salvati dal sito dalle impostazioni del tuo browser. Per altre informazioni sul trattamento dei dati leggi l'<Link to="/privacy">informativa sulla privacy</Link>.</p>
    </div></section>
  );
}
