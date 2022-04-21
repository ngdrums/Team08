//visszatérési érték és paraméter nélküli eljárás
function iloveTypeScript(): void {
    document.write("Szeretem a TypeScriptet");
}
//visszatérési érték nelküli és paraméteres eljárás
function NegyzetKeruletTeruletEljaras(a: number): void {
    let kerulet = 4 * a;
    let terulet = a * a;
    document.write(`<br>A(z) ${a} oldalú négyzet kerüete: ${kerulet}`);
    document.write(`<br>A(z) ${a} oldalú négyzet terüete: ${terulet}`);
}
//visszatérési értékes és paraméter nelküli eljárás
function RnadomGeneralo100Fuggveny(): number {
    return Math.round(Math.random() * 100);

}
//visszatérési értékes és paraméteres eljárás
function NegyzetKeruletFuggveny(a: number): number {
    return 4 * a;
}