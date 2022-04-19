//we can create any style by doing this code 
let h1 = document.getElementById("style");
h1.style.color="#505";
h1.style.fontSize="5em";
h1.style.fontFamily="monospace";

//classes

h1.classList.add("giga", "remomible","rojo");
h1.classList.remove("remomible");
document.write(h1.classList.item(1) + "<br>");
//with the next method it adds, o removes a class only if it is not on it or if it is on it, respectivible.
h1.classList.toggle("pinga");
let valor = h1.classList.contains("pinga");
document.write(valor + "<br>");
h1.classList.replace("rojo","azul");