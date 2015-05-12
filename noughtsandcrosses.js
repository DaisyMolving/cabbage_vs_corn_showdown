$(document).ready(function(){

var turn = true;
var board = ["","","","","","","","",""]; {
  $("#one") = board[0]
  
}

$(".gridBox").on('click', function(){
    if (turn === true) {
      $(this).css("background-color", "red");
      turn = false; 
    } else {
      $(this).css("background-color", "blue");
      turn = true;
    }
})





var cross = -1;
var nought = 1;


});