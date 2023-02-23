//Asi le digo a TS como deben lucir los objetos de cierto tipo

export interface Person { //Las interfaces van con Mayus
    name: string;
    age: number;
    isActive: boolean;
}

let oscar: Person = {
    name: 'Oscar',
    age: 37,
    isActive: true,
}

let marce: Person = {
    name: "Marce",
    age: 35,
    isActive: true,
}

let people: Person[] = [oscar, marce]; //Genial: arreglo del tipo Person

for(let i = 0; i < people.length; i++){
    let person = people[i];
    console.log(person.name + ' ' + person.age)
}