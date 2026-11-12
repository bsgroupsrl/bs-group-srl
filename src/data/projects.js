const photo = (project, id, alt) => ({ src: `/images/projects/${project}/${String(id).padStart(2, '0')}.webp`, alt });
export const projects = [
  {
    id: 'via-claudio-galeno', title: 'Via Claudio Galeno 22', location: 'Milano', category: 'Ristrutturazione di interni',
    description: 'Una selezione degli ambienti e delle finiture: zona giorno, cucina, camere, bagni e terrazzo.',
    photos: [[15,'Cucina con penisola e finiture chiare'],[16,'Vista della cucina e della zona giorno'],[4,'Zona giorno con divano e cucina a vista'],[5,'Dettaglio del piano cucina'],[8,'Soggiorno con divano'],[9,'Parete TV e zona giorno'],[12,'Camera da letto'],[14,'Serramenti e luce naturale'],[10,'Bagno con lavabo e rivestimenti chiari'],[11,'Doccia con rivestimento grigio'],[1,'Bagno con pavimento geometrico'],[2,'Lavabo e specchio nel bagno'],[3,'Doccia con rivestimenti geometrici'],[13,'Ingresso e passaggio interno'],[6,'Terrazzo con parete rivestita'],[7,'Vista del terrazzo']].map(([id,alt])=>photo('galeno',id,alt)),
  },
  {
    id: 'progetti-fotovoltaici', title: 'Progetti fotovoltaici', location: 'Installazioni su coperture', category: 'Montaggio di strutture e pannelli',
    description: 'Una selezione dei nostri lavori di montaggio di strutture e pannelli fotovoltaici su tetti piani e a falda, con dettagli degli impianti e delle fasi di posa.',
    photos: [[16,"Panoramica dei pannelli fotovoltaici sulla falda"],[15,"Pannelli sulla copertura accanto al lucernario"],[1,"Pannelli fotovoltaici installati su copertura piana"],[2,"File di moduli fotovoltaici sul tetto"],[3,"Vista laterale dei pannelli sulla copertura"],[4,"Dettaglio dei moduli e dei supporti sul tetto piano"],[5,"Panoramica del campo fotovoltaico sul tetto"],[6,"Allineamento dei moduli su copertura piana"],[7,"Pannelli fotovoltaici su falda con vista sul verde"],[8,"Vista dall'alto dei pannelli sulla falda"],[9,"Moduli fotovoltaici su copertura in tegole"],[10,"Pannelli sul tetto al crepuscolo"],[11,"Impianto fotovoltaico su tetto tra edifici residenziali"],[14,"Vista dei moduli installati sulla falda"],[12,"Fase di posa dei moduli sulla copertura"],[13,"Lavorazioni di montaggio dei pannelli sul tetto"]].map(([id,alt])=>photo('fotovoltaici',id,alt)),
  },
  {
    id: 'villasanta-monza', title: 'Cantiere di Villasanta', location: 'Monza e Brianza', category: 'Lavori in cantiere',
    description: 'Fotografie del fabbricato, dei balconi e delle facciate durante le lavorazioni in cantiere.',
    photos: [[1,'Facciata e balconi del fabbricato'],[2,'Ponteggi sulla facciata del fabbricato'],[4,'Vista verticale dei balconi'],[3,'Vista dei ponteggi e del fabbricato'],[5,'Panoramica del cantiere']].map(([id,alt])=>photo('villasanta',id,alt)),
  },
  {
    id: 'agrate-brianza', title: 'Cantiere di Agrate Brianza', location: 'Agrate Brianza', category: 'Ristrutturazione di interni',
    description: 'Ambienti interni, pavimentazioni e dettagli del bagno, con immagini delle diverse fasi di lavorazione.',
    photos: [[3,'Ambiente con parete verde e pavimento effetto legno'],[4,'Vista della stanza e del passaggio'],[7,'Passaggio verso il bagno'],[8,'Stanza con parete arancione'],[9,'Predisposizioni degli impianti nella cucina'],[1,'Posa dei rivestimenti nel bagno'],[2,'Cabina doccia e rivestimenti'],[5,'Dettaglio della rubinetteria nera'],[6,'Porta di ingresso e parete verde']].map(([id,alt])=>photo('agrate',id,alt)),
  },
];
