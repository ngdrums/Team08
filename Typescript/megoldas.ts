export { };
//--------------------------------1. feladat--------------------------------------
function DiakInfo(nev: string, csoport: number, tipus: boolean) {
    let szovegTipus: string = "";
    if (tipus == true) {
        szovegTipus = "Junior Frontend";
    } else if (tipus == false) {
        szovegTipus = "Webprogramozó";
    }
    document.write(`1. feladat:<br>${nev} Team0${csoport} - ${szovegTipus}`);
}
//--------------------------------2. feladat--------------------------------------
function SzovegesErtekeles(szam: number): [string, string] {
    document.write(`<br>2. feladat:<br>`);
    let Szorgalom: string = "";
    let Magatartas: string = "";
    if (szam == 2) {
        Szorgalom = "Hanyag";
        Magatartas = "Rossz";
    } else if (szam == 3) {
        Szorgalom = "Változó";
        Magatartas = "Változó";
    } else if (szam == 4) {
        Szorgalom = "Jó";
        Magatartas = "Jó";
    } else if (szam == 5) {
        Szorgalom = "Példás";
        Magatartas = "Példás";
    }
    return [Szorgalom, Magatartas];
}
//--------------------------------3. feladat--------------------------------------
function HarommalOszthatokSzama(Tomb: Array<number>): number {
    document.write(`<br>3. feladat:<br>`);
    let megszamolHarom: number = 0;
    //document.write(`${Tomb}`);
    for (let i: number = 0; i < Tomb.length; i++) {
        if (Tomb[i] % 3 == 0) {
            megszamolHarom = megszamolHarom++;
        }
    }
    return megszamolHarom;
}