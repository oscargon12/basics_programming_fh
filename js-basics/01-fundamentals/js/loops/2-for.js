const heroes = ['Batman', 'Superman', 'Wonder woman', 'Aquaman'];

console.log('For tradicional');
for(let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
}

// FOR IN
console.log('Ciclo for in');
for( let j in heroes ){
    console.log(heroes[j])
}

// FOR OF
console.log('Ciclo for of');
for(let heroe of heroes){
    console.log(heroe);
}