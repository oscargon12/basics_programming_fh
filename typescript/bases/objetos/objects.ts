(()=> {

    //**Objetos literales */

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

    console.log( flash.getName ? flash.getName() : 'getName is undefinend' )
    //getName podría ser undefined, ya que la propiedad getName es opcional
    //verifica si getName existe antes de intentar llamarlo. Si getName es undefined, imprime un mensaje indicándolo.

})()