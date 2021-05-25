import { Producto, calculaISV } from './06-desectructuracion-funcion';

//IMPORTACIONES Y EXPORTACIONES

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 250
    }
];

const [total, isv] = calculaISV( carritoCompras );


console.log('Total: ', total);
console.log('ISV: ', isv);