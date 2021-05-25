//DESESCTRUCTURACION DE ARGUMENTOS

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'iPad Air',
    precio: 350
}


export function calculaISV( productos: Producto[]){

    let total = 0;

    // productos.forEach( (producto) => {
    //     total += producto.precio;
    // })

    productos.forEach( ( {precio} ) => {
        total += precio;
    })

    return [total, total * 0.15];
}

const articulos = [ telefono, tableta];

// SI DEVOLVIERA SOLO UN NUMERO
// const isv = calculaISV(articulos);
// console.log('ISV:', isv);


//DEVOLVIENDO UN ARRAY
// const [total, isv] = calculaISV(articulos);

// console.log('Total: ', total);
// console.log('ISV: ', isv);
