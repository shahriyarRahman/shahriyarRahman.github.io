var numSquares = 6;
var colors = [];
var pickedColor;
var colorSquare = document.querySelectorAll(".colorSquare");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init()
{ 
		//mode buttons
		setupModeButton();
		//Game logic
		setupSquares();
		reset();
} 

resetButton.addEventListener("click", function()
{
	reset();
})

function setupModeButton()
{
	for(var i = 0; i < modeButtons.length; i++)
		{
			modeButtons[i].addEventListener("click",function(){	
				modeButtons[0].classList.remove("selected");
				modeButtons[1].classList.remove("selected");
				this.classList.add("selected");
		//method 1
		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6; 
		//method 2
			// if (this.textContent === "Easy") 
			// {	numSquares = 3;
			// }else
			// { 	numSquares = 6;}
			reset();
			});
		}
}

function setupSquares()
{
	for(var i = 0; i < colorSquare.length; i++)
		{
			//Adding click listeners to squares
			colorSquare[i].addEventListener("click", function ()
			{
				//grab color of clicked square
				var clickedColor = this.style.backgroundColor;
				//compare it with picked color
				if (clickedColor === pickedColor) 
				{
					messageDisplay.textContent = 'Correct!';
					changeColors(clickedColor);
					h1.style.backgroundColor = clickedColor;
					resetButton.textContent = 'Play Again?';
				}
				else
				{
					this.style.backgroundColor = '#232333';
					messageDisplay.textContent = 'Try Again!'; 
				}
			})
		}
}
function reset()
{
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new randodm color from array
	 pickedColor = pickColor();
	 colorDisplay.textContent = pickedColor;
	 h1.style.backgroundColor = 'steelblue';
	 messageDisplay.textContent = '';
	 resetButton.textContent = 'New Colors';	
	//change colors of squares
	for(var i = 0; i < colorSquare.length; i++)
	{
		//check for mode
		if (colors[i])
		{	
			colorSquare[i].style.display = "block";
		//Adding initial colors to squares
			colorSquare[i].style.backgroundColor = colors[i];
		}
		else{
			colorSquare[i].style.display = "none";
		}
	}
	
}


function generateRandomColors(num)
{
	//make an array
	var arr = []
	//add num random colors to array
	for(var i = 0; i < num; i++){
		//get random color and push it in arr
		arr.push(randomColor());
		
	}
	//return array
	return arr;
}

function randomColor()
{
	//pick red from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick  green  from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick  blue from 0-255
	var b = Math.floor(Math.random() * 256);
	//make a string of format rgb(r, g, b)
	 return "rgb(" +r+ ", " +g+", " +b+ ")";
}

function pickColor()
{
	var random = Math.floor(Math.random() * colors.length );
	return colors[random];
}


function changeColors(color)
{ 
	//loop through all squares
	for(var i = 0; i < colorSquare.length; i++)
	{
	//change all square colors to matched color 
		colorSquare[i].style.backgroundColor = color;
	}	
}