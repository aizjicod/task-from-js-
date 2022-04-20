let div = document.querySelector(".container");
let form = document.querySelector(".form");
let fragment = document.createDocumentFragment();

let llaves = (model,name,price) => {
    Image = `<img src="../img/oldimg.png"> <br>`;
    name = ` name: <h1>${name} </h1> <br>`
    model = ` model <h3>${model}</h3> <br>`
    price = `price: <p><b> $${price}</b></p> <br> `
    
    
    return [Image, name, model, price];
}



for (let i = 0 ; i<20 ;i++){
    randomModel = Math.floor(Math.random() * 100);
    randomPrice = Math.floor(Math.random() * 10 + 30);
    

    let div = document.createElement("DIV");
    div.classList.add(`flex-item` , `item-${i}`) ;
    let llave = llaves(randomModel, `llave ${i +1}`, randomPrice);
    div.innerHTML =  llave[0] + llave[1] + llave[2] + llave[3] ;
    fragment.appendChild(div);
}

div.appendChild(fragment) ;
let btn__input = document.createElement("INPUT");
btn__input.type = "submit";
btn__input.value = "buy";
btn__input.name = "data";
btn__input.classList.add("input__submit")

form.appendChild(btn__input)
