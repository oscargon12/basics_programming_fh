export const heroesThatStartWith = (heroesArray:string[], letter:string) =>{
    
    letter = letter.toUpperCase(); 
    const newHeroes: string[] = [];

    for(let i = 0; i < heroesArray.length; i++){
        if(heroesArray[i][0] == letter){
            newHeroes.push(heroesArray[i]);
        }
    }

    //Option 2
    /* for(let name of heroesArray){
        if(name.startsWith(letter) ){
            newHeroes.push(heroesArray[i]);
        }
    } */

    return newHeroes;
}

const heroes = ['Superman', 'Ironman', 'Spiderman', 'professor charles Javier'];
//heroesThatStartWith(heroes, 's')
let heroesWithS = heroesThatStartWith(heroes, 's');
console.log(heroesWithS);