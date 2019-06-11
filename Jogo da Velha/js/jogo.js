
var vez = "x";
var valor = 0;
var jogadas = 0;

$(document).on('click','#resetar',function(){
    $("#botao1").css("background-image", "url()");
    $("#botao2").css("background-image", "url()");
    $("#botao3").css("background-image", "url()");
    $("#botao4").css("background-image", "url()");
    $("#botao5").css("background-image", "url()");
    $("#botao6").css("background-image", "url()");
    $("#botao7").css("background-image", "url()");
    $("#botao8").css("background-image", "url()");
    $("#botao9").css("background-image", "url()");
    $("#botao1").val("");
    $("#botao2").val("");
    $("#botao3").val("");
    $("#botao4").val("");
    $("#botao5").val("");
    $("#botao6").val("");
    $("#botao7").val("");
    $("#botao8").val("");
    $("#botao9").val("");
    jogadas = 0;
    habilitar();
})

$(document).on("click",".casa",function(){

var valor = $(this).val();
if(vez == "x" && valor == ""){
  $(this).css("background-image", "url(imagens/X.png)");

  $(this).val("x");

  vez = "o";
  jogadas++;

}

else if(vez == "o" && valor == ""){
  $(this).css("background-image", "url(imagens/O.png)");

  $(this).val("o");

  vez = "x";
  jogadas++;
}

if($("#botao1").val() == "x" && $("#botao2").val() == "x" && $("#botao3").val() == "x" ||
        $("#botao4").val() == "x" && $("#botao5").val() == "x" && $("#botao6").val() == "x" ||
        $("#botao7").val() == "x" && $("#botao8").val() == "x" && $("#botao9").val() == "x" ||
        $("#botao1").val() == "x" && $("#botao4").val() == "x" && $("#botao7").val() == "x" ||
        $("#botao2").val() == "x" && $("#botao5").val() == "x" && $("#botao8").val() == "x" ||
        $("#botao3").val() == "x" && $("#botao6").val() == "x" && $("#botao9").val() == "x" ||
        $("#botao1").val() == "x" && $("#botao5").val() == "x" && $("#botao9").val() == "x" ||
        $("#botao3").val() == "x" && $("#botao5").val() == "x" && $("#botao7").val() == "x"){

            alert("X venceu");

            desabilitar();

        }

      else if($("#botao1").val() == "o" && $("#botao2").val() == "o" && $("#botao3").val() == "o" ||
                $("#botao4").val() == "o" && $("#botao5").val() == "o" && $("#botao6").val() == "o" ||
                $("#botao7").val() == "o" && $("#botao8").val() == "o" && $("#botao9").val() == "o" ||
                $("#botao1").val() == "o" && $("#botao4").val() == "o" && $("#botao7").val() == "o" ||
                $("#botao2").val() == "o" && $("#botao5").val() == "o" && $("#botao8").val() == "o" ||
                $("#botao3").val() == "o" && $("#botao6").val() == "o" && $("#botao9").val() == "o" ||
                $("#botao1").val() == "o" && $("#botao5").val() == "o" && $("#botao9").val() == "o" ||
                $("#botao3").val() == "o" && $("#botao5").val() == "o" && $("#botao7").val() == "o"){

                    alert("O venceu");
                    desabilitar();
                }

      else if(jogadas == 9){
        alert("Velha");
      }
});

function desabilitar(){
        $("#btn1").prop("disabled",true);
        $("#btn2").prop("disabled",true);
        $("#btn3").prop("disabled",true);
        $("#btn4").prop("disabled",true);
        $("#btn5").prop("disabled",true);
        $("#btn6").prop("disabled",true);
        $("#btn7").prop("disabled",true);
        $("#btn8").prop("disabled",true);
        $("#btn9").prop("disabled",true);
    }

    function habilitar(){
        $("#btn1").prop("disabled",false);
        $("#btn2").prop("disabled",false);
        $("#btn3").prop("disabled",false);
        $("#btn4").prop("disabled",false);
        $("#btn5").prop("disabled",false);
        $("#btn6").prop("disabled",false);
        $("#btn7").prop("disabled",false);
        $("#btn8").prop("disabled",false);
        $("#btn9").prop("disabled",false);
    }
