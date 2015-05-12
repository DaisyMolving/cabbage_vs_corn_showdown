$(document).ready(function(){

var turn = "x";


$(".gridBox").on('click', function(){
    if (turn === "x") {
      $(this).css("background-color", "red");
      turn = "o"; 
    } else {
      $(this).css("background-color", "blue");
      turn = "x";
    }
})

var board = ["0","1","2","3","4","5","6","7","8"]; 


  $("#one").on('click', function(){
    board[0] = turn;
    console.log(board);
  }); 
  $("#two").on('click', function(){
    board[1] = turn;
    console.log(board);
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


//winning array combos:
[0, 1, 2]
[3, 4, 5]
[6, 7, 8]
[0, 3, 6]
[1, 4, 7]
[2, 5, 8]
[0, 4, 8]
[6, 4, 2]

});