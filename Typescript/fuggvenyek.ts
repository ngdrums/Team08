export { };
//visszatérési érték és paraméter nélküli eljárás
function iloveTypeScript(): void {
    document.write("Szeretem a TypeScriptet");
}
//visszatérési érték nelküli és paraméteres eljárás
function NegyzetKeruletTeruletEljaras(a: number): void {
    let kerulet = 4 * a;
    let terulet = a * a;
    document.write(`<br>A(z) ${a} oldalú négyzet kerülete: ${kerulet}`);
    document.write(`<br>A(z) ${a} oldalú négyzet területe: ${terulet}`);
}
//visszatérési értékes és paraméter nelküli eljárás
function RnadomGeneralo100Fuggveny(): number {
    return Math.round(Math.random() * 100);

}
//visszatérési értékes és paraméteres eljárás
function NegyzetKeruletFuggveny(a: number): number {
    return 4 * a;
}
//Téglalap kerület és terület
function TeglalapKeruletTerulet(b: number, c: number): void {
    let tkerulet: number = 2 * (b + c);
    let tterulet: number = b * c;
    document.write(`<br>A(z) ${b} és ${c} oldalú négyzet kerülete: ${tkerulet}`);
    document.write(`<br>A(z) ${b} és ${c} oldalú négyzet területe: ${tterulet}`);
}

//Páros páratlan
function ParosE(viszgalandoSzam: number): boolean {
    if (viszgalandoSzam % 2 == 0) {
        return true;
    }
    return false;
}

//Prím generátor tartományban
function IntervallumPrimGenerator(hatar1: number, hatar2: number): number {
    let also: number;
    let felso: number;
    if (hatar1 < hatar2) {
        also = hatar1;
        felso = hatar2;
    }
    else {
        also = hatar2;
        felso = hatar1;
    }
    let probalkozasokSzama = 0;
    let sikeresGeneralas = false;
    let generaltSzam;
    do {
        generaltSzam = Math.round(Math.random() * (felso - also) + also);
        probalkozasokSzama++;
        let oszto = 0;
        for (let i = 1; i < generaltSzam; i++) {
            if (generaltSzam % i == 0) {
                oszto++;
            }
            if (oszto == 2) {
                sikeresGeneralas = true;
            }
        }
    } while (sikeresGeneralas == false && probalkozasokSzama < 100)
    return generaltSzam;
}


//Téglalap kerület terület TUPLE-val

//Tömbgenerátor
/*function TombGenerator(meret: number, hatar1: number, hatar2: number): Array<number> {
    let generaltTomb = [];
    for (let i = 0; i < meret; i++) {
        generaltTomb.push(RandomEgesz(Kisebb(hatar1, hatar2), Nagyobb(hatar1, hatar2)));
    }
    return generaltTomb;
}
let ujTomb: number[] = TombGenerator(5, 1, 20);

document.write(ujTomb: string[]);

function TombKiiro(kiirandoTomb) {
    for (let i = 0; i < kiirandoTomb.length; i++) {
        document.write(`<br>A tömb ${i}. indexedik elemének értéke:${kiirandoTomb[i]}`);
    }
}
TombKiiro(ujTomb);

function Kisebb(szam1: number, szam2: number) {
    if (szam1 < szam2) {
        return szam1;
    }
    else {
        return szam2;
    }
}
function Nagyobb(szam1: number, szam2: number) {
    if (szam1 > szam2) {
        return szam1;
    }
    else {
        return szam2;
    }
}
function RandomEgesz(alsoHatar: number, felsoHatar: number) {
    let generaltSzam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
    return generaltSzam;
}
*/