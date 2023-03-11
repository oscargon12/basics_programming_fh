export const largestHeroName = (namesArray:string[]) => {
    
    let biggerName:string = '';
    for (let i = 0; i < namesArray.length; i++){
        console.log(namesArray[i].length)

        if(biggerName.length < namesArray[i].length){
            biggerName = namesArray[i]
        }
    }

    return biggerName;

}

const heroes = ['superman', 'Ironman', 'Spiderman', 'professor charles Javier'];
let bigHero = largestHeroName(heroes);
console.log(bigHero)