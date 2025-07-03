const choices = ["rock", "paper", "scissors"]

function playGame(userChoice) {
  userChoice = userChoice.toLowerCase()

  if (!choices.includes(userChoice)) {
    console.log(" Invalid choice. Use: rock, paper, or scissors.")
    return
  }

  const computerChoice = choices[Math.floor(Math.random() * choices.length)]

  console.log(` You chose: ${userChoice}`)
  console.log(` Computer chose: ${computerChoice}`)

  if (userChoice === computerChoice) {
    console.log(" It's a draw!")
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(" You win!")
  } else {
    console.log(" Computer wins!")// Stone Paper Scissor Game

// Ask user for input
var userChoice = prompt("Enter your choice: Stone, Paper, or Scissor");

if (userChoice) {
    // Normalize input: remove spaces and convert to lowercase
    userChoice = userChoice.trim().toLowerCase();
} else {
    alert("No input provided.");
    throw new Error("User cancelled or input is empty");
}

// Generate computer's choice
var computerRandom = Math.random();
var computerChoice = "";
if (computerRandom < 0.34) {
    computerChoice = "stone";
} else if (computerRandom <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissor";
}

// Show computer choice
alert("Computer chose: " + computerChoice);

// Decision logic
if (userChoice === "stone" || userChoice === "paper" || userChoice === "scissor") {
    if (userChoice === computerChoice) {
        alert("The game is a tie!");
    } else if (
        (userChoice === "stone" && computerChoice === "scissor") ||
        (userChoice === "paper" && computerChoice === "stone") ||
        (userChoice === "scissor" && computerChoice === "paper")
    ) {
        alert("You win! " + capitalize(userChoice) + " beats " + capitalize(computerChoice) + ".");
    } else {
        alert("You lose! " + capitalize(computerChoice) + " beats " + capitalize(userChoice) + ".");
    }
} else {
    alert("Invalid input! Please enter only: Stone, Paper, or Scissor.");
}

// Helper function to capitalize first letter
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

  }
}
playGame("rock")
playGame("paper")

