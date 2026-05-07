import { useMemo, useState } from "react";
import confetti from "canvas-confetti";

const GRID_SIZE = 4;
const TOTAL_PIECES = 20;

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function PuzzleBoots({ onNext }) {
  const solvedPieces = useMemo(
    () => Array.from({ length: TOTAL_PIECES }, (_, index) => index),
    []
  );

  const [pieces, setPieces] = useState(() => shuffleArray(solvedPieces));
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isSolved, setIsSolved] = useState(false);

  const checkSolved = (newPieces) => {
    const solved = newPieces.every((piece, index) => piece === index);
    if (solved) {
      setIsSolved(true);
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.65 } });
    }
  };

  const swapPieces = (fromIndex, toIndex) => {
    const newPieces = [...pieces];
    [newPieces[fromIndex], newPieces[toIndex]] = [
      newPieces[toIndex],
      newPieces[fromIndex],
    ];
    setPieces(newPieces);
    setSelectedIndex(null);
    checkSolved(newPieces);
  };

  const handlePieceClick = (index) => {
    if (isSolved) return;
    if (selectedIndex === null) {
      setSelectedIndex(index);
      return;
    }
    if (selectedIndex === index) {
      setSelectedIndex(null);
      return;
    }
    swapPieces(selectedIndex, index);
  };

  const solveForTesting = () => {
    setPieces(solvedPieces);
    setIsSolved(true);
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.65 } });
  };

  return (
    <section className="screen">
      <div className="glass-card">
        <p className="eyebrow">Level 1</p>
        <h2>Boots' Puzzle</h2>
        <p>
          Boots is guarding the next part of the mission. Put his picture back
          together to continue.
        </p>

        <div className="puzzle-board">
          {pieces.map((pieceNumber, index) => {
            const row = Math.floor(pieceNumber / GRID_SIZE);
            const col = pieceNumber % GRID_SIZE;

            return (
              <button
                key={`${pieceNumber}-${index}`}
                className={`puzzle-piece ${
                  selectedIndex === index ? "selected" : ""
                }`}
                style={{
                  backgroundImage: "url('/images/boots.jpg')",
                  backgroundPosition: `${(col / (GRID_SIZE - 1)) * 100}% ${
                    (row / (5 - 1)) * 100
                  }%`,
                }}
                onClick={() => handlePieceClick(index)}
                aria-label={`Puzzle piece ${index + 1}`}
              />
            );
          })}
        </div>

        <p className="hint">
          Tap one piece, then tap another one to swap them. This is easier than
          dragging and works great on phones too.
        </p>

        {!isSolved ? (
          <button className="secondary-button" onClick={solveForTesting}>
            Skip puzzle for testing
          </button>
        ) : (
          <div className="success-box">
            <p>Boots approves this relationship.</p>
            <button className="primary-button" onClick={onNext}>
              Continue
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default PuzzleBoots;
