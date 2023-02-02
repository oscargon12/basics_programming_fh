
console.log('Hola Mundo!!!');

//Notas alumno
export const calcGrade = (alumnGrade:number) =>{
    
    let gradeLetter:string = '';

    if (alumnGrade >= 90){
        gradeLetter = 'A';
    } else if (alumnGrade >= 80) {
        gradeLetter = 'B';
    } else if (alumnGrade >= 70) {
        gradeLetter = 'C';
    } else if (alumnGrade >= 60) {
        gradeLetter = 'D';
    } else if (alumnGrade < 60) {
        gradeLetter = 'F';
    } else {
        console.log('No es un numero valido')
    }

    console.log('La nota del alumno es:', gradeLetter);
}

calcGrade(95);
calcGrade(82);
calcGrade(73);
calcGrade(65);
calcGrade(57);