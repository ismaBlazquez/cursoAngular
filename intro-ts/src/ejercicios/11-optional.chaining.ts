// ENCADENAMIENTO OPCIONAL

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Iván',
    hijos: ['Natalia', 'Gabriel']
}

//Si hijos tiene valor, hace el .length
function imprimeHijos (pasajero: Pasajero): void {
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log( cuantosHijos );
}

//va a imprimir 2
imprimeHijos(pasajero2);
//va a imprimir 0
imprimeHijos(pasajero1);