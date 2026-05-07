import { useState } from "react";
import confetti from "canvas-confetti";

function FinalGift() {
  const [ticketsPlaced, setTicketsPlaced] = useState(0);
  const isOpen = ticketsPlaced >= 2;

  const placeTicket = () => {
    setTicketsPlaced((current) => {
      const next = Math.min(current + 1, 2);
      if (next === 2) {
        setTimeout(() => {
          confetti({ particleCount: 220, spread: 110, origin: { y: 0.6 } });
        }, 250);
      }
      return next;
    });
  };

  return (
    <section className="screen final-screen">
      <div className="glass-card final-card">
        <p className="eyebrow">The final gift</p>
        <h2>Your Surprise</h2>
        <p>Place the two tickets inside the box to reveal your present.</p>

        <div className="tickets-row">
          <button
            className={`ticket ${ticketsPlaced >= 1 ? "used" : ""}`}
            onClick={placeTicket}
            disabled={ticketsPlaced >= 1}
          >
            Ticket 1
          </button>
          <button
            className={`ticket ${ticketsPlaced >= 2 ? "used" : ""}`}
            onClick={placeTicket}
            disabled={ticketsPlaced >= 2 || ticketsPlaced < 1}
          >
            Ticket 2
          </button>
        </div>

        <p className="hint">Tickets placed: {ticketsPlaced}/2</p>

        <div className={`gift-box ${isOpen ? "open" : ""}`}>
          <div className="box-lid"></div>
          <div className="box-body"></div>
        </div>

        {isOpen && (
          <div className="reveal-card">
            <h1>We are going to Kapo's concert</h1>
            <p>Two tickets, one night, and a memory we will never forget.</p>
            <p className="small-note">I love you, princess.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default FinalGift;
