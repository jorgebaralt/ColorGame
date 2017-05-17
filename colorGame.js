/**
 * Created by jorgebaraltq on 4/15/2017.
 */
var numbSquares = 6;
var colors = generateRandomColors(numbSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numbSquares = 3;
    colors = generateRandomColors(numbSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
});

hardBtn.addEventListener("click",function () {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numbSquares = 6;
    colors = generateRandomColors(numbSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){

            squares[i].style.background = colors[i];

            squares[i].style.display = "block";
    }
    h1.style.background = "steelblue";
});

resetButton.addEventListener("click",function(){

   //generate all new colors.
    colors = generateRandomColors(numbSquares);
    //pick a new random color
    pickedColor = pickColor();
    //change display text color
    colorDisplay.textContent = pickedColor;
    //change squares colors
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
});

colorDisplay.textContent = pickedColor;

for (var i = 0 ; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.background = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click",function(){
        //grab color of picked square
        var clickedColor = this.style.background;
        //compare color to the pickedColor
        if(clickedColor === pickedColor){
            message.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
            resetButton.textContent = "Play Again?"
        }
        else{
            this.style.background = "#232323";
            message.textContent = "Try Again";
        }
    });
}

//change colors to winner color.
function changeColors(color){
    //loop through all squares change each color to match given color.
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }

}

function pickColor() {
   var random = Math.floor(Math.random()* colors.length);
   return colors[random];
}
function generateRandomColors(num){
    var arr = [];

    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }

    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}