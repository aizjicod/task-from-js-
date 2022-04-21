let div = document.querySelector(".container");
let form = document.querySelector(".form");
let fragment = document.createDocumentFragment();

let llaves = (model,name,price) => {
    Image = `<img src="../img/oldimg.png"> `;
    name = ` <h1>name: ${name} </h1>`
    model = ` <h3>model ${model}</h3> `
    price = `<p>price: <b> $${price}</b></p>  `
    
    
    return [Image, name, model, price];
}


let btn__input = document.querySelector(".input__submit");

for (let i = 0 ; i<20 ;i++){
    randomModel = Math.floor(Math.random() * 1000);
    randomPrice = Math.floor(Math.random() * 10 + 30);
    
    let div = document.createElement("DIV");
    div.classList.add(`flex-item` , `item-${i}`) ;
    div.addEventListener("click", ()=>{
        document.querySelector(".key__value").value = randomModel;
    });
    let llave = llaves(randomModel, `llave ${i  +1}`, randomPrice);
    div.innerHTML =  llave[0] + llave[1] + llave[2] + llave[3] ;
    fragment.appendChild(div);
}
btn__input.addEventListener("click", ()=>{
    btn__input.style.transform = "scale(0.9)"
});
div.appendChild(fragment) ;


