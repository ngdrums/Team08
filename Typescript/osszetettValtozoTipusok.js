//tuple
var tupleMinta;
tupleMinta = ["Kis József", 22];
console.log(tupleMinta[0]);
var kerTerFeladat;
kerTerFeladat = [22, 30];
//Enum
var fizetesTipusok;
(function (fizetesTipusok) {
    fizetesTipusok[fizetesTipusok["juniorFrontend"] = 450000] = "juniorFrontend";
    fizetesTipusok[fizetesTipusok["juniorBackend"] = 500000] = "juniorBackend";
    fizetesTipusok[fizetesTipusok["juniorFullstack"] = 600000] = "juniorFullstack";
    fizetesTipusok[fizetesTipusok["seniorFrontend"] = 900000] = "seniorFrontend";
    fizetesTipusok[fizetesTipusok["seniorBackend"] = 1000000] = "seniorBackend";
    fizetesTipusok[fizetesTipusok["seniorFullstack"] = 1200000] = "seniorFullstack";
})(fizetesTipusok || (fizetesTipusok = {}));
var JozsiFizetes = fizetesTipusok.juniorFrontend;
console.log(JozsiFizetes);
var interfaceObjektum = { nev: "KIss József", eletkor: 22, aktiv: true };
console.log(interfaceObjektum.nev);
