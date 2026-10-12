/*
  ESERCIZIO 11 - trim()

  Elimina gli spazi all'inizio e alla fine della stringa.

  Sintassi:  stringa.trim()
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es11_1(s) {
  // 1. Rimuovi gli spazi all'inizio e alla fine della stringa
  // TODO: scrivi qui la tua soluzione
  return s.trim()
}

function es11_2(email) {
  // 2. Pulisci l'email rimuovendo spazi iniziali e finali
  // TODO: scrivi qui la tua soluzione
  return email.trim()
}

function es11_3(s) {
  // 3. Restituisci un array con [lunghezzaPrima, lunghezzaDopo]
  // TODO: scrivi qui la tua soluzione

  return [s.trim().length, s.trim().length]
}

// --- NON MODIFICARE SOTTO ---
export { es11_1, es11_2, es11_3 };
