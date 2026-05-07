import { useRef, useState } from "react";

function FinalGift() {
  const [tickets, setTickets] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const audioRef = useRef(null);

  const addTicket = () => {
    const nextTickets = Math.min(tickets + 1, 2);
    setTickets(nextTickets);

    if (nextTickets === 2) {
      setRevealed(true);

      setTimeout(() => {
        audioRef.current?.play();
      }, 500);
    }
  };

  return (
    <section className="screen">
      <div className="glass-card">
        <p className="eyebrow">THE FINAL GIFT</p>

        <h2>Your Surprise</h2>

        <p>
          Place the two tickets inside the box to reveal your present.
        </p>

        <audio
          ref={audioRef}
          src="/music/kapo-song.mp3"
        />

        <div className="tickets-row">
          <button
            className={`ticket ${tickets >= 1 ? "used" : ""}`}
            onClick={addTicket}
            disabled={tickets >= 1}
          >
            Ticket 1
          </button>

          <button
            className={`ticket ${tickets >= 2 ? "used" : ""}`}
            onClick={addTicket}
            disabled={tickets < 1 || tickets >= 2}
          >
            Ticket 2
          </button>
        </div>

        <div className={revealed ? "gift-box open" : "gift-box"}>
          <div className="box-lid"></div>
          <div className="box-body"></div>
        </div>

        {revealed && (
          <div className="reveal-card">
            <h1>We are going to Kapo&apos;s concert</h1>

            <p>
              Two tickets, one night, and a memory we will never forget.
            </p>

            <img
              className="song-image"
              src="/images/song2.jpeg"
              alt="Kapo song reveal"
            />

            <p className="small-note">
              I love you, princess.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default FinalGift;