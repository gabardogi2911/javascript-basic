/*
  ESERCIZIO RIASSUNTIVO 2 - Media voti

  Dati i voti 7, 8, 6, 9, 8:
  - calcola la somma
  - calcola la media
  - arrotonda la media all'intero più vicino

  Restituisci: { somma: 38, media: 7.6, mediaArrotondata: 8 }
*/

// --- SCRIVI QUI LA TUA SOLUZIONE ---

function es16() {
  const voti = [7, 8, 6, 9, 8];
  var somma = 0;
  for (let i = 0; i < voti.length; i++) {
    const element = voti[i];
    somma += element;
  }
  var media = somma/ voti.length;
  
  // TODO: scrivi qui la tua soluzione
  return {somma, media, mediaArrotondata: Math.round(media), }
}

// --- NON MODIFICARE SOTTO ---
export { es16 };
