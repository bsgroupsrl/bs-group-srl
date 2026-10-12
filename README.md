# BS GROUP SRL

Sito aziendale React e Vite.

## Avvio e build

```sh
npm ci
npm run dev
npm run build
```

La build di produzione viene generata in `dist`. Su Vercel: framework Vite, build `npm run build`, output `dist`. La configurazione `vercel.json` permette di aprire direttamente le pagine del sito.

## Contenuti aggiornati

- Banner del marchio e stile approvati.
- Testi italiani per edilizia, ristrutturazioni, finiture e manutenzione.
- Pagina `/team` e team anche in `/about`: Bebo Ebid, Simone Mosaad, Francesco Mastrodonato.
- Numero principale +39 351 923 6594; contatto diretto della direzione tecnica separato.
- Credito nel footer: Website by Ing.Bebo Ebid.
- Progetti: in attesa di fotografie e descrizioni degli interventi reali.
- Contatti tramite telefono e collegamento email.

Le URL precedenti dei servizi sono conservate. `/services/finiture` e `/services/consulting` mostrano lo stesso servizio di finitura. I pulsanti email aprono il programma di posta del visitatore; non mostrano conferme di invio automatico.

## Pubblicazione

Verificare nel progetto Vercel il repository `bsgroupsrl/bs-group-srl`, il ramo di produzione e il dominio `bsgroupsrl.net` prima di pubblicare. Per aggiornare tramite GitHub, estrarre l'archivio e caricare i file nella radice del repository, mantenendo `src` e `public` nella radice. Non caricare l'archivio ZIP come file del sito.

## Verifiche

Build di produzione completata. Verificati rendering, collegamenti interni, immagini, ruoli, contatti e credito su 11 percorsi. Verifica visiva in browser del sito pubblicato da effettuare dopo il deploy.
