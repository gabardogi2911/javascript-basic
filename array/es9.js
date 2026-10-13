/*
  ESERCIZIO 9 - splice()

  .splice() modifica l'array: rimuove, sostituisce o aggiunge elementi.

  Sintassi:  array.splice(inizio, quanti, elemento1, elemento2, ...)
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es9_1(arr) {
  // 1. Rimuovi l'elemento all'indice 1 da arr e restituisci l'array modificato
  // TODO: scrivi qui la tua soluzione
  arr.splice(1,1)
  return arr;
}

function es9_2(arr, elemento) {
  // 2. Sostituisci l'elemento all'indice 0 con elemento e restituisci l'array
  // TODO: scrivi qui la tua soluzione
  arr.splice(0,1, elemento)
  return arr;
}

function es9_3(arr, indice) {
  // 3. Rimuovi l'elemento all'indice specificato e restituisci l'array
  // TODO: scrivi qui la tua soluzione
  arr.splice(indice,1)
  return arr;
}

// --- NON MODIFICARE SOTTO ---
export { es9_1, es9_2, es9_3 };
