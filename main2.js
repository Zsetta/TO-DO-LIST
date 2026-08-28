class Personaje{
    static #posicion = "Sir";
    constructor(nombre){
        this.nombre = `${Personaje.#posicion} ${nombre}`;
    }
    set cambiarNombre(newName)
    {
        this.nombre = `${Personaje.#posicion} ${newName}`;
    }
    get obtenerNombre()
    {
        return this.nombre;
    }
    static decirPosicion(){
        console.log(`Soy un ${Personaje.#posicion}`);
    }
}

class Heroe extends Personaje{
    #BONDAD =       0b10000000;
    #INTELIGENCIA = 0b01000000;
    #FUERZA =       0b00100000;
    #MAGIA =        0b00010000;
    #BACULO =       0b00001000;
    #ESCUDO =       0b00000100;
    #ESPADA =       0b00000010;
    #VIDA =         0b00000001;
    constructor(nombre,estadisticas)        //caballero(espada,escudo,fuerza) = 1010011   mago(baculo,inteligencia,magia) = 01011001    
    {
        super(nombre);
        this.estadisticas = this.#crearEstadistica(estadisticas);
    }
    #crearEstadistica(estadisticas)
    {
        if(estadisticas == 1)
        {
            return this.#VIDA | this.#ESPADA | this.#ESCUDO | this.#FUERZA ;
        }
        else
        {
            return this.#VIDA | this.#MAGIA | this.#INTELIGENCIA | this.#BACULO;
        }
    }
    set agregarBondad(a)
    {
        this.estadisticas |= this.#BONDAD;
    }
    get info()
    {
        return this.estadisticas.toString(2).padStart(8,'0')
    }
}

Personaje.decirPosicion();
const personaje = new Personaje("Jean");
personaje.cambiarNombre = "Oliva";
console.log(personaje.obtenerNombre);
//ELIJO A UN CABALLERO
let personajes = [];

let eleccion1 = "caballero";
let eleccion2 = "mago"
if(eleccion1 == "caballero")
{
    const caballero = new Heroe("Jean",1);
    caballero.agregarBondad = true;
    console.log(caballero.info);
    personajes.push(caballero);
}
if(eleccion2 == "mago")
{
    const mago = new Heroe("Brandon",0);
    mago.agregarBondad = true;
    console.log(mago.info);
    personajes.push(mago);
}
console.log(personajes);
let nombres = (personajes.filter(a => a.nombre.length > 7)).map(a=>a.nombre).sort();
console.log(nombres);
let apodo = [];
for(nom of nombres)
{
    apodo.push(nom.substring(4));
}
console.log(apodo);