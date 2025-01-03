let array_1 = [
    ['un', 'per', 'incatenarli.'],
    ['Anello', 'trovarli,'],
    ['ghermirli', 'e'],
    ['gondor', 'mark'],
  ];
  
  let array_2 = [
    [['trovarli,']],
    ['tu,', 'sciocchi'],
    ['tu,', 'sciocchi', ['padron', 'Sauron']],
    ['nel', ['fuggite', 'gandalf']],
    [['domarli,', 'passare'], 'buio']
  ];
  
  // Costruiamo la frase estraendo solo le parole necessarie
  let frase = [
    'Un',
    array_1[1][0], // "Anello"
    'per',
    array_2[4][0][0], // "domarli,"
    array_1[0][0], // "un"
    array_1[1][0], // "Anello"
    'per',
    array_2[0][0][0], // "trovarli,"
    array_1[0][0], // "un"
    array_1[1][0], // "Anello"
    'per',
    array_1[2][0], // "ghermirli"
    array_1[2][1], // "e"
    array_2[3][0], // "nel"
    array_2[4][1], // "buio"
    array_1[0][2] // "incatenarli."
  ].join(' ');
  
  console.log(frase);
  