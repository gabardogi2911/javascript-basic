/*
  ESERCIZIO RIASSUNTIVO 4 - Anno bisestile

  Un anno è bisestile se:
  - è divisibile per 400, OPPURE
  - è divisibile per 4 MA NON per 100

  Restituisci true se l'anno è bisestile.
  Usa l'operatore % per verificare la divisibilità.
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es14(anno) {
  // TODO: scrivi qui la tua soluzione
  return anno % 400 === 0 || anno % 4 === 0 && anno % 100  !== 0  
}

// --- NON MODIFICARE SOTTO ---
export { es14 };
