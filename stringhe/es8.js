/*
  ESERCIZIO 8 - replace()

  Sostituisce la prima occorrenza trovata.

  Sintassi:  stringa.replace(vecchio, nuovo)
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es8_1() {
  // 1. Sostituisci "rosso" con "blu" nella stringa "rosso"
  // TODO: scrivi qui la tua soluzione
  return "rosso".replace("rosso", "blu")
}

function es8_2(frase) {
  // 2. Nella frase ricevuta, sostituisci "Mario" con "Luca"
  // TODO: scrivi qui la tua soluzione
  return frase.replace("Mario", "Luca")
}

function es8_3() {
  // 3. Sostituisci "2024" con "2025" nella stringa "2024"
  // TODO: scrivi qui la tua soluzione
  var i = "2024"
  return i.replace("2024","2025")
}

// --- NON MODIFICARE SOTTO ---
export { es8_1, es8_2, es8_3 };
