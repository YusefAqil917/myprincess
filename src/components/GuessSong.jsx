import { useRef, useState } from "react";

function GuessSong({ onNext }) {
  const [answer, setAnswer] = useState("");
  const [correct, setCorrect] = useState(false);

  const audioRef = useRef(null);

  const checkAnswer = () => {
    const formatted = answer
      .toLowerCase()
      .trim();

    if (
      formatted === "risk it all" ||
      formatted === "risk it all by bruno mars"
    ) {
      setCorrect(true);

      setTimeout(() => {
        audioRef.current.play();
      }, 300);
    } else {
      alert(
        "Hmmmm... that doesn't sound right 😌"
      );
    }
  };

  return (
    <section className="screen">
      <div className="glass-card">

        <p className="eyebrow">LEVEL 2</p>

        <h2>Our Song 🎶</h2>

        {!correct ? (
          <>
            <p>
              This song reminds me of you every single time.
              <br />
              Can you guess it?
            </p>

            <div className="lyrics-box">

              <p>
                “Would you risk it all?”
              </p>

              <p>
                “Even if I break and fall...”
              </p>

              <p>
                “I would risk it all for you...”
              </p>

            </div>

            <input
              type="text"
              placeholder="Type the song name..."
              value={answer}
              onChange={(e) =>
                setAnswer(e.target.value)
              }
            />

            <br />

            <button
              className="primary-button"
              onClick={checkAnswer}
            >
              Check Song
            </button>
          </>
        ) : (
          <div className="song-reveal">

            <h2>You got it 💖</h2>

            <p>
              Risk It All — Bruno Mars
            </p>

            <audio
              controls
              autoPlay
              ref={audioRef}
              src="/music/risk-it-all.mp3"
            />

            <div className="mini-gallery">

              <img src="/images/welcome1.jpeg" />
              <img src="/images/welcome5.jpeg" />
              <img src="/images/welcome9.jpeg" />

            </div>

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

export default GuessSong;