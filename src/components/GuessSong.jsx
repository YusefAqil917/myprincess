import { useRef, useState } from "react";
import confetti from "canvas-confetti";

const ACCEPTED_ANSWERS = [
  "song name",
  "nombre de la cancion",
  "nombre de la canción"
];

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function GuessSong({ onNext }) {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [message, setMessage] = useState("");
  const audioRef = useRef(null);

  const checkAnswer = async () => {
    const normalizedAnswer = normalizeText(answer);
    const isMatch = ACCEPTED_ANSWERS.some(
      (acceptedAnswer) => normalizeText(acceptedAnswer) === normalizedAnswer
    );

    if (!isMatch) {
      setMessage("Mmm, not yet. Think about the song that feels like you.");
      return;
    }

    setIsCorrect(true);
    setMessage("Correct, princess.");
    confetti({ particleCount: 140, spread: 90, origin: { y: 0.65 } });

    try {
      await audioRef.current.play();
    } catch {
      setMessage("Correct, princess. Press play if the song does not start automatically.");
    }
  };

  return (
    <section className="screen song-screen">
      <div className="glass-card">
        <p className="eyebrow">Level 2</p>
        <h2>Guess the Song</h2>
        <p>These lyrics belong to a song that reminds me of you.</p>

        <div className="lyrics-box">
          <p>“Lyric phrase number one...”</p>
          <p>“Lyric phrase number two...”</p>
          <p>“Lyric phrase number three...”</p>
        </div>

        <input
          type="text"
          value={answer}
          placeholder="Write the song name here"
          onChange={(event) => setAnswer(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") checkAnswer();
          }}
        />

        <button className="primary-button" onClick={checkAnswer}>
          Check answer
        </button>

        {message && <p className="feedback-message">{message}</p>}

        <audio ref={audioRef} src="/music/song.mp3" controls={isCorrect} />

        {isCorrect && (
          <div className="song-reveal">
            <div className="mini-gallery">
              <img src="/images/song1.jpg" alt="Memory 1" />
              <img src="/images/song2.jpg" alt="Memory 2" />
            </div>
            <button className="primary-button" onClick={onNext}>
              Continue
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default GuessSong;
