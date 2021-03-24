class comprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }

    mostrar(){
        super.mostrar();
        console.log(`y la cantidad es de ${this.cantidad}`);
    }

    hola(){
        return `Hola`;
    }
}