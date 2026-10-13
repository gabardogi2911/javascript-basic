/*
  ESERCIZIO 4 - includes()

  .includes() verifica se un array contiene un determinato elemento.

  Sintassi:  array.includes(elemento)
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es4_1(arr, elemento) {
  // 1. Restituisci true se arr contiene elemento
  // TODO: scrivi qui la tua soluzione
  return (arr.includes(elemento));
}

function es4_2() {
  // 2. Verifica se ["rosso", "verde", "blu"] contiene "giallo"
  // TODO: scrivi qui la tua soluzione
  return ["rosso","verde","blu"].includes("giallo")
}

function es4_3(arr, a, b) {
  // 3. Restituisci true se arr contiene sia a che b
  // TODO: scrivi qui la tua soluzione
  return arr.includes("a" && "b")
}

// --- NON MODIFICARE SOTTO ---
export { es4_1, es4_2, es4_3 };
