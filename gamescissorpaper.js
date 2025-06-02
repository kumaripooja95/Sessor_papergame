let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const GenCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    // Rock, Paper, Scissors
}

const drawGame = () => {
    msg.innerText = "Game eas Draw. Again Play.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin , userChoice, compChoice) => {
if (userWin) {
userScore++;
userScorePara.innerText = userScore;
msg.innerText = `You Win! You ${userChoice} beats ${compChoice}`;
msg.style.backgroundColor = "green";
} else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
}
};

const playGame = (userChoice) => {
    console.log("user choice =" , userChoice);
    // Generate Computer choice
    const compChoice = GenCompChoice ();
    console.log("comp choice =", compChoice);

    if (userChoice === compChoice) {
        // Draw Game
        drawGame(); 
     } else {
            let userWin = true;
            if (userChoice === "Rock") {
                // Scissors, Paper
                userWin = compChoice === "Paper" ? false :true;            }
        else if (userChoice === "Paper") {
            // Rock , Scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // Rock , Paper
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    };


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame (userChoice);
    });

});