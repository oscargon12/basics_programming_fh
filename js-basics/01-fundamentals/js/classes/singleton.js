class Singleton{
    static instancia; //cuando la instancia se inicialice va a devolver eso es undefined
    name = ''; //Propiedad global

    constructor(name = ''){

        Singleton.instancia = this  //this hace referencia a esta instancia de la clase
        this.name = name;

        return this;
    }
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
console.log(`Nombre en la instancia es ${instancia1.name}`);