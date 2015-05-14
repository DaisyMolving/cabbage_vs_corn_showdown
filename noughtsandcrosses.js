$(document).ready(function(){

// var openDialogCabbage = $( ".cabbageWins" ).dialog( "option", "modal" );


function openDialogCabbage(){
  $( ".cabbageWins" ).dialog();
}

// var openDialogCorn = $( ".cornWins" ).dialog( "option", "modal" );

function openDialogCorn(){
  $( ".cornWins" ).dialog();
}


var turn = -1;
var numberOfTurns = 0;


$(".gridBox").on('click', function(){
    if (turn === -1) {
      $(this).css("background-image", "url(cabbage.png)");
      turn = 1; 
    } else {
      $(this).css("background-image", "url(corn.png)");
      turn = -1;
    }
})

var gridPosition = ["","","","","","","","",""]; 

  $("#one").on('click', function(){
    gridPosition[0] = turn;
    numberOfTurns+=1;
    console.log(gridPosition);
    winnerTest();
  }); 
  $("#two").on('click', function(){
    gridPosition[1] = turn;
    numberOfTurns+=1;
    console.log(gridPosition);
    winnerTest();
  });
  $("#three").on('click', function(){
    gridPosition[2] = turn;
    numberOfTurns+=1;
    console.log(gridPosition);
    winnerTest();
  });
  $("#four").on('click', function(){
    gridPosition[3] = turn;
    numberOfTurns+=1;
    console.log(gridPosition);
    winnerTest();
  });  
  $("#five").on('click', function(){
    gridPosition[4] = turn;
    numberOfTurns+=1;
    console.log(gridPosition);
    winnerTest();
  });
  $("#six").on('click', function(){
    gridPosition[5] = turn;
    numberOfTurns+=1;
    console.log(gridPosition);
    winnerTest();
  });
  $("#seven").on('click', function(){
    gridPosition[6] = turn;
    numberOfTurns+=1;
    console.log(gridPosition);
    winnerTest();
  });
  $("#eight").on('click', function(){
    gridPosition[7] = turn;
    numberOfTurns+=1;
    console.log(gridPosition);
    winnerTest();
  });
  $("#nine").on('click', function(){
    gridPosition[8] = turn;
    numberOfTurns+=1;
    console.log(gridPosition);
    winnerTest();
  });


function winnerTest(){
  var sum;
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
     sum = element.reduce(function(a, b) {
        return (a+b);
    });
 
     if (sum === 3){
     openDialogCabbage();
     } else if (sum === -3){
       openDialogCorn();
     } 

  }); 
  if (numberOfTurns === 9 && sum !== 3 && sum !== -3) {
      alert("nobody has won");
     }
}

});