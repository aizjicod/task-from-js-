class Animal{
    constructor(specie, edad, color){
        this.specie=specie;
        this.edad=edad;
        this.color=color;
        this.info= `soy un ${this.specie}, tengo ${this.edad} y soy ${this.color}`;
    }

    //the next part will be a method

    seeInfo(){
        document.write(this.info + "<br>");
    }
}

//hereditary
//this class inherits the parameters "specie, edad, color" and creates a new parameter "raza"
//at the same time it inherits the methods of Animal

class Perro extends Animal{
    constructor(specie, edad, color, raza){
        super(specie, edad, color);
        this.raza=raza;
    }

    ladrar(){
        document.write(` soy un ${this.raza} !WaW! <br>`);
    }
}

const gato= new Animal("gato", 5, "blanco");
const perro= new Perro("pastor aleman", 10, "marron", "snawser");
const pajaro= new Animal("loro", 5, "azul");


gato.seeInfo();
perro.seeInfo(); 
perro.ladrar();
pajaro.seeInfo(); 
