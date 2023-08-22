import html from './app.html?raw'; //Importación en crudo

/**
 * @param {String} elementId
 */

export const App = ( elementId ) => {

    //Cuando la funcion se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
    })();

}