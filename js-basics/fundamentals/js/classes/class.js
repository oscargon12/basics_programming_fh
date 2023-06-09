//Las clases van en UpperCamelCase
class PersonaHeroe {

    static _counter = 0; //Voy a saber cuantas instancias tengo de mi clase
    static get counter(){
        return PersonaHeroe._counter + ' Instancias';
    }

    name = '';  //Este name 🔸
    nickName = '';
    phrase = '';
    food = '';

    //El constructor es un método que se ejecuta cuando se instancia una clase
    constructor( name = 'sin nombre', nickName = 'sin codigo', phrase = 'Sin frase' ) {
        //Se inicializan los valores de las propiedades en el contructor
        this.name = name;
        this.nickName = nickName;
        this.phrase = phrase;
        //Este name 🔸 es igual al del argumento del contructor

        PersonaHeroe._counter++
    }

    //Sets y Gets
    //SET establecer un valor
    set setComidaFavorita(food){
        this.food = food.toUpperCase();
    }

    //GET recuperar un valor
    get getComidaFavorita(){
        return `La comida favorita de ${this.name} es ${this.food}`; //El get siempre debe retornr algo
    }



    //metodos 🔹
    whoAmI(){
        console.log(`Soy ${this.name} y mi identidad secreta es ${this.nickName}`)
    }

    myIntroduce(){
        this.whoAmI();
        console.log('Y soy un avenger')
    }
}

const spiderman = new PersonaHeroe('Peter Parker', 'Spiderman', 'Tu amigable vecino');
const ironman = new PersonaHeroe('Tony Stark', 'Ironman', 'its good to be back');

//accediendo a metodos
spiderman.whoAmI(); //🔹
ironman.myIntroduce(); //🔹

spiderman.setComidaFavorita = 'Pizza'
console.log(spiderman.getComidaFavorita)

console.log('Conteo de heroes', PersonaHeroe._counter)
console.log(PersonaHeroe.counter);