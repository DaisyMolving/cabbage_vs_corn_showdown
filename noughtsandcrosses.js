$(document).ready(function(){

var turn = -1;


$(".gridBox").on('click', function(){
    if (turn === -1) {
      $(this).css("background-image", "url(cabbage.png)");
      turn = 1; 
    } else {
      $(this).css("background-image", "url(corn.png)");
      turn = -1;
    }
})

var gridPosition = [0,0,0,0,0,0,0,0,0]; 

  $("#one").on('click', function(){
    gridPosition[0] = turn;
    console.log(gridPosition);
    winnerTest();
  }); 
  $("#two").on('click', function(){
    gridPosition[1] = turn;
    console.log(gridPosition);
    winnerTest();
  });
  $("#three").on('click', function(){
    gridPosition[2] = turn;
    console.log(gridPosition);
    winnerTest();
  });
  $("#four").on('click', function(){
    gridPosition[3] = turn;
    console.log(gridPosition);
    winnerTest();
  });  
  $("#five").on('click', function(){
    gridPosition[4] = turn;
    console.log(gridPosition);
    winnerTest();
  });
  $("#six").on('click', function(){
    gridPosition[5] = turn;
    console.log(gridPosition);
    winnerTest();
  });
  $("#seven").on('click', function(){
    gridPosition[6] = turn;
    console.log(gridPosition);
    winnerTest();
  });
  $("#eight").on('click', function(){
    gridPosition[7] = turn;
    console.log(gridPosition);
    winnerTest();
  });
  $("#nine").on('click', function(){
    gridPosition[8] = turn;
    console.log(gridPosition);
    winnerTest();
  });

// horizontalTop = [gridPosition[0], gridPosition[1], gridPosition[2]];
// horizontalMiddle = [gridPosition[3], gridPosition[4], gridPosition[5]];
// horizontalBottom = [gridPosition[6], gridPosition[7], gridPosition[8]];
// verticalLeft = [gridPosition[0], gridPosition[3], gridPosition[6]];
// verticalMiddle = [gridPosition[1], gridPosition[4], gridPosition[7]];
// verticalRight = [gridPosition[2], gridPosition[5], gridPosition[8]];
// diagonalLeftTop = [gridPosition[0], gridPosition[4], gridPosition[8]];
// diagonalRightTop = [gridPosition[2], gridPosition[4], gridPosition[6]];



// threeInRow[0].reduce(function(a, b) {
//     return parseInt(a, 10) + parseInt(b, 10);
// })

function winnerTest(){
  var threeInRow = [[gridPosition[0], gridPosition[1], gridPosition[2]], 
                  [gridPosition[3], gridPosition[4], gridPosition[5]], 
                  [gridPosition[6], gridPosition[7], gridPosition[8]], 
                  [gridPosition[0], gridPosition[3], gridPosition[6]], 
                  [gridPosition[1], gridPosition[4], gridPosition[7]], 
                  [gridPosition[2], gridPosition[5], gridPosition[8]], 
                  [gridPosition[0], gridPosition[4], gridPosition[8]], 
                  [gridPosition[2], gridPosition[4], gridPosition[6]]];
  threeInRow.forEach(function(element, i){
  
    console.log(element);
     var sum = element.reduce(function(a, b) {
        console.log(a+b);
        return (a+b);
    });

     if (sum === 3){
      alert("CABBAGE WINS! Corn, you got cole-slawtered");
     } else if (sum === -3){
      alert("CORN WINS! Cabbage, looks like you are going through a bad patch");
     }
     //console.log(sum);
     // this.val() === -3)) { 
      // console.log("x wins");
  }); 
}

  // else if (threeInRow === 3) {
  //   console.log("o wins");
  // }
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