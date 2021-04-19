function sumar(a: number, b:number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(n1: number, n2?: number, base:number = 2): number {
    return n1 * base;
}

const resultadoSuma = sumar(10, 5);
const resultadoMulti = multiplicar(5, 0, 10); //= 50
//multiplicar(5) = 10
//multiplicar(5, 10) = 10

console.log("Resultado suma: " + resultadoSuma);
console.log("Resultado multiplicacion: " + resultadoMulti);

interface Personaje1 {
    nombre: string;
    pv: number;
    mostrarHP: () => void;
}

function curar (personaje: Personaje1, curarX: number): void {
    personaje.pv += curarX;
}

const nuevoPersonaje: Personaje1 = {
    nombre: 'Ismael',
    pv: 50,
    mostrarHP() {
        console.log ('Puntos de vida:', this.pv);
    }
}

curar( nuevoPersonaje, 20);
nuevoPersonaje.mostrarHP();
