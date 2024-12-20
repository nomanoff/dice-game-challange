// player one
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 - 6

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// player two
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1 - 6

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// game logic
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "✅ Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! ✅";
} else {
  document.querySelector("h1").innerHTML = "Draw! ❌";
}
