//visszatérési érték és paraméter nélküli eljárás
function iloveTypeScript() {
    document.write("Szeretem a TypeScriptet");
}
//visszatérési érték nelküli és paraméteres eljárás
function NegyzetKeruletTeruletEljaras(a) {
    var kerulet = 4 * a;
    var terulet = a * a;
    document.write("<br>A(z) ".concat(a, " oldal\u00FA n\u00E9gyzet ker\u00FCete: ").concat(kerulet));
    document.write("<br>A(z) ".concat(a, " oldal\u00FA n\u00E9gyzet ter\u00FCete: ").concat(terulet));
}
//visszatérési értékes és paraméter nelküli eljárás
function RnadomGeneralo100Fuggveny() {
    return Math.round(Math.random() * 100);
}
//visszatérési értékes és paraméteres eljárás
function NegyzetKeruletFuggveny(a) {
    return 4 * a;
}
