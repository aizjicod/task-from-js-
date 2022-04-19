let input = document.querySelector(".input");
let input__submit = document.querySelector(".input__submit");
input.type="number";
input.value="123"
//this part will be only for accept
input.type="file";
input.accept="image/png"

input.type="text";
input.minLength="4"
input__submit.setAttribute("form", "form")
input.placeholder="minimo de 4 caracteres"
input.required="true";
// document.write(input.value);