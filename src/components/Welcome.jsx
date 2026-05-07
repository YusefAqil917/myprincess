const images = Array.from(
  { length: 20 },
  (_, i) => `/images/welcome${i + 1}.jpg`
);

function Welcome({ onNext }) {
  return (
    <section className="screen welcome">
      <div className="hearts">♡ ♡ ♡ ♡ ♡</div>

      <h1>Welcome Princess</h1>

      <p>
        There is something very special waiting for you at the end...
        but first you must complete this little adventure made just for you.
      </p>

      <div className="photo-grid">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Memory ${index + 1}`}
          />
        ))}
      </div>

      <button onClick={onNext}>
        Start Adventure
      </button>
    </section>
  );
}

export default Welcome;