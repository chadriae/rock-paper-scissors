let persScore = 0;
let pcScore = 0;

function rockPaperScissors(choice) {

    const randomNumber = Math.floor(Math.random() * 3);
    const rps = ["rock", "paper", "scissors"];


    if (choice == rps[randomNumber]) {
    document.getElementById("result").innerHTML = "It's a draw!";
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

    console.log(randomNumber);
    console.log(rps[randomNumber]);
    console.log(persScore);
    console.log(pcScore);

    document.getElementById("choices").innerHTML = "You chose " + choice + " and the computer chose " + rps[randomNumber] + ".";
    document.getElementById("yourScore").innerHTML = "Your score: " + persScore.toString() + ".";
    document.getElementById("pcScore").innerHTML = "Your opponents score: " + pcScore.toString() + ".";  
    };


