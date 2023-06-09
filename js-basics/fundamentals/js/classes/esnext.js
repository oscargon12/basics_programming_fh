class Rectangulo {

    #area = 0; //Este valor calculado no se debe cambiar, 

    constructor(base = 0, height = 0){
        this.base = base;
        this.height = height;

        this.#area = base * height;
    }

    calcularArea(){
        console.log(this.#area)
    }
}

const rectangulo1 = new Rectangulo(10, 15);
console.log(rectangulo1);

rectangulo1.calcularArea();

// rectangulo1.#area = 200 //Hacerla privada impide esto

