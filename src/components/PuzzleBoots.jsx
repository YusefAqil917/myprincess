import { useEffect, useState } from "react";

const GRID_SIZE = 20;

function shuffle(array) {
  const arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

function PuzzleBotas({ onNext }) {
  const [pieces, setPieces] = useState([]);
  const [selected, setSelected] = useState([]);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    resetPuzzle();
  }, []);

  const resetPuzzle = () => {
    const shuffled = shuffle(
      Array.from({ length: GRID_SIZE }, (_, i) => i)
    );

    setPieces(shuffled);
    setSelected([]);
    setCompleted(false);
  };

  const handlePieceClick = (index) => {
    if (completed) return;

    const updated = [...selected, index];
    setSelected(updated);

    if (updated.length === 2) {
      const [first, second] = updated;

      const newPieces = [...pieces];

      [newPieces[first], newPieces[second]] = [
        newPieces[second],
        newPieces[first],
      ];

      setPieces(newPieces);
      setSelected([]);
    }
  };

  const checkPuzzle = () => {
    const solved = pieces.every(
      (piece, idx) => piece === idx
    );

    if (solved) {
      setCompleted(true);
    } else {
      alert(
        "Botas says this is NOT correct 😾"
      );
    }
  };

  return (
    <section className="screen">
      <div className="glass-card">

        <p className="eyebrow">LEVEL 1</p>

        <h2>Botas Security Check 😺</h2>

        {!completed ? (
          <>
            <p>
              Botas is protecting the next level.
              <br />
              Rebuild his picture to prove you deserve access 😌
            </p>

            <div className="puzzle-board">
              {pieces.map((piece, index) => {
                const row = Math.floor(piece / 4);
                const col = piece % 4;

                return (
                  <button
                    key={index}
                    className={`puzzle-piece ${
                      selected.includes(index)
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      handlePieceClick(index)
                    }
                    style={{
                      backgroundImage:
                        "url('/images/boots.jpeg')",

                      backgroundSize: "400% 500%",

                      backgroundPosition: `
                        ${(col / 3) * 100}% 
                        ${(row / 4) * 100}%
                      `,

                      backgroundRepeat: "no-repeat",
                    }}
                  />
                );
              })}
            </div>

            <p className="small-note">
              Tap two pieces to swap them.
            </p>

            <div className="puzzle-buttons">

              <button
                className="primary-button"
                onClick={checkPuzzle}
              >
                Check Puzzle
              </button>

              <button
                className="secondary-button"
                onClick={resetPuzzle}
              >
                Restart Puzzle
              </button>

              <button
                className="skip-button"
                onClick={onNext}
              >
                Princess Pass ✨
              </button>

            </div>
          </>
        ) : (
          <div className="success-box">

            <h2>Mission Complete ✨</h2>

            <p>
              Botas has officially approved this relationship 🐾
            </p>

            <button
              className="primary-button"
              onClick={onNext}
            >
              Continue Adventure
            </button>

          </div>
        )}

      </div>
    </section>
  );
}

export default PuzzleBotas;