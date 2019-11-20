var numSquares = 6; //how many squares easy/hard mode will change
var colors = generateRandomColors(numSquares);         //this function will take an argument specifying how many random colors are needed - eg 3/6

//SELECTORS
var squares = document.querySelectorAll(".square");
var targetColor = pickColor();        //random number for array index using function
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


//EASY/HARD BUTTONS
easyBtn.addEventListener("click", function(){
  this.classList.add("selected");
  hardBtn.classList.remove("selected");
  resetButton.textContent = "New Colors";
  h1.style.backgroundColor = "steelBlue";
  messageDisplay.textContent = "";
  numSquares = 3;
  colors = generateRandomColors(numSquares);              //3 new colors
  targetColor = pickColor();                              //new target color
  colorDisplay.textContent = targetColor;                 //text display of target color
  for(var i = 0; i < squares.length; i++){                //loop through all 6 but change top three and hide bottom three
    if (colors[i]){                                       //if there is a next color (will only work for first 3 squares because only 3 new colors are generated)
      squares[i].style.backgroundColor = colors[i];       //then assign these colors to the squares
    }else{
      squares[i].style.display = "none";
    }
  }
});
hardBtn.addEventListener("click", function(){
  this.classList.add("selected");
  easyBtn.classList.remove("selected");
  resetButton.textContent = "New Colors";
  h1.style.backgroundColor = "steelBlue";
  messageDisplay.textContent = "";
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  targetColor = pickColor();
  colorDisplay.textContent = targetColor;
  for(var i = 0; i < squares.length; i++){
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";                //display all squares
    }
});

//RESET BUTTON
resetButton.addEventListener("click", function(){
  this.textContent = "New Colors";
  h1.style.backgroundColor = "steelBlue";
  messageDisplay.textContent = "";
  colors = generateRandomColors(numSquares);  //array 'colors' is now equal to a new array of colors
  targetColor = pickColor();         //pick new random color from array
  colorDisplay.textContent = targetColor;//change display text of target color to match new target color
  for(var i = 0; i < squares.length; i++){ //change color of squares
    squares[i].style.backgroundColor = colors[i];
  }
})


//TARGET COLOR TEXT DISPLAY
colorDisplay.textContent = targetColor;         //the h1 will correspond to target color rgb code in array


//GAME LOGIC
for(var i = 0; i < squares.length; i++){              //loop through divs (squares) to assign colors and click listeners
  squares[i].style.backgroundColor = colors[i];       //square[0] will have color[0] - not yet random
  squares[i].addEventListener("click", function(){    //assign click listeners
    var clickedColor = this.style.backgroundColor;    //save the color of clicked square to a variable
    if (clickedColor === targetColor){                //compare color to targetColor
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);                     //if correct change all colors to clicked color(which is target color because correct) SEE FUNCTION line31
      h1.style.backgroundColor = clickedColor;        //change h1 background colour to target color when correct
      resetButton.textContent = "Play Again?";
    }else{
      this.style.backgroundColor = "#232323";         //if incorrect, change clicked sqaure color to background color to remove it from view
      messageDisplay.textContent = "Try Again";
    }
  })
};


//CHANGES ALL SQUARES COLORS TO CORRECT COLOR WHEN WON
function changeColors(color){
  for(var i = 0; i < squares.length; i++){            //WHEN CORRECT use this function to loop through all squares
      squares[i].style.background = color;            //and change all sqaure colors to match target color
  }
};


//PICK RANDOM ITEM IN ARRAY TO BE TARGET COLOR
function pickColor(){                                      //this function will 1.pick a random number 2.Use number to access color at that index of the array 3.return color
  var random = Math.floor(Math.random() * colors.length) ; //will generate number between 0 and 1 then multiply by the length of the colors array (could have 3 or 6 items in array depending on hard or easy mode)
  return colors[random];                                   //index of array chosen is random
}
//color game part 3 07:00 for math.random explanation#


//GENERATE RANDOM COLORS RGB CODES FOR ITEMS IN THE ARRAY
function generateRandomColors(num){  //this function will 1.make an array 2.add num (3/6) random colors to array 3.return array
  var arr = [];                      //make an empty array
  for(var i = 0; i < num; i++){      //doesn't loop through anything but enables to repeat (num) times
    arr.push(randomColor());         //get random color and add to array - will repeat num times and each time add color to array and therefore squares
  }
  return arr;                        //retun array
};
function randomColor(){                         //seperate function to get the random color to be used in above function to help structure code and make it a bit easier to read
  var r = Math.floor(Math.random() * 256);      //pick a "red" from 0 - 255 (TIMES BY 256 SO 255 IN INCLUDED)
  var g = Math.floor(Math.random() * 256);      //pick a "green" from 0 - 255
  var b = Math.floor(Math.random() * 256);      //pick a "blue" from 0 - 255
  return "rgb(" + r + ", " + g + ", " + b + ")";
};
