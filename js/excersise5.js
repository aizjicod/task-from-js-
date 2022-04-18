
let courses={
    matematica:["giovani","hans", "pedro", "sofia","hans", "pedro", "sofia","hans", "pedro", "sofia","hans", "pedro", "sofia","hans", "pedro", "sofia","hans", "pedro", "sofia"],
    lengua:["dondoncarlos","hans", "pedro", "karen", "sofia", "doncarlos"],
    ingles:["dondoncarlos","hans",  "karen", "sofia", "doncarlos", "vicvaporub"],
    quimica:["jose","karen", "pedro","sofia"]
}


const inscription = (name, course)=>{
    let alumns=courses[course];
    if (alumns.length>=21 || alumns.includes(name)){
        document.write( ` <b>${name} </b>ya ha sido inscrito a ${course} o ya se ha alcanzado la capacidad maxima de alumnos <b>${alumns.length} </b><br><br>`)
    }else{
        document.write(` felicidades <b> ${name} </b> usted ha sido inscrita ha <b>${course} </b> <br><br>`)
        courses[course].push(name);
    }
    document.write(courses[course]+ "<br> <br>");
}

inscription("yubirisaida","matematica");
inscription("yubirisaiddawda","matematica");
inscription("yubirisaida","quimica");
inscription("yubirisaida","quimica");