import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const origin = "https://www.bsgroupsrl.net";
const pages = {
  "/": [
    "Edilizia e manutenzione a Milano | BS GROUP SRL",
    "BS GROUP SRL: opere edili, ristrutturazioni, finiture e manutenzione a Milano per privati, condomini e imprese."
  ],
  "/about": [
    "Impresa edile a Milano: chi siamo | BS GROUP SRL",
    "Scopri BS GROUP SRL, impresa di edilizia, ristrutturazioni, finiture e manutenzione con sede a Milano."
  ],
  "/team": [
    "Il nostro team | BS GROUP SRL Milano",
    "Conosci il team BS GROUP SRL e i referenti per lavori edili, ristrutturazioni e manutenzione a Milano."
  ],
  "/services": [
    "Servizi edili e ristrutturazioni a Milano | BS GROUP SRL",
    "Opere edili, ristrutturazioni, cartongesso, tinteggiature, pavimenti e manutenzione per privati, condomini e imprese a Milano."
  ],
  "/services/construction": [
    "Opere edili a Milano | BS GROUP SRL",
    "Opere edili e assistenza alle lavorazioni di cantiere per privati, condomini e imprese a Milano."
  ],
  "/services/renovation": [
    "Ristrutturazioni a Milano | BS GROUP SRL",
    "Ristrutturazioni e riqualificazione di ambienti con BS GROUP SRL. Contattaci per descrivere il tuo progetto a Milano."
  ],
  "/services/consulting": [
    "Finiture, cartongesso e pavimenti a Milano | BS GROUP SRL",
    "Lavori di finitura, cartongesso, tinteggiature, pavimenti e rivestimenti a Milano con BS GROUP SRL."
  ],
  "/services/maintenance": [
    "Manutenzione edile a Milano | BS GROUP SRL",
    "Manutenzione edile ordinaria e straordinaria per immobili, condomini e imprese a Milano. Contatta BS GROUP SRL."
  ],
  "/projects": [
    "Progetti e lavori realizzati | BS GROUP SRL",
    "Guarda le fotografie dei lavori e dei progetti realizzati da BS GROUP SRL: edilizia, ristrutturazioni e finiture."
  ],
  "/privacy": [
    "Informativa sulla privacy | BS GROUP SRL",
    "Informativa sul trattamento dei dati personali di BS GROUP SRL ai sensi del GDPR."
  ],
  "/cookie": [
    "Cookie policy | BS GROUP SRL",
    "Cookie policy del sito BS GROUP SRL: nessun cookie di profilazione e nessuna analisi di terze parti."
  ],
  "/contact": [
    "Contatti e preventivi | BS GROUP SRL Milano",
    "Contatta BS GROUP SRL a Milano: +39 3519236594, info@bsgroupsrl.net. Descrivi i lavori per richiedere un preventivo."
  ]
};
const aliases = { "/home": "/", "/services/finiture": "/services/consulting" };

function meta(attribute, name, content) {
  let element = document.head.querySelector("meta[" + attribute + '="' + name + '"]');
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export default function PageMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const normalized = pathname.replace(/\/+$/, "") || "/";
    const path = aliases[normalized] || normalized;
    const page = pages[path];
    const title = page ? page[0] : "Pagina non trovata | BS GROUP SRL";
    const description = page ? page[1] : "La pagina richiesta non è disponibile.";
    document.title = title;
    meta("name", "description", description);
    meta("name", "robots", page ? "index, follow" : "noindex, follow");
    meta("property", "og:title", title);
    meta("property", "og:description", description);
    meta("property", "og:type", "website");
    meta("property", "og:locale", "it_IT");
    meta("property", "og:site_name", "BS GROUP SRL");
    meta("property", "og:url", origin + path);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!page) {
      canonical?.remove();
    } else {
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = origin + path;
    }
  }, [pathname]);
  return null;
}
