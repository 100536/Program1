let Leeftijd=window.prompt("Hoe oud ben je?")

if (Leeftijd >= 0 && Leeftijd <=1)
{
    document.write("Baby");
}
else if(Leeftijd >= 1 && Leeftijd <=3)
{
    document.write("Peuter");
}
else if(Leeftijd >= 3 && Leeftijd <=6)
{
    document.write("Kleuter");
} 
else if(Leeftijd >= 6 && Leeftijd <=12)
{
    document.write("Kind");
}
else if(Leeftijd >= 12 && Leeftijd <=16)
{
    document.write("Puber");
}
else if(Leeftijd >= 16 && Leeftijd <=21)
{
    document.write("adolescent");
}
else if(Leeftijd >= 21 && Leeftijd <=110)
{
    document.write("Volwassene");
}
else if(Leeftijd <= 0 || Leeftijd >110)
{
    document.write("ERROR")
}