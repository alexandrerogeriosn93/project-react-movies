import { useEffect, useState } from "react";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedURL = `${moviesUrl}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedURL);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando filmes...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <p key={movie.title}>{movie.title}</p>)}
      </div>
    </div>
  );
};

export default Home;
