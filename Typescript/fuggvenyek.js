"use strict";
exports.__esModule = true;
//visszatérési érték és paraméter nélküli eljárás
function iloveTypeScript() {
    document.write("Szeretem a TypeScriptet");
}
//visszatérési érték nelküli és paraméteres eljárás
function NegyzetKeruletTeruletEljaras(a) {
    var kerulet = 4 * a;
    var terulet = a * a;
    document.write("<br>A(z) ".concat(a, " oldal\u00FA n\u00E9gyzet ker\u00FClete: ").concat(kerulet));
    document.write("<br>A(z) ".concat(a, " oldal\u00FA n\u00E9gyzet ter\u00FClete: ").concat(terulet));
}
//visszatérési értékes és paraméter nelküli eljárás
function RnadomGeneralo100Fuggveny() {
    return Math.round(Math.random() * 100);
}
//visszatérési értékes és paraméteres eljárás
function NegyzetKeruletFuggveny(a) {
    return 4 * a;
}
//Téglalap kerület és terület
function TeglalapKeruletTerulet(b, c) {
    var tkerulet = 2 * (b + c);
    var tterulet = b * c;
    document.write("<br>A(z) ".concat(b, " \u00E9s ").concat(c, " oldal\u00FA n\u00E9gyzet ker\u00FClete: ").concat(tkerulet));
    document.write("<br>A(z) ".concat(b, " \u00E9s ").concat(c, " oldal\u00FA n\u00E9gyzet ter\u00FClete: ").concat(tterulet));
}
//Páros páratlan
function ParosE(viszgalandoSzam) {
    if (viszgalandoSzam % 2 == 0) {
        return true;
    }
    return false;
}
//Prím generátor tartományban
function IntervallumPrimGenerator(hatar1, hatar2) {
    var also;
    var felso;
    if (hatar1 < hatar2) {
        also = hatar1;
        felso = hatar2;
    }
    else {
        also = hatar2;
        felso = hatar1;
    }
    var probalkozasokSzama = 0;
    var sikeresGeneralas = false;
    var generaltSzam;
    do {
        generaltSzam = Math.round(Math.random() * (felso - also) + also);
        probalkozasokSzama++;
        var oszto = 0;
        for (var i = 1; i < generaltSzam; i++) {
            if (generaltSzam % i == 0) {
                oszto++;
            }
            if (oszto == 2) {
                sikeresGeneralas = true;
            }
        }
    } while (sikeresGeneralas == false && probalkozasokSzama < 100);
    return generaltSzam;
}
//Téglalap kerület terület TUPLE-val
//Tömbgenerátor
function TombGenerator(meret, hatar1, hatar2) {
    var generaltTomb = [];
    for (var i = 0; i < meret; i++) {
        generaltTomb.push(RandomEgesz(Kisebb(hatar1, hatar2), Nagyobb(hatar1, hatar2)));
    }
    return generaltTomb;
}
var ujTomb = TombGenerator(5, 1, 20);
document.write(ujTomb, string[]);
function TombKiiro(kiirandoTomb) {
    for (var i = 0; i < kiirandoTomb.length; i++) {
        document.write("<br>A t\u00F6mb ".concat(i, ". indexedik elem\u00E9nek \u00E9rt\u00E9ke:").concat(kiirandoTomb[i]));
    }
}
TombKiiro(ujTomb);
function Kisebb(szam1, szam2) {
    if (szam1 < szam2) {
        return szam1;
    }
    else {
        return szam2;
    }
}
function Nagyobb(szam1, szam2) {
    if (szam1 > szam2) {
        return szam1;
    }
    else {
        return szam2;
    }
}
function RandomEgesz(alsoHatar, felsoHatar) {
    var generaltSzam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
    return generaltSzam;
}
