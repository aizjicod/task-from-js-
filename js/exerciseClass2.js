class Apps{
    constructor(dl,pt, wh){
        this.download=dl;
        this.puntuation=pt;
        this.weigth=wh;
        this.instale=false;
        this.open=false;
    }

    instaleAndDelete(){
        if(this.instale==false){
            document.write(`you are downloading the app! <br>` );
            this.instale=true;
        }else{
            document.write(`you are deleting the app <br>`);
            this.instale=false;
        }
    }
    openAndClose(){
        if(this.open==false  && this.instale==true){
            document.write(`you are opening the app <br>`);
            this.open=true;
        }else if(this.open==true  && this.instale==true){
            document.write(`you are closing the app <br>`);
            this.open=false;
        }
    }
}

const angryBirds= new Apps ("3M", "3.9", "400MB");

angryBirds.instaleAndDelete();
angryBirds.openAndClose();
angryBirds.openAndClose();
angryBirds.instaleAndDelete();