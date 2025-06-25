import { useState } from "react";

const choices = ["rock", "paper", "scissors"];

function Game() {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ user: 0, computer: 0 });

  const handleClick = (choice) => {
    const compChoice = choices[Math.floor(Math.random() * 3)];
    setUserChoice(choice);
    setComputerChoice(compChoice);
    determineWinner(choice, compChoice);
  };

  const determineWinner = (user, comp) => {
    if (user === comp) {
      setResult("It's a tie!");
    } else if (
      (user === "rock" && comp === "scissors") ||
      (user === "paper" && comp === "rock") ||
      (user === "scissors" && comp === "paper")
    ) {
      setResult("You win!");
      setScore((prev) => ({ ...prev, user: prev.user + 1 }));
    } else {
      setResult("Computer wins!");
      setScore((prev) => ({ ...prev, computer: prev.computer + 1 }));
    }
  };

  return (
    <div className="text-center p-6">
      <h1 className="text-2xl font-bold mb-4">Rock Paper Scissors</h1>
      <div className="flex justify-center gap-4 mb-6">
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => handleClick(choice)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {choice.toUpperCase()}
          </button>
        ))}
      </div>
      <p>
        You chose: <strong>{userChoice}</strong>
      </p>
      <p>
        Computer chose: <strong>{computerChoice}</strong>
      </p>
      <p className="mt-4 text-lg font-semibold">{result}</p>
      <p className="mt-2">
        Score: You {score.user} - {score.computer} Computer
      </p>
    </div>
  );
}

export default Game;
