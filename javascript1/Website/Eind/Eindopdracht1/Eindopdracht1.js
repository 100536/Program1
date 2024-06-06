function controleer() {

    let naam = document.getElementById("naam").value;
    
    let leeftijd = document.getElementById("leeftijd").value;
    

    let aantal = 0;

    
    let symp1 = document.getElementById("symptoon1").value;
    
    let symp2 = document.getElementById("symptoon2").value;
    
    let symp3 = document.getElementById("symptoon3").value;

    
    if (naam == "") {
    
        alert("ERROR: Geen invoer op de naam!")
    
    }
    
     
    
    if (leeftijd == "") {
    
        alert("ERROR: Geen invoer op de leeftijd!")
    
    }
    
    if (symp1 == "") {
    
        alert("ERROR: Geen invoer op het eerste symptoon!")
    
    }
    
    
    if (symp1 == "Bloed neus"  || symp1 == "hoofdpijn" || symp1 == "misselijk" || symp1 == "rode ogen" || symp1 == "verstopte oren" || symp1 == "koorts") {

        aantal++;
    
    }
    
    if (symp2 == "") {
    
        alert("ERROR: Geen invoer op het tweede symptoon!")
    
    }
    
    if (symp2 == "Bloed neus" || symp2 == "hoofdpijn" || symp2 == "misselijk" || symp2 == "rode ogen" || symp2 == "verstopte oren" || symp2 == "koorts") {
    
        aantal++;
    
    }
    
    if (symp3 == "") {
    
        alert("ERROR: Geen invoer op het derde symptoon!")
    
    }
    
    if (symp3 == "Bloed neus" || symp3 == "hoofdpijn" || symp3 == "misselijk" || symp3 == "rode ogen" || symp3 == "verstopte oren" || symp3 == "koorts") {
    
        aantal++;
    
    }
    
    document.getElementById("tekst").innerHTML = "U heeft " + aantal + " griep symptonen!";

    console.log("aantal: ", aantal);
    
    console.log("leeftijd: ", leeftijd);
    
    console.log("symp1: ", symp1);
    
    console.log("symp2: ", symp2);
    
    console.log("symp3: ", symp3);
    
     
    
    if (leeftijd >= 18 && aantal >= 2) {
    
        document.getElementById("tekst2").innerHTML = "U bent Ziek";
    
    }
    
        else if (leeftijd >= 18 && aantal <= 2){
    
            document.getElementById("tekst2").innerHTML = "U bent niet ziek";
    
        }
    
     
    
    if (leeftijd < 18 && aantal >= 3) {
    
        document.getElementById("tekst2").innerHTML = "U bent ziek";
    
    }
    
        else if (leeftijd < 18 && aantal <= 3) {
    
            document.getElementById("tekst2").innerHTML = "U bent Niet Ziek";
    
        }

    }    