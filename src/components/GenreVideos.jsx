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
      <section className="flex flex-row overflow-x-auto gap-4 scrollbar-hide scroll-smooth transition-all ease-in-out duration-300">
        {movies?.map((movie) => (
          <MoviePoster key={movie?.id} movie={movie} />
        ))}
      </section>
    </>
  );
};
export default GenreVideos;
