export default function MobileContactBar() {
  return (
    <div className="mobile-bar" role="group" aria-label="Contatto rapido">
      <a className="mobile-bar-call" href="tel:+393519236594">Chiama ora</a>
      <a className="mobile-bar-wa" href="https://wa.me/393519236594" target="_blank" rel="noopener noreferrer">WhatsApp</a>
    </div>
  );
}
