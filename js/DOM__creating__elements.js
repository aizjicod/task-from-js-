let title = document.querySelector(".title");
//this are ways to create some text inside an element
let resultado = title.textContent;
let resultado2 = title.innerHTML;
let resultado3 = title.outerHTML;

let div = document.querySelector(".container");
let list = document.createElement("LI");

list.textContent = "primer item";
div.appendChild(list);

