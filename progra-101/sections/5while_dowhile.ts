//** Ciclo While **
console.log('** Ciclo while **')
export let gasTank:number = 100;

while(gasTank >= 0){
    console.log('Gasolina restante', gasTank);

    gasTank -= 10;
}
console.log('Ya no tiene gasolina')

console.log('** Ciclo doWhile, Siempre se va a ejecutar almenos una vez **')
//** Ciclo while **
let scooterBattery:number = 4;
do { //Siempre se va a ejecutar almenos una vez
    console.log('Nivel de batería', scooterBattery);
    scooterBattery--;
} while (scooterBattery >=0);
console.log('Se acabó la bateria')

