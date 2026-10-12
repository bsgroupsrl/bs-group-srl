import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const titles = {
  '/': 'Edilizia, ristrutturazioni e manutenzione',
  '/home': 'Edilizia, ristrutturazioni e manutenzione',
  '/about': 'Chi siamo', '/team': 'Il nostro Team',
  '/services': 'Servizi', '/services/construction': 'Edilizia e ripristini',
  '/services/renovation': 'Ristrutturazioni', '/services/consulting': 'Finiture',
  '/services/finiture': 'Finiture', '/services/maintenance': 'Manutenzione edile',
  '/projects': 'I nostri lavori', '/contact': 'Contatti',
};
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `BS GROUP SRL | ${titles[pathname] || 'Pagina non trovata'}`;
  }, [pathname]);
  return null;
}
