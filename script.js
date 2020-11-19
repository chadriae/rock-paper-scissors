(() => {
let persScore = 0;
let pcScore = 0;
let draw = 0;
let choice = '';

Array.from(document.querySelectorAll('button')).forEach(($btn) =>
    $btn.addEventListener(
      'click',
      () => {
        choice = $btn.id;
      },
      false
))

document.getElementById('fight').addEventListener("click", function () {

    console.log(choice);

        const randomNumber = Math.floor(Math.random() * 3);
        const rps = ["rock", "paper", "scissors"];


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

        document.getElementById("choices").innerHTML = "You chose " + choice + " and the computer chose " + rps[randomNumber] + ".";
        document.getElementById("yourScore").innerHTML = "Your score: " + persScore.toString() + ".";
        document.getElementById("pcScore").innerHTML = "Your opponents score: " + pcScore.toString() + ".";  
        document.getElementById("draw").innerHTML = "Number of draws: " + draw.toString() + ".";  
    })
})();
