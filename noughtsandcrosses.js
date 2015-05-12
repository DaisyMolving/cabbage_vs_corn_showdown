$(document).ready(function(){

var turn = true;


$(".gridBox").on('click', function(){
    if (turn === true) {
      $(this).css("background-color", "red");
      turn = false; 
    } else {
      $(this).css("background-color", "blue");
      turn = true;
    }
})

var board = ["0","1","2","3","4","5","6","7","8"]; 



  $("#one").on('click', function(){
    console.log(board[0]);
  }); 
  $("#two").on('click', function(){
    console.log(board[1]);
  });
  $("#three").on('click', function(){
    console.log(board[2]);
  });
  $("#four").on('click', function(){
    console.log(board[3]);
  });  
  $("#five").on('click', function(){
    console.log(board[4]);
  });
  $("#six").on('click', function(){
    console.log(board[5]);
  });
  $("#seven").on('click', function(){
    console.log(board[6]);
  });
  $("#eight").on('click', function(){
    console.log(board[7]);
  });
  $("#nine").on('click', function(){
    console.log(board[8]);
  });






var cross = -1;
var nought = 1;


});