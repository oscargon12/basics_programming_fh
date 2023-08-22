import { Todo } from "../todos/models/todo.model";

const filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Pieded del alma'),
        new Todo('Piedra del  unfinito'),
        new Todo('Piedra del  unfinito'),
    ],
    filter: filters.All
}

//Inicializa si ya tengo
const initStore = () => {
    console.log(state);
    console.log('InitStore');
}

export default {
    initStore,
}