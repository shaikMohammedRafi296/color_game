//this colors array contains the colors 
var numSqu=6;
var colors= generateRandomColors(numSqu);
var span=document.querySelector("span");
var h1=document.querySelector("h1");
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colordisplay");
var msgDisplay=document.querySelector("#msg");
var stripe=document.querySelector("#stripe");
var resetbutton=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

easybtn.addEventListener("click",function()
{
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numSqu=3;
	colors=generateRandomColors(numSqu);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor=colors[i];

		}
		else
		{
          squares[i].style.display="none" ;
		}
	}
});

hardbtn.addEventListener("click",function()
{
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numSqu=6;
	colors=generateRandomColors(numSqu);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		
			squares[i].style.backgroundColor=colors[i];

		
          squares[i].style.display="block" ;
		
	}
});

resetbutton.addEventListener("click",function()
{
	//generate all new colors
	colors= generateRandomColors(numSqu);
	//pick a color
	pickedColor=pickColor();
	//change color display 
	colorDisplay.textContent=pickedColor;
	//change colors of the squares
	for(var i=0;i<squares.length;i++)
   {
	squares[i].style.backgroundColor=colors[i];
   }
  h1.style.backgroundColor="blue";
  stripe.style.backgroundColor="white";

});
colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
    //taking a square and checking with the chhosen color;
    squares[i].addEventListener("click",function()
    {
         var clickedColor=this.style.backgroundColor;
         if(clickedColor==pickedColor)
         {
         	msgDisplay.textContent="Correct";
         	changeColors(clickedColor);
         	h1.style.backgroundColor=clickedColor;
         	span.style.backgroundColor=clickedColor;
         	stripe.style.backgroundColor=clickedColor;
         	resetbutton.textContent="Play Again";
         }
         else
         {
         	this.style.backgroundColor="black";
         	msgDisplay.textContent="Try Again";
         }
    });
}

function changeColors(color)
{
	for(var i=0;i< squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

////random function for the selction of colors
function pickColor()
{
	//it randomly pick a number from 0 to 6
	var rndcolor=Math.floor(Math.random()*colors.length);
	return colors[rndcolor];
}


function generateRandomColors(num)
{
	//make an array
	var arr=[];
	// get the colors into the array
    for(var i=0;i<num;i++)
    {
      arr[i]=randomColors()
    }
    //return arr
	return arr;
}

function randomColors()
{
	//selct a random color for red
	var r=Math.floor(Math.random()*256);
    //selct a random color for blue
	var g=Math.floor(Math.random()*256);
	//selct a random color for blue
	var b=Math.floor(Math.random()*256);
	//return the string in the format of rgb(234, 0, 123)
	return "rgb("+r+", "+g+", "+b+")";
}