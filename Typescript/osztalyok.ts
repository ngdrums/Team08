class Auto {
    marka: string;
}
const ujAuto = new Auto(); //osztály példányosítása ujAuto néven
ujAuto.marka = "TESLA"; //Példányosított osztály márka tulajdonságának beállítására "TESLA" értékre

class Szemely {
    //mezo
    public nev: string;
    //konstruktor egy paraméterrel
    public constructor(nevErtek: string) {
        this.nev = nevErtek;
    }

    //Metodus
    public dolgozik() {
        console.log(this.nev + "munkába megy...");

    }
}
const ujEmber = new Szemely("Józsi");
console.log(ujEmber.nev)
ujEmber.dolgozik();
class Dolgozo extends Szemely {
    //korábban létrehozott metódust felülírok
    public dolgozik() {
        console.log(this.nev + "frontendes munkahelyre megy...");
    }
}
const ujDolgozo = new Dolgozo("Józsi");
console.log(ujEmber.nev)
ujEmber.dolgozik();
