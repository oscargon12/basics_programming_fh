let nombre = prompt('Cual es tu nombre');

console.log(nombre)

const selection = confirm('Está seguro de borrar esto?')
console.log(selection);

// alert, prompt y confirm están dentro del objeto window
// El objeto window no se puede ejecutar en node (terminal)
// En node se usa el objeto global: console.log( global )