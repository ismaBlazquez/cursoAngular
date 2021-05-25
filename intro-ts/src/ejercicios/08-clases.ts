//CLASES BASICAS

class PersonaNormal {
    constructor (
        public nombre: string,
        public direccion: string
    ) {}
}

class Heroe extends PersonaNormal {
    // alterEgo: string;
    // edad: number;
    // nombreReal: string;

    // constructor( alterEgo: string) {
    //     this.alterEgo = alterEgo;
    // }

    constructor( 
        public alterEgo: string, 
        public edad: number, 
        public nombreReal: string,
        direccion: string
    ) {
        super(nombreReal, direccion);
    };
}

const ironman = new Heroe('Ironman', 45, 'Tony', 'New York, USA');

console.log(ironman);