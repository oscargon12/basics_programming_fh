
console.log('Hola Mundo!!!');
console.log('** Program Start **');

export let isHungry: boolean = false;

if(isHungry){
    console.log('Comer empanada');
}


export let isTired: boolean = true;

if(isTired){
    console.log('Tomar café');
} else {
    console.log('Tomar agua');
}

export let grade: number = 60;
if (grade >= 60){
    console.log('El alumno SI aprueba');
} else if (grade >= 50 && grade >= 40){
    console.log('Estudie más')
} else {
    console.log('No aprueba')
}


console.log('** Program End **');
