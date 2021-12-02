export default function Hero({ title, backdrop }) {
  return (
    <header className="bg-dark text-white p-5 hero-container">
      <h1 className="hero-text">{title}</h1>
      {backdrop && (
        <>
          <div
            className="hero-backdrop"
            style={{ backgroundImage: `url(${backdrop})` }}
          ></div>
        </>
      )}
    </header>
  );
}
