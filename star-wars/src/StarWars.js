import { useState } from "react";

export default function StarWars() {
  const [loadedCharacter, setLoadedCharacter] = useState(false);
  const [name, setName] = useState(null);
  const [height, setHeight] = useState(null);
  const [homeworld, setHomeworld] = useState(null);
  const [films, setFilms] = useState([]);

  const getNewCharacter = async () => {
    const randomNumber = Math.floor(Math.random() * 82);
    const url = `https://swapi.dev/api/people/${randomNumber}/`;
    await fetch(url)
      .then((res) => res.json())
      .then(async (data) => {
        setFilms([]);
        setLoadedCharacter(true);
        setName(data.name);
        setHeight(data.height + " cm");

        await fetch(data.homeworld)
          .then((res) => res.json())
          .then((data) => setHomeworld(data.name));

        data.films.map(
          async (film) =>
            await fetch(film)
              .then((res) => res.json())
              .then((data) => setFilms((prev) => [...prev, data.title]))
        );
      });
  };

  return (
    <div>
      {loadedCharacter && (
        <>
          <h1>Name: {name}</h1>
          <p>Height: {height}</p>
          <p>Homeworld: {homeworld}</p>
          <ul>
            {films.map((film, i) => (
              <li key={i}>{film}</li>
            ))}
          </ul>
          <br />
        </>
      )}
      <button type="button" className="btn" onClick={getNewCharacter}>
        Randomize Character
      </button>
    </div>
  );
}
