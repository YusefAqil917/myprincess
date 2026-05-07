import { useState } from "react";

function Countdown({ onNext }) {
  const [number, setNumber] = useState(7);
  const [started, setStarted] = useState(false);

  const startCountdown = () => {
    if (started) return;
    setStarted(true);

    let current = 7;
    const intervalId = setInterval(() => {
      current -= 1;
      setNumber(current);

      if (current === 0) {
        clearInterval(intervalId);
        setTimeout(onNext, 900);
      }
    }, 1000);
  };

  return (
    <section className="screen countdown-screen">
      <div className="glass-card countdown-card">
        <p className="eyebrow">Final countdown</p>
        <h2>Our Lucky Number</h2>
        <p>Press the button and let the magic begin from number 7.</p>

        {!started ? (
          <button className="primary-button" onClick={startCountdown}>
            Start countdown
          </button>
        ) : (
          <div className="big-number">{number}</div>
        )}
      </div>
    </section>
  );
}

export default Countdown;
