/* Aquí tienes un reto en JavaScript que te permite aplicar clases en un ejemplo práctico. El desafío consiste en crear un sistema básico de gestión de tareas.

1. Crea una clase Task que tenga las siguientes propiedades:

id: un identificador único para la tarea.
title: el título o nombre de la tarea.
completed: un valor booleano que indica si la tarea está completada o no.

2. Crea una clase TaskManager que tenga las siguientes propiedades:

tasks: un array que almacena todas las tareas.
Y los siguientes métodos:

addTask: recibe un título como parámetro y crea una nueva tarea con un id único, establece el título proporcionado y establece completed como false. Agrega la tarea al array tasks.
completeTask: recibe un id como parámetro y busca la tarea correspondiente en el array tasks. Si la encuentra, cambia el valor de completed a true. Si no la encuentra, muestra un mensaje de error.
renderTasks: muestra en la consola todas las tareas y su estado (completed).

3. Crea una instancia de TaskManager llamada taskManager.

4. Agrega algunas tareas utilizando el método addTask.

5. Marca algunas tareas como completadas utilizando el método completeTask.

6. Finalmente, llama al método renderTasks para mostrar todas las tareas y su estado en la consola. */


class Task{

    constructor(id, title = 'no title'){
        this.id = id;
        this.title = title;
        this.complete = false;
    }
}

class TaskManager {

    constructor(){
        this.tasks = [];
    }    

    addTask(title){
        const id = this.generateId();
        const NewTask = new Task(id, title);
        this.tasks.push(NewTask);
        console.log(tarea1);
    }

    generateId(){
        return Date.now().toString();
    }
}

const tarea1 = new TaskManager();
tarea1.addTask('mi titulo');

const tarea2 = new TaskManager();
tarea1.addTask('Otra tarea');

const tarea3 = new TaskManager();
tarea1.addTask('Tarea 3');