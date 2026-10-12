/*
  ESERCIZIO 3 - includes()

  Controlla se una stringa contiene un determinato testo.
  Restituisce true oppure false.

  Sintassi:  stringa.includes(valore)
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es3_1() {
  // 1. Restituisci true se "JavaScript" contiene "Script"
  // TODO: scrivi qui la tua soluzione
  return "JavaScript".includes("Script")
}

function es3_2() {
  // 2. Restituisci true se "Programmazione" contiene "Python"
  // TODO: scrivi qui la tua soluzione
  return "Programmazione".includes("Python")
}

function es3_3(email) {
  // 3. Verifica se la mail ricevuta contiene "@"
  // TODO: scrivi qui la tua soluzione
  return email.includes("@")
}

// --- NON MODIFICARE SOTTO ---
export { es3_1, es3_2, es3_3 };
