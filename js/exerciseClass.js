class cellphones {
    constructor(color, peso, pantalla, camara, ram){
        this.color= color;
        this.peso= peso;
        this.pantalla= pantalla;
        this.camara= camara;
        this.ram= ram;
        this.encendido=false;
    }
    
    cellInfo(){
        document.write( `
        Color: <b>${this.color}</b> <br>
        Peso: <b>${this.peso}</b> <br>
        Pantalla: <b>${this.pantalla}</b> <br>
        Ram: <b>${this.ram}</b> <br>
        Camara: <b>${this.camara}</b> <br>`);
    }

    botonEncendido(){
        if(this.encendido==false){
            document.write("se esta encendiendo. <br>");
            this.encendido=true;
        }else{
            document.write("se esta apagando. <br> ");
            this.encendido=false;
        }


    }
    reiniciar(){
        if(this.encendido==true){
            document.write("this cellphone is restarting! <br>");
        }
        
    }
    
    photos(){
        document.write("this cellphone is taking photos! <br>");
    }
    recording(){
        document.write("this cellphone is recording! <br>");
    }
}


//alta gama

class CellPhoneAltaGama extends cellphones{
    constructor(color, peso, pantalla, camara,ct, ram ){
        super(color, peso, pantalla, camara,ram);
        this.camara2=ct;
    }

    slowcamara(){
        document.write(`this cellphone is recording really slow with a definition of <b>${this.camara}</b> and <b>${this.camara2}</b> <br>`);
    }

    reconocimientoFacial(){
        document.write("this cellphone has a facial recognition <br>");
    }

    altaGamaInfo(){
        return this.cellInfo() + document.write(`Back camera: <b>${this.camara2}</b><br><br>`);
    }
}

const iphone= new cellphones ("morado", "70gr", "fullHD", "16px", "4GB");

const xiaomi= new cellphones ("black", "100gr", "420", "20px", "2GB");

const infinix= new cellphones ("violet", "50gr", "720", "25px", "6GB");

const iphone200= new CellPhoneAltaGama ("green","150gr","4k", "60px", "70px","12GB");

const infinixNote= new CellPhoneAltaGama ("red","120gr","4k", "70px","80px",  "16GB");



