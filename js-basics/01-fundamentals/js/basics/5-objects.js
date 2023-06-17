const personaje = {
    name: 'Ironman',
    suits: ['Mark1', 'MarkV', 'Hulkbuster'],
    active: true,
    age: 40,
}

console.log(`Ultimo traje ${personaje.suits[personaje.suits.length - 1]}`);
//Ultimo traje Hulkbuster

const charStatus = 'active';
console.log('vivo?', personaje[charStatus]); //Vivo: true

//borrar una propiedad del objeto
delete personaje.age;

//Convierte las propiedades del objeto en elementos de array
const entriesPares = Object.entries(personaje)
console.log(entriesPares);

//Agrega una propiedad
personaje.marriage = true;

//Bloquear propiedades de un object
//Ya que el const solo cuida que siga siendo un objeto
Object.freeze(personaje);

//Solo las keys del objeto como array
const properties = Object.getOwnPropertyNames( personaje );

//Solo los value del objeto como array
const values = Object.values(personaje);