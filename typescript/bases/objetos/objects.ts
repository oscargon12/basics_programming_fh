(()=> {

    //**Objetos literales */
 
    type Hero = { // esta es el tipo Heroe
        name: string;
        age?: number;
        powers: string[];
        getName?:() => string; 
    }

    let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
        //lo que va después de los : es el tipo de dato, en este caso el tipo es 
        // { name: string, age?: number... }
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad','Viajar en el tiempo'],
        getName() {
            return this.name
        },
    } 

    /* let superman: { name: string, age?: number, powers: string[], getName?: () => string}  = {
        //getName: () => string devolverá el string del nombre
        name: 'Clark Kent',
        age: 60,
        powers: ['Súper velocidad'],
        getName(){
            return this.name;
        }
    } */

    flash = {
        name: 'Wally West',
        powers: ['Super velocidad'],
        getName() {
            return this.name;
        },
    }

    let batman: Hero = {
        name: 'The batman',
        age: 45,
        powers: ['agilidad, money']
    }

    console.log( flash.getName ? flash.getName() : 'getName is undefinend' )
    //getName podría ser undefined, ya que la propiedad getName es opcional
    //verifica si getName existe antes de intentar llamarlo. Si getName es undefined, imprime un mensaje indicándolo.

    
    //**Union */
    type heroUnion = {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }

    let myCustomVariable: (string | number | heroUnion) = 'Oscar'; // una variable puede tener varios tipos
    console.log(typeof myCustomVariable)
    
    myCustomVariable = 20
    console.log(typeof myCustomVariable)
    
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1]
    }
    console.log(typeof myCustomVariable)
    console.log(myCustomVariable)


    //**TAREA */

    type carro = {
        carroceria: string,
        modelo: string,
        antibalas: boolean,
        pasajeros:number
        disparar?: ()=> void;
        
    }

    const batimovil:carro = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros:1,
    };

    const bumblebee: carro = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros:4,
        disparar(){ // El metodo disparar es opcional
          console.log("Disparando");
        }
    };

    
// Villanos debe de ser un arreglo de objetos personalizados
type villanos = {
    nombre: string,
    edad?: number,
    mutante: boolean,
}

const villanos: villanos[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type professor = {
 poder: string,
 estatura: number
}

const charles: professor = {
  poder:"psiquico",
  estatura: 1.78
};

type evilBoss = {
    lider: boolean,
    miembros: string[],
}

const apocalipsis: evilBoss = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: (professor | evilBoss);

mystique = charles;
mystique = apocalipsis;

})()