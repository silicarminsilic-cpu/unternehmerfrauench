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
