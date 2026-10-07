/*
  ESERCIZIO 9 - Operatore ternario (? :)

  Il ternario è un modo compatto per scrivere un if-else.

  Sintassi:  condizione ? valoreSeVero : valoreSeFalso
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es9_1(val) {
  // 1. Se val è vero restituisci "sì", altrimenti "no"
  // TODO: scrivi qui la tua soluzione
  return val ? "sì" : "no" ;
}

function es9_2(eta) {
  // 2. Se eta >= 18 restituisci "maggiorenne", altrimenti "minorenne"
  // TODO: scrivi qui la tua soluzione
  return eta >= 18 ? "maggiorenne" : "minorenne" 
}

function es9_3(n) {
  // 3. Se n è pari restituisci "pari", altrimenti "dispari"
  // TODO: scrivi qui la tua soluzione
  return n ? "pari" : "dispari" ;
}

// --- NON MODIFICARE SOTTO ---
export { es9_1, es9_2, es9_3 };
