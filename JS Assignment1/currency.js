var INR, usd, eur, Yen, Pound;
function init()
{
    INR = document.getElementById("INR");
    usd = document.getElementById("USD");
    eur = document.getElementById("EUR");
    Yen = document.getElementById("Yen");
    Pound = document.getElementById("Pound");
}

function INRfunc()
{
    usd.value = parseFloat(INR.value) * 0.013;
    eur.value = parseFloat(INR.value) * 0.012;
    Yen.value = parseFloat(INR.value) * 3.23;
    Pound.value = parseFloat(INR.value) * 0.011;
}

function eurfunc()
{
    INR.value = parseFloat(eur.value) * 80.61;
    usd.value = parseFloat(eur.value) * 1.04;
    Yen.value = parseFloat(eur.value) * 260.50;
    Pound.value = parseFloat(eur.value) *0.85;
}

function Yenfunc()
{
    INR.value = parseFloat(Yen.value) * 0.31;
    usd.value = parseFloat(Yen.value) * 0.0040;
    eur.value = parseFloat(Yen.value) * 0.0038;
    Pound.value = parseFloat(Yen.value) * 0.0033;
}

function Poundfunc()
{
    INR.value = parseFloat(Pound.value) * 94.73;
    usd.value = parseFloat(Pound.value) * 1.22;
    eur.value = parseFloat(Pound.value) * 1.18;
    Yen.value = parseFloat(Pound.value) * 306.17;    
}

function usdfunc()
{
    INR.value = parseFloat(usd.value) * 77.44;
    eur.value = parseFloat(usd.value) * 0.96;
    Yen.value = parseFloat(usd.value) * 250.25;
    Pound.value = parseFloat(usd.value) * 0.82;
}

init();