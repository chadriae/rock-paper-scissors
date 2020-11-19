(() => {
// Declaring variables
let persScore = 0;
let pcScore = 0;
let draw = 0;
let choice = '';


// Getting the value of the clicked button and adding as an array to let choice
Array.from(document.querySelectorAll('button')).forEach(($btn) =>
    $btn.addEventListener(
      'click',
      () => {
        choice = $btn.id;
      },
      false
))


// Starting the function after clicking "fight"
// Using the variable choice to determine who wins
document.getElementById('fight').addEventListener("click", function () {

    // Randomising an outcome of the opponent
    const randomNumber = Math.floor(Math.random() * 3);
    const rps = ["rock", "paper", "scissors"];

        // Declaring all the outcomes
        if (choice == rps[randomNumber]) {
        document.getElementById("result").innerHTML = "It's a draw!";
        draw ++;
        }

        else if (choice == 'paper' && randomNumber === 0) {
        document.getElementById("result").innerHTML = "You won!";
        persScore ++;
        }

        else if (choice == 'scissors' && randomNumber === 1) {
        document.getElementById("result").innerHTML = "You won!";
        persScore ++;
        }

        else if (choice == 'rock' && randomNumber === 2) {
        document.getElementById("result").innerHTML = "You won!";
        persScore ++;
        }

        else {
        document.getElementById("result").innerHTML = "You lost.";
        pcScore ++;
        }

        // Changing all html-elements with scores etc
        document.getElementById("choices").innerHTML = "You chose " + choice + " and the computer chose " + rps[randomNumber] + ".";
        document.getElementById("yourScore").innerHTML = "Your score: " + persScore.toString() + ".";
        document.getElementById("pcScore").innerHTML = "Your opponents score: " + pcScore.toString() + ".";  
        document.getElementById("draw").innerHTML = "Number of draws: " + draw.toString() + ".";  
    })
})();
