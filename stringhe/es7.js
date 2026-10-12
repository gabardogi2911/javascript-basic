/*
  ESERCIZIO 7 - slice()

  Estrae una parte della stringa.

  Sintassi:  stringa.slice(inizio, fine)
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es7_1(s) {
  // 1. Restituisci le prime tre lettere della stringa ricevuta
  // TODO: scrivi qui la tua soluzione
  return s.slice(0,3)
}

function es7_2() {
  // 2. Estrai il dominio da "mario@gmail.com" (tutto dopo la @)
  // TODO: scrivi qui la tua soluzione
  const s = "mario@gmail.com";
  const i =s.indexOf("@") + 1;
  return s.slice(i)
}

function es7_3(s) {
  // 3. Restituisci gli ultimi 4 caratteri usando un indice negativo
  // TODO: scrivi qui la tua soluzione
  return s.slice(-4)
}

// --- NON MODIFICARE SOTTO ---
export { es7_1, es7_2, es7_3 };
