export { };
//tuple
var tupleMinta: [string, number];
tupleMinta = ["Kis József", 22];
console.log(tupleMinta[0]);

var kerTerFeladat: [number, number];
kerTerFeladat = [22, 30];

//Enum
enum fizetesTipusok {
    juniorFrontend = 450000,
    juniorBackend = 500000,
    juniorFullstack = 600000,
    seniorFrontend = 900000,
    seniorBackend = 1000000,
    seniorFullstack = 1200000,
}
var JozsiFizetes: fizetesTipusok = fizetesTipusok.juniorFrontend;
console.log(JozsiFizetes);
//Interface
interface Dolgozo {
    nev: string;
    eletkor: number;
    aktiv: boolean;
}
var interfaceObjektum: Dolgozo = { nev: "KIss József", eletkor: 22, aktiv: true }
console.log(interfaceObjektum.nev);