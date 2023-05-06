//TIP 1 Reducir esta función

function crearPersona ( nombre, apellido ){
    return {
        nombre: nombre,
        apellido: apellido
    }
}
const persona = crearPersona('Jon', 'Snow');
console.log(persona);

// a lo mismo pero más corto
const createPerson = ( name, lastName) => ({name, lastName}); //Los parentesis son necesarios acá, porque ese objeto es el retotno
const person2 = createPerson('Ned', 'Stark');
console.log(person2);

//TIP 2 cambiarfuncion larga
function imprimArgumentos() {
    console.log( arguments );
}

imprimArgumentos( true, false, 'daenerys', 'Rag' );

//Por esta mas corta
const printArgs = ( id, ...args ) => { //El parametro Rest no permite argumentos depués de él ,solo antes 
    //console.log( {id, args} );
    return args;
}

//El 01 es el primer argumento id
//printArgs(01, true, false, 'daenerys', 'Rag' );

const myArgs = printArgs(01, true, false, 'daenerys', 'Rag' );
console.log({ myArgs })

//Crear constantes de cada argumento
const [ marriage, alive, name, lastName ] = printArgs(01, true, false, 'Tyrion', 'Lanister' );
console.log( {marriage, alive, name, lastName} );

//TIP 3 destructuracion

const tony = {
    name: 'Tony Stark',
    codeName: 'Ironman',
    alive: false,
    //age: 40,
    suits: ['Mark1', 'MarkV', 'Hulkbuster'],
};

const printProps = ({ name, codeName, alive, age = 0, suits }) => { //Si no hay edad en el objeto, por defaul sera 0
    console.log({ name });
    console.log({ name });
    console.log({ name });
}