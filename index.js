// Button to reload page
document.querySelector("button").setAttribute("onClick","window.location.reload();");

// function that returns random numbers between 1 and 6
function generateRandom() {
    return Math.floor(Math.random()*6)+1;
}

// generates random numbers for each player
let randNumbPlayer1 = generateRandom();
let randNumbPlayer2 = generateRandom();

//show the number sorted right next to the Player name
let pl1Text = "Player 1 (" + randNumbPlayer1 + ")"
let pl2Text = "Player 2 (" + randNumbPlayer2 + ")"

// associate the dice image according to the random number generated

// for player 1
document.querySelector(".pl1 p").innerHTML = pl1Text;
switch (randNumbPlayer1) {
    case 1:
        document.querySelector(".img1").setAttribute("src","./images/dice1.png");
        break;
    case 2:
        document.querySelector(".img1").setAttribute("src","./images/dice2.png");
        break;
    case 3:
        document.querySelector(".img1").setAttribute("src","./images/dice3.png");
        break;
    case 4:
        document.querySelector(".img1").setAttribute("src","./images/dice4.png");
        break;
    case 5:
        document.querySelector(".img1").setAttribute("src","./images/dice5.png");
        break;   
    case 6:
        document.querySelector(".img1").setAttribute("src","./images/dice6.png");
        break;
}

// for player 2
document.querySelector(".pl2 p").innerHTML = pl2Text;
switch (randNumbPlayer2) {
    case 1:
        document.querySelector(".img2").setAttribute("src","images/dice1.png");
        break;
    case 2:
        document.querySelector(".img2").setAttribute("src","images/dice2.png");
        break;
    case 3:
        document.querySelector(".img2").setAttribute("src","images/dice3.png");
        break;
    case 4:
        document.querySelector(".img2").setAttribute("src","images/dice4.png");
        break;
    case 5:
        document.querySelector(".img2").setAttribute("src","images/dice5.png");
        break;   
    case 6:
        document.querySelector(".img2").setAttribute("src","images/dice6.png");
        break;
}

//announcing the winner

if (randNumbPlayer1 > randNumbPlayer2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randNumbPlayer1 < randNumbPlayer2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "It's a draw!";
}

