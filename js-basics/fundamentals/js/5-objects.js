const personaje = {
    name: 'Ironman',
    suits: ['Mark1', 'MarkV', 'Hulkbuster'],
    active: true
}

console.log(`Ultimo traje ${personaje.suits[personaje.suits.length - 1]}`);
//Ultimo traje Hulkbuster

const charStatus = 'active';
console.log('vivo?', personaje[charStatus]); //Vivo: true