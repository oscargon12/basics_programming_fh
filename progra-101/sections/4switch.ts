
export let weekDay:number = 4;

if (weekDay <= 0 || weekDay >= 8){
    throw new Error('Numero de día inválido');
}

switch(weekDay){
    //weekDay === 1
    case 1:  // Valida el dato (weekDay === 1) ??
        console.log('Es Lunes');
        break;
    //weekDay === 2
    case 2: 
        console.log('Es martes');
        break;
    //weekDay === 3
    case 3: 
        console.log('Es miercoles');
        break;
    //weekDay === 4
    case 4: 
        console.log('Jueves');
        break;
    //weekDay === 5
    case 5: 
        console.log('Viernes');
        break;
    default:
        console.log('Es Domingo')
}