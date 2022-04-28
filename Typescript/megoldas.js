"use strict";
exports.__esModule = true;
//--------------------------------1. feladat--------------------------------------
function DiakInfo(nev, csoport, tipus) {
    var szovegTipus = "";
    if (tipus == true) {
        szovegTipus = "Junior Frontend";
    }
    else if (tipus == false) {
        szovegTipus = "Webprogramozó";
    }
    document.write("1. feladat:<br>".concat(nev, " Team0").concat(csoport, " - ").concat(szovegTipus));
}
//--------------------------------2. feladat--------------------------------------
function SzovegesErtekeles(szam) {
    document.write("<br>2. feladat:<br>");
    var Szorgalom = "";
    var Magatartas = "";
    if (szam == 2) {
        Szorgalom = "Hanyag";
        Magatartas = "Rossz";
    }
    else if (szam == 3) {
        Szorgalom = "Változó";
        Magatartas = "Változó";
    }
    else if (szam == 4) {
        Szorgalom = "Jó";
        Magatartas = "Jó";
    }
    else if (szam == 5) {
        Szorgalom = "Példás";
        Magatartas = "Példás";
    }
    return [Szorgalom, Magatartas];
}
//--------------------------------3. feladat--------------------------------------
function HarommalOszthatokSzama(Tomb) {
    document.write("<br>3. feladat:<br>");
    var megszamolHarom = 0;
    //document.write(`${Tomb}`);
    for (var i = 0; i < Tomb.length; i++) {
        if (Tomb[i] % 3 == 0) {
            megszamolHarom = megszamolHarom++;
        }
    }
    return megszamolHarom;
}
