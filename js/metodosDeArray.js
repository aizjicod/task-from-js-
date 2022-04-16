// in here there will be some practice with some methods of arrays 

let cadenaArray=["pedro", "karen", "mariaAlejandra"];
let resultado;
document.write(cadenaArray + "<br> <br>")

//this methods transform an existing array

// resultado= cadenaArray.pop();
// resultado= cadenaArray.shift();
// resultado= cadenaArray.push("hans", "isa");
// resultado= cadenaArray.unshift("hans", "isa");
// resultado= cadenaArray.sort();
// resultado= cadenaArray.reverse();
// resultado= cadenaArray.splice(1, 2, "alcachofa");

//this methods will create a new array or a new string

// resultado= cadenaArray.join(" / ");
// resultado= cadenaArray.slice(1);
// resultado= cadenaArray.slice(1,-1);


//methods of repetitions

// resultado= cadenaArray.forEach( nombres=>{
//     document.write(nombres + "<br>")
// });

//this methods works the exact same way as forEach only that it can create a new array with the values that correspond to the carasteristic specified before
resultado=cadenaArray.filter(nombres => nombres.length);


// document.write(resultado + "<br>");
// document.write( "cadena final  <b style= 'color: red'>"+cadenaArray + " </b><br> <br>")