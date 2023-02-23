export class Car {
    public brand: string; //Public se dejará acceder desde fuera de la clase
    public doors: number;
    public fuelTank: number;
    public isRunning: boolean;
    public type: string;

    private readonly createdAt: number; //Private seolo se deja acceder dentro de la clase
    //readonly no deja que se cambie el dato con un (myChevrolet.createdAt = 1233) daría error

    //En el constructor se inicializan las propiedades
    constructor(brandArg: string, typeArg: string){ //El constructor se ejecuta con cada nueva instancia y  recibe parametros
        this.brand = brandArg;
        this.doors = 0;
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = typeArg;
        this.createdAt = 12456;
    }

    //Metodos
    turnOn(){
        if(this.isRunning){ //Si el carro ya esta prendido...
            console.log('El carro ya estaba encendido, puede dañar la llave');
            return; //Detiene la ejecucion de este metodo
        }

        if(this.fuelTank <= 0){ //Si el carro tiene gasolina
            console.log('El carro puede encenderse, no tiene gasolina');
            return;
        }

        this.isRunning = true;
        console.log('El carro está encendido')
    }

    // gas > 100, fuelTank = 100
    // si ya está lleno, no se uede llenar de más
    // gas 50 + gas 20 = gas 70
    // gas 50 + gas 90 = gas 100
    fillTank(gas: number){

        if (gas <= 0){
            console.log('No tiene gasolina');
            return;
        }

        if(gas > 100){
            this.fuelTank = 100
        }

        let newGasValue = this.fuelTank += gas;

        if(newGasValue >= 100){
            this.fuelTank = 100
        } else this.fuelTank = newGasValue;
    }
}

let myChevrolet = new Car('Captiva', 'SUV');
//Se diferencia de las interfaces por que la palabra new crea una nueva instancia de toda la clase
//la interfaz, solo dice como debería ser un objeto

console.log(myChevrolet);
myChevrolet.turnOn();

myChevrolet.fillTank(20);
myChevrolet.fillTank(50);
console.log(myChevrolet);

//console.log(myChevrolet.createdAt) esto daría error porque createdAt es private