/*
      Rock Paper Scissors Game
    ----------------------------
    
Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:
Rock destroys scissors.
Scissors cut paper.
Paper covers rock.

If there’s a tie, then the game ends in a draw.

Our code will break the game into four parts:
Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results.

*/

console.log("hi");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log(userInput, "is an invaild option");
  }
};

const getComputerChoice = () => {
  var number = Math.floor(Math.random() * 3);
  if (number == 0) {
    return "paper";
  } else if (number == 1) {
    return "scissors";
  } else if (number == 2) {
    return "rock";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice == computerChoice) {
    return "It was a tie";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "You lose :(";
    } else if (computerChoice === "scissors") {
      return "You win!";
    }
  }
  if (userChoice === "paper"){
    if (computerChoice === "scissors") {
      return "You lose :(";
    } else if (computerChoice === "rock") {
      return "You win!";
    }
  }
    if (userChoice === "scissors"){
    if (computerChoice === "rock") {
      return "You lose :(";
    } else if (computerChoice === "paper") {
      return "You win!";
    }
  }
};
const playGame = () => {
  var userChoice = getUserChoice('paper');
  var computerChoice = getComputerChoice();
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
