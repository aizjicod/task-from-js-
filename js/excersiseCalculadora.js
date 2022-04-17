class Calculadora{
    constructor(){

    }
    suma(){
        let a=+prompt("ingrese un numero");
        let b=+prompt("ingrese un numero");
        return a+b;
    }
    
    rest(){
        let a=+prompt("ingrese un numero");
        let b=+prompt("ingrese un numero");
        return a-b;
    }
    
    div(){
        let a=+prompt("ingrese un numero");
        let b=+prompt("ingrese un numero");
        return a/b;
    }
    
    mult(){
        let a=+prompt("ingrese un numero");
        let b=+prompt("ingrese un numero");
        return a*b;
    }
    
    potencia(){
        let a=+prompt("ingrese el numero potenciado");
        let b=+prompt("ingrese el numero potencia");
        return a**b;
    }
    
    raizCuadrada(){
        let a=+prompt("ingrese un numero");
        return Math.sqrt(a);
    }
    
    raizCubica(){
        let a=+prompt("ingrese un numero");
        return Math.cbrt(a);
    }


}

const calculadora = new Calculadora();


alert("bienvenido a la calculadora que desea hacer?");
let desicion=prompt("suma:1 resta:2 division:3 multiplicacion:4 potencia:5 raiz cuadrada:6 raiz cubica:7");


switch(desicion){
    case "1":
        alert(calculadora.suma());
    break
    case "2":
        alert(calculadora.rest());
    break
    case "3":
        alert(calculadora.div());
    break
    case "4":
        alert(calculadora.mult());
    break
    case "5":
        alert(calculadora.potencia());
    break
    case "6":
        alert(calculadora.raizCuadrada());
    break
    case "7":
        alert(calculadora.raizCubica());
    break
    default:
        alert("no ha elegido ninguna de las opcoines disponibles.")
    break
}
  
