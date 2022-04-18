const getName = (course)=>{
    let courses={
        matematica:["giovani","hans", "pedro", "sofia"],
        lengua:["dondoncarlos","hans", "pedro", "karen", "sofia", "doncarlos"],
        ingles:["dondoncarlos","hans",  "karen", "sofia", "doncarlos", "vicvaporub"],
        quimica:["jose","karen", "pedro","sofia"]
    }
    if(courses[course]!==undefined){
        return [course,courses[course]];
    }else{
        return courses;
    }
}


const showInformation=(course)=>{
    // let information=getName(prompt("indique nombre de la materia"));
    let information=getName(course);

    if (information!==false){
        let profesor= information[1][0];
        let alumns= information[1].slice(1,);
        document.write(`el profesor de <b>${information[0]}</b> 
        es: <b style= 'font-size:1.5em ;color:red'>${profesor}</b> <br>
        estos son los alumnos inscritos en la materia: <b style= 'color:blue'> ${alumns.join(" ")} </b><br><br><br>`);
    }else{
        document.write("su materia <b>no esta disponible </b> o <b>no existe </b>");
    }
}


const cantidadDeClases = (alumn)=>{
    let count=0;
    let clases=[];
    let courses=getName();
    for (let alumns in courses){
        if(courses[alumns].includes(alumn)){
            count++;
            clases.push(alumns);
        }
    }
    return document.write(`el alumno ${alumn}, asiste ${count} clases: 
    <b style='color:green; font-size:1.2em'> ${clases.join("__")} </b> <br> <br>`);
}

showInformation("matematica");
showInformation("lengua");
showInformation("ingles");

cantidadDeClases("sofia");

showInformation("quimica");

