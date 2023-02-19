// ----------------- funçoes da page Selecao.html --------------

function Mycolor() {
    var element = document.getElementById("myID");
    var element2 = document.getElementById("idText");
    var element3 = document.getElementById("botaoLigth");

    var elem = document.getElementById("botaoNight");
    elem.style.border = "1px solid #000000";
    elem.style.color = "#fff";
    element.style.backgroundColor = '#92a4ec';
    element.style.color = '#fff';
    element3.style.backgroundColor = '#fff';
    element3.style.color = '#000000';
}
function Mycolor2() {
    var element = document.getElementById("myID");
    var elementobt = document.getElementById("botaoNight");
    element.style.backgroundColor = '#fff',
        element.style.color = '#000000';
    elementobt.style.backgroundColor = "#000000";
    elementobt.style.color = "#fff";
}

function bordar() {
    var card1 = document.getElementById("card");
    card1.style.border = "solid 2px #000000";

}
function bordar2() {
    var card2 = document.getElementById("card2");
    card2.style.border = "solid 2px #000000";

}
function bordar3() {
    var card3 = document.getElementById("card3");
    card3.style.border = "solid 2px #000000";

}
function Desmarcar() {
    var desmaca = document.getElementById("card");
    var desmaca1 = document.getElementById("card2");
    var desmaca2 = document.getElementById("card3");
    desmaca.style.border = "none";
    desmaca1.style.border = "none";
    desmaca2.style.border = "none";
}


