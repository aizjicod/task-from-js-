//childs properties
let container = document.querySelector(".container");
let h1__antiguo = document.querySelector(".last");
let h2__antiguo2 = document.querySelector(".pinga");
let h1__nuevo = document.createElement("h1");
h1__nuevo.innerHTML = "titulo nuevo";

// container.replaceChild(h1__nuevo,h1__antiguo);
// container.removeChild(h2__antiguo2);

// let resp = container.hasChildNodes();
// console.log(resp)

//fathers properties

// console.log(h1__antiguo.parentElement);
// console.log(h2__antiguo2.parentNode);

//sibling properties

console.log(h2__antiguo2.nextSibling);