$(document).ready(function(){

// var playerTwo = 0;
var playerOne = function(){
  prompt("Would you like to be noughts or crosses? (The computer will randomly select who starts)");
   if (playerOne === "crosses") {
    console.log("crosses");
   } else if (playerOne === "noughts") {
    console.log("noughts");
   }
};


var xTurn
var oTurn

var board = [[1,2,3],[4,5,6],[7,8,9]];

var cross = -1;
var nought = 1;

$(".gridBox").on('click', function(){
    $(this).css("background-color", "red");
})

});