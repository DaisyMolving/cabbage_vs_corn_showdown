$(document).ready(function(){

var turn = "x";


$(".gridBox").on('click', function(){
    if (turn === "x") {
      $(this).css("background-image", "url(O.png)");
      turn = "o"; 
    } else {
      $(this).css("background-image", "url(X.png)");
      turn = "x";
    }
})

var gridPosition = ["","","","","","","","",""]; 


  $("#one").on('click', function(){
    gridPosition[0] = turn;
    console.log(gridPosition);
  }); 
  $("#two").on('click', function(){
    gridPosition[1] = turn;
    console.log(gridPosition);
  });
  $("#three").on('click', function(){
    gridPosition[2] = turn;
    console.log(gridPosition);
  });
  $("#four").on('click', function(){
    gridPosition[3] = turn;
    console.log(gridPosition);
  });  
  $("#five").on('click', function(){
    gridPosition[4] = turn;
    console.log(gridPosition);
  });
  $("#six").on('click', function(){
    gridPosition[5] = turn;
    console.log(gridPosition);
  });
  $("#seven").on('click', function(){
    gridPosition[6] = turn;
    console.log(gridPosition);
  });
  $("#eight").on('click', function(){
    gridPosition[7] = turn;
    console.log(gridPosition);
  });
  $("#nine").on('click', function(){
    gridPosition[8] = turn;
    console.log(gridPosition);
  });

var winnerX = function(){
  if (board[] && board[] 

}

//winning array combos:
// [0, 1, 2]
// [3, 4, 5]
// [6, 7, 8]
// [0, 3, 6]
// [1, 4, 7]
// [2, 5, 8]
// [0, 4, 8]
// [6, 4, 2]

});