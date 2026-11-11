/* Konfiguration der Website. Wird vor app.js geladen.
   mode: 'live' = echte Seite; 'demo' = Vorschau mit Demo-Daten.
   apiBase: URL des Backends (leer, solange es noch kein Backend gibt).
   checkoutUrl: je Masterclass die https-URL des Stripe-Checkouts.
   social: Profil-Links. Nur Einträge mit https-Adresse erscheinen als Icon im Footer. */
window.UF_CONFIG={
  mode:'live',
  apiBase:'',
  // Formulare werden per FormSubmit als E-Mail an diese Adresse zugestellt (beim ersten Absenden einmal per Link bestätigen).
  formsTo:'s.martino@unternehmerfrauen.ch',
  // Formularversand über Web3Forms (empfohlen): Zugangsschlüssel von web3forms.com hier eintragen, dann ist FormSubmit nicht mehr nötig.
  // PDF-Unterlagen im Dashboard (Pfad zur PDF-Datei je Kurs und Unterlage). Leer lassen, wenn keine PDF angeboten wird.
  docUrls:{
    'woman-first-0':'unterlagen/01_WoF_Workbook_Selbstwert-und-Klarheit.pdf',
    'woman-first-1':'unterlagen/02_WoF_Reflexionsjournal.pdf',
    'woman-first-2':'unterlagen/03_WoF_Selbstwertuebungen.pdf',
    'woman-first-3':'unterlagen/04_WoF_Lebensplan.pdf',
    'she-builds-0':'unterlagen/05_SB_Business-Workbook.pdf',
    'she-builds-1':'unterlagen/06_SB_Positionierungsvorlage.pdf',
    'she-builds-2':'unterlagen/07_SB_Preis-und-Angebotsvorlage.pdf',
    'she-builds-3':'unterlagen/08_SB_90-Tage-Aktionsplan.pdf',
    'lead-yourself-0':'unterlagen/09_LY_Persoenliches-Workbook.pdf',
    'lead-yourself-1':'unterlagen/10_LY_Reflexionsfragen.pdf',
    'lead-yourself-2':'unterlagen/11_LY_Wochenplan-und-Routinen.pdf',
    'lead-yourself-3':'unterlagen/12_LY_Persoenlicher-Entwicklungsplan.pdf',
  },
  web3formsKey:'66effcc5-5237-4634-89ed-768d48a06d18',
  checkoutUrl:{
    // 'woman-first':'https://buy.stripe.com/...',
    // 'she-builds':'https://buy.stripe.com/...',
    // 'lead-yourself':'https://buy.stripe.com/...'
  },
  // PayPal-Zahlungslink je Masterclass (https), sobald eingerichtet. Erscheint dann neben dem Stripe-Button.
  paypalUrl:{
    // 'woman-first':'https://www.paypal.com/...',
    // 'she-builds':'https://www.paypal.com/...',
    // 'lead-yourself':'https://www.paypal.com/...'
  },
  social:{
    instagram:'',
    facebook:'',
    linkedin:'',
    tiktok:'',
    youtube:'',
    spotify:'',        // Podcast auf Spotify
    applepodcasts:''   // Podcast auf Apple Podcasts
  }
};
