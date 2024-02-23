/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line react/prop-types, no-unused-vars
import { useEffect, useState } from "react";
import { PARTICULAR_GENRE_VIDEOS } from "../utils/constants";
import MoviePoster from "./MoviePoster";
const GenreVideos = ({ id }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    moviesList();
  }, []);
  const moviesList = async () => {
    const data = await fetch(PARTICULAR_GENRE_VIDEOS + id);
    const json = await data.json();
    setMovies(json?.results);
  };
  if (movies?.length === 0) {
    return;
  }
  return (
    <>
      <section>
        {movies?.map((movie) => (
          <MoviePoster key={movie?.id} />
        ))}
      </section>
    </>
  );
};
export default GenreVideos;
