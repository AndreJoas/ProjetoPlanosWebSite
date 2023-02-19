// funcao que alem de ler o conteudo de uma pagina html em outra, so retorna a div com a classe .ret1
const a1 = $(document).ready(function(){
     $("#ler").click(function(){
         $(function(){
             $("#plano1").load("step03.html .ret1");
         });
     })
});

const a2 = $(document).ready(function(){
    $("#ler2").click(function(){
        $(function(){
            $("#plano2").load("step03.html .ret2");
        });
    })
});

const a3 = $(document).ready(function(){
    $("#ler3").click(function(){
        $(function(){
            $("#plano3").load("step03.html .ret3");
        });
    })
});


const valor = $(document).ready(function(){
    $("#ler3").click(function(){
        $(function(){
            $("#resultado2").load("step03.html #resultado");
        });
    })
});





function most() {
    document.getElementById("plano1").innerHTML=a1;
}
function most2() {
    document.getElementById("plano2").innerHTML=a2;
}
function most3() {
    document.getElementById("plano3").innerHTML=a3;
}





var resultado2 = 0;
var lista2 = [1, 2, 5]
var lista1 = [0]

function Clicar() {
    lista1.push(lista2[0])
    resultado2 += parseInt(lista1[0] +1);
    // alert(lista1)
    // alert(resultado)
    document.getElementById("resultado2").innerHTML = resultado2;
}
function Clicar2() {
    lista1.push(lista2[1])
    resultado2 += parseInt(lista1[0] + 2);
    // alert(lista1)
    // alert(resultado)
    document.getElementById("resultado2").innerHTML = resultado2;
}
function Clicar3() {
    lista1.push(lista2[2])
    resultado2 += parseInt(lista1[0] + 5);
    // alert(lista1)
    document.getElementById("resultado2").innerHTML = resultado2;

}


