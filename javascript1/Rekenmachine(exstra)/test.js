function Reken(optie) {
    getal1 = parseFloat(document.reken.getal1.value);
    getal2 = parseFloat(document.reken.getal2.value);
    if (isNaN(getal1)) getal1 = 0;
    if (isNaN(getal2)) getal2 = 0;

    if (optie == "+") uitkomst = getal1 + getal2;
    if (optie == "-") uitkomst = getal1 - getal2;
    if (optie == "x") uitkomst = getal1 * getal2;
    if (optie == "/") uitkomst = getal1 / getal2;
    document.reken.uitkomst.value = uitkomst;
    document.reken.getal1.focus();}

function Schonen() {
   document.reken.reset();
   document.reken.getal1.focus();}