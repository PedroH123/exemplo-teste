
var simbolo;

$(document).on("click","#X",function(){

    simbolo = 1;

});

$(document).on("click","#O",function(){

    simbolo = 2;

});

$(document).on("click",".casa",function(){

  if(simbolo == 1){
    $(".casa").val() = "X";
  }

  if(simbolo == 2){
    $(".casa").val() = "O";
  }

});
