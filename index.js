function randRSP() {
  result = Math.floor(Math.random() * 3) + 1;
  if (result === 1) {
    return "rock";
  } else if (result === 2) {
    return "scissors";
  } else if (result === 3) {
    return "papaer";
  }
}

function match(player) {
  const computer = randRSP();
  document.querySelector("#player").innerText = `${player} VS`;
  document.querySelector("#computer").innerText = `${computer}`;
  if (player === computer) {
    document.querySelector("#result").innerText = `draw!`;
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    document.querySelector("#result").innerText = "win!";
  } else {
    document.querySelector("#result").innerText = "lose!";
  }
}
