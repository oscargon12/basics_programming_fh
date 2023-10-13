"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let herosStrength;
    (function (herosStrength) {
        herosStrength[herosStrength["flash"] = 5] = "flash";
        herosStrength[herosStrength["superman"] = 100] = "superman";
        herosStrength[herosStrength["batman"] = 1] = "batman";
        herosStrength[herosStrength["acuaman"] = 0] = "acuaman";
    })(herosStrength || (herosStrength = {}));
    const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        //throw new error('Auxilio!!!')
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
