var mes1 = document.getElementById("online").value;
var mes2 = document.getElementById("online2").value;
var mes3 = document.getElementById("online3").value;
var resultado = 0;
var lista2 = [mes1, mes2, mes3]
var lista1 = [0]

function Clicar() {
    lista1.push(lista2[0])
    resultado += parseInt(lista1[0]+mes1);
    // alert(lista1)
    // alert(resultado)
    document.getElementById("resultado").innerHTML=resultado;
}
function Clicar2() {
    lista1.push(lista2[1])
    resultado += parseInt(lista1[0]+mes2);
    // alert(lista1)
    // alert(resultado)
    document.getElementById("resultado").innerHTML=resultado;
}
function Clicar3() {
    lista1.push(lista2[2])
    resultado += parseInt(lista1[0]+mes3);
    // alert(lista1)
    document.getElementById("resultado").innerHTML=resultado;

}
