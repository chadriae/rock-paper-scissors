(() => {
// Declaring variables
let persScore = 0;
let pcScore = 0;
let draw = 0;
let choice = '';

// Getting the value of the clicked button and adding as an array to let choice
// querySelectorAll op class
document.querySelectorAll(".action").forEach((button) =>
  button.addEventListener(
    'click',
    function () {
      choice = button.id;
    },
    false
))

// Play again button
document.getElementById('restart').addEventListener("click", playAgain);
function playAgain () {
  location.reload();
}

// Starting the function after clicking "fight"
// Using the variable choice to determine who wins
document.getElementById('play').addEventListener("click", function () {
if (choice == '') {
  alert('You must choose a fighter first.')
  return false;
}
    // Randomising an outcome of the opponent
    const randomNumber = Math.floor(Math.random() * 3);
    const rps = ["rock", "paper", "scissors"];

    // Declaring all the outcomes
    if (choice == rps[randomNumber]) {
      // Variable element to add specific styling (text color) to each situation
      //  and add an HTML text.
      // element.style....? ipv add/remove classList
      let element = document.getElementById("result")
      element.innerHTML = "It's a draw!";
      element.classList.remove("text-green-500");
      element.classList.remove("text-red-500");
      element.classList.add("text-blue-500");
      draw ++;
    }
    else if (choice == 'paper' && randomNumber === 0) {
      let element = document.getElementById("result")
      element.innerHTML = "You won!";
      element.classList.remove("text-red-500");
      element.classList.remove("text-blue-500");
      element.classList.add("text-green-500");
      persScore ++;
    }
    else if (choice == 'scissors' && randomNumber === 1) {
      let element = document.getElementById("result")
      element.innerHTML = "You won!";
      element.classList.remove("text-red-500");
      element.classList.remove("text-blue-500");
      element.classList.add("text-green-500");  
      persScore ++;
    }
    else if (choice == 'rock' && randomNumber === 2) {
      let element = document.getElementById("result")
      element.innerHTML = "You won!";
      element.classList.remove("text-red-500");
      element.classList.remove("text-blue-500");
      element.classList.add("text-green-500");
      persScore ++;
    }
    else {
      let element = document.getElementById("result")
      element.innerHTML = "You lost.";
      element.classList.remove("text-blue-500");
      element.classList.remove("text-green-500");
      element.classList.add("text-red-500");
      pcScore ++;
    }
    // Changing all html-elements with scores etc
    document.getElementById("choices").innerHTML = "You chose " + choice + " and the computer chose " + rps[randomNumber] + ".";
    document.getElementById("yourScore").innerHTML = "Your score: " + persScore.toString() + ".";
    document.getElementById("pcScore").innerHTML = "Your opponents score: " + pcScore.toString() + ".";  
    //document.getElementById("draws").innerHTML = "Number of draws: " + draw.toString() + ".";  

    choice = '';
    
    // Changing the fight-button innerHTML
    document.getElementById("play").innerHTML = 'PLAY AGAIN? &#x2694;';
})
})();
