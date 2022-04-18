let courses={
    matematica:[75,7,4,"matematica"],
    quimica:[98,10,4,"quimica"],
    ingles:[100,7,3,"ingles"],
    lengua:[89,5,2,"lengua"],
    ciencia:[79,8,4,"ciencia"],
    programacion:[80,9,4,"programacion"],
    superviviencia:[90,4,4,"supervivencia"],
    catedra:[40,2,1,"catedra"]
}

const showApproved = ()=>{
    for (let course in courses){
        let asis =courses[course][0];
        let prom= courses[course][1];
        let trab=courses[course][2];
        console.log(`${courses[course][3]}:`)


        if(asis>=90){
            console.log("%c asistio todas las clases","color:green");
            if(prom>=7){
                console.log("%c buen promedio","color:green");
                if(trab>=2){
                    console.log("%c entrego todo","color:green");
                }else{
                    console.log("%c falto por entregar algo",'color:red');
                }
            }else{
                console.log("%c falta por promedio",'color:red');
            }
        }else{
            console.log("%c falta por asistencias",'color:red')
        }
    }
}

showApproved();