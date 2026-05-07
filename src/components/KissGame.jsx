import { useState } from "react";
import confetti from "canvas-confetti";

function KissGame({ onNext }) {
  const [kissed, setKissed] = useState(false);

  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", "kiss");
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setKissed(true);
    confetti({ particleCount: 100, spread: 75, origin: { y: 0.7 } });
  };

  return (
    <section className="screen">
      <div className="glass-card">
        <p className="eyebrow">Level 3</p>
        <h2>The Missing Kiss</h2>
        <p>Drag the kiss to my cheek so I can be happy again.</p>

        <div className="kiss-game-area">
          <div className="kiss-token" draggable onDragStart={handleDragStart}>
            💋
          </div>

          <div className="cheek-zone" onDragOver={allowDrop} onDrop={handleDrop}>
            <img src="/images/my-cheek.jpg" alt="My cheek" />
            <span>Drop the kiss here</span>
          </div>
        </div>

        {kissed && (
          <div className="success-box">
            <img className="happy-photo" src="/images/me-happy.jpg" alt="Me happy" />
            <p>Now I am happy again.</p>
            <button className="primary-button" onClick={onNext}>
              Continue
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default KissGame;
