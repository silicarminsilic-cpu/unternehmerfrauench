/* Konfiguration der Website. Wird vor app.js geladen.
   mode: 'live' = echte Seite (keine Demo-Elemente); 'demo' = Vorschau mit Demo-Daten.
   apiBase: URL des Backends, z. B. '/api' (leer, solange es noch kein Backend gibt).
   checkoutUrl: je Masterclass die https-URL des Stripe-Checkouts, sobald vorhanden. */
window.UF_CONFIG={
  mode:'live',
  apiBase:'',
  checkoutUrl:{
    // 'woman-first':'https://buy.stripe.com/...',
    // 'she-builds':'https://buy.stripe.com/...',
    // 'lead-yourself':'https://buy.stripe.com/...'
  }
};
