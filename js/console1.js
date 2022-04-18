//this function clears the console 
console.clear();
console.groupCollapsed("register functions")
//this function creates an error if the afirmation inside of it is wrong
console.assert(4>6);//not standart
//this function creates an eror 
console.error("que paso putita t confundiste");
//creates a log type message, it should be diferents color on diferents websites
console.info("esta es una informacion :)");
//creates a table with an object or an array, it can work with only one data the rows and could work with a second parameter (columns).
console.table([456,45645,242,4,44,67,56,7,686,78,46,35,25,2537]);
//creates a warning
console.warn("you are doing great but be carefull with...");
console.groupEnd();

console.groupCollapsed("counting functions");
console.count();
console.count();
console.count();
console.countReset();
console.count();
console.groupEnd()