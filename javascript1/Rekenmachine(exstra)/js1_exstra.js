function som(optie) 
{


let getal1= document.getElementById("getal1").value;

let getal2= document.getElementById("getal2").value;

console.log("getal1 "+getal1);

console.log("getal2 "+getal2);

document.getElementById("ant").value = getal1;

if (getal1 == "" || getal2 == "")
{
    document.getElementById("ant").innerHTML = "ERROR niet alles ingevuld!";
}
else
{
    let som = getal1 = getal2;
    document.getElementById("ant").value = som;
}
}