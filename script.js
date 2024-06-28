const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore1 = document.querySelector("#User-Score");
const compScore1 = document.querySelector("#Computer-Score");
let userScore = 0;
let compScore = 0;

const generateCompChoice = () => {
    let opt = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return opt[randomIndex];
}

const draw = () => {
    console.log("game is draw");
    msg.innerText = "Draw Play Again 😂";
    msg.style.backgroundColor = "blue";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScore1.innerText = userScore;
        console.log("Congrats you win");
        msg.innerText = `YOU WIN!! 🏆 Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScore1.innerText = compScore;
        console.log("Sorry you lose");
        msg.innerText = `SORRY YOU LOSE ☹️ ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = generateCompChoice();
    console.log("computer choice =", compChoice);
    if (userChoice == compChoice) {
        draw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice !== "paper";
        } else if (userChoice === "paper") {
            userWin = compChoice !== "scissor";
        } else if (userChoice === "scissor") {
            userWin = compChoice !== "rock";
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
