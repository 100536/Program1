"use strict";
function cotroleer()
{
    let waarde = document.getElementById("imvoer").value;
    if (waarde == "")
    {
        document.getElementById("uitvoer").innerHTML = "Geen Ge";
    }
    else
    {
        document.getElementById("uitvoeren").innerHTML = "Getal,  " + waarde;
    }
}