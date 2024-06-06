let datum = new Date();
let minuut = datum.getMinutes();
console.log(minuut);
if (minuut >= 0 && minuut <15)
{
    document.write("eerste kwatier");
}
else if(minuut >= 15 && minuut <30)
{
    document.write("Tweede Kwatier");
}
else if(minuut >= 30 && minuut <45)
{
    document.write("derde kwatier");
}
else if(minuut >= 45 && minuut <60);
{
    document.write("vierde kwatier");
}
