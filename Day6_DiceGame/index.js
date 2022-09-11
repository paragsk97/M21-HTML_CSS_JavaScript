//player 01 setup  // generate random number 1-6
var randomNum1 = Math.floor(Math.random() * 6) + 1;
//map images to randomnumber to files in images folder
var randomImageSource = "images/dice" + randomNum1 + ".png";

// img[0] - 1st image update as per random number
var image1 =  document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// Player 2 setup
var randomNum2 = Math.floor(Math.random() * 6) + 1;
//map images to randomnumber to files in images folder
var randomImageSource2 = "images/dice" + randomNum2 + ".png";

// img[1] - 2nd image update as per random number
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// Player 3 setup
var randomNum3 = Math.floor(Math.random() * 6) + 1;
//map images to randomnumber to files in images folder
var randomImageSource3 = "images/dice" + randomNum3 + ".png";

// img[2] - 3rd image update as per random number
var image3 = document.querySelectorAll("img")[1];
image3.setAttribute("src", randomImageSource3);

// Player 4 setup
var randomNum4 = Math.floor(Math.random() * 6) + 1;
//map images to randomnumber to files in images folder
var randomImageSource4 = "images/dice" + randomNum4 + ".png";

// img[3] - 2nd image update as per random number
var image4 = document.querySelectorAll("img")[1];
image4.setAttribute("src", randomImageSource4);

// Main Logic of Dice
if(randomNum1 > randomNum2 && randomNum1 > randomNum3 && randomNum1 > randomNum4)
{
document.querySelector("h1").innerHTML = "Player 1 Wins !"
}
else if (randomNum2 > randomNum1 && randomNum2 > randomNum3 && randomNum2 > randomNum4)
{
  document.querySelector("h1").innerHTML = "Player 2 Wins !"
}
else if (randomNum3 > randomNum1 && randomNum3 > randomNum2 && randomNum3 > randomNum4)
{
  document.querySelector("h1").innerHTML = "Player 3 Wins !"
}
else if (randomNum4 > randomNum1 && randomNum4 > randomNum2 && randomNum4 > randomNum3)
{
  document.querySelector("h1").innerHTML = "Player 4 Wins !"
}
else
{
    document.querySelector("h1").innerHTML = "Draw";
}
