let title = document.querySelector(".title");
//this are ways to create some text inside an element
let resultado = title.textContent;
let resultado2 = title.innerHTML;
let resultado3 = title.outerHTML;

let div = document.querySelector(".container");
let ol = document.createElement("ol");
let fragment = document.createDocumentFragment();

for (let i = 0; i<15; i++){
    let textList = document.createTextNode(`${i + 1} item`)
    let list = document.createElement("LI");
    list.appendChild(textList);
    fragment.appendChild(list);
}
ol.appendChild(fragment);
div.appendChild(ol);

let primerHijo = div.children;

console.log(primerHijo)
