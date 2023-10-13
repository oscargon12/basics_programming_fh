"use strict";
(() => {
    const hero = 'flash';
    function returnName() {
        return hero;
    }
    const turnOnLights = () => {
        return 'Activar batiseñal';
    };
    console.log(typeof turnOnLights);
})();
