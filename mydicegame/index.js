let randomNumber1 = Math.ceil(Math.random() * 6);
// console.log(randomNumber1);

let randomDiceImage = "dice" + randomNumber1 + ".png";

let randomImageSource = "images/" + randomDiceImage;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

let randomNumber2 = Math.ceil(Math.random() * 6);
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
    document.getElementById("p1").textContent = "🚩";
    // alert("Player 1 Wins!");
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "🚩Player 2 Wins!";
    document.getElementById("p2").textContent = "🚩";
      // alert("Player 2 Wins!");
}
else {
    document.querySelector("h1").textContent = "S t a l e m a t e!";
}
