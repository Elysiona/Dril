var udalosti = ["Vynález knihtisku", "První vědecký časopis", "Vznik Encyklopedie Brittanica", "Děrné štítky", "Vynalezen telefon", "První knihovnická škola"];
var letopocty = [1453, 1665, 1768, 1801, 1876, 1887];
var nahoda = Math.random();
var poradi = 0;
alert(nahoda);
if (nahoda <= 0.2) {
poradi = 0;
} else if (nahoda > 0.2 && nahoda <= 0.4) {
poradi = 1;
} else if (nahoda > 0.4 && nahoda <= 0.6) {
poradi = 2;
} else if (nahoda > 0.6 && nahoda <= 0.8) {
poradi = 3;
} else if (nahoda > 0.8 && nahoda < 1) {
poradi = 4;
};
alert(poradi);
var odpoved = prompt("Ve kterém roce se stalo: " + udalosti[poradi] + "?");
if (odpoved == letopocty[poradi]) {
alert("Odpověď je správně.");
} else {
alert("Odpověď je špatně, " + udalosti[poradi] + " se stalo roku " + letopocty[poradi]);
}; 
