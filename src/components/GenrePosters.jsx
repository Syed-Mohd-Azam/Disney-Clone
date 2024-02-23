/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line react/prop-types, no-unused-vars
import { useEffect, useRef, useState } from "react";
import { PARTICULAR_GENRE_VIDEOS } from "../utils/constants";
import MoviePoster from "./MoviePoster";
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
const GenrePosters = ({ id }) => {
  const myRef = useRef();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    moviesList();
  }, []);
  const moviesList = async () => {
    const data = await fetch(PARTICULAR_GENRE_VIDEOS + id);
    const json = await data.json();
    setMovies(json?.results);
  };
  const scrollLeft = () => {
    if (myRef.current) {
      myRef.current.scrollLeft -= 500;
    }
  };
  const scrollRight = () => {
    if (myRef.current) {
      myRef.current.scrollLeft += 500;
    }
  };
  if (movies?.length === 0) {
    return;
  }
  return (
    <>
      <section
        className="flex flex-row overflow-x-auto gap-4 scrollbar-hide scroll-smooth transition-all ease-in-out duration-300 relative"
        ref={myRef}
      >
        <FaLessThan
          className="text-white  w-[50px] h-[50px] absolute top-1/2 left-6 hover:cursor-pointer "
          onClick={scrollLeft}
        />
        {movies?.map((movie) => (
          <MoviePoster key={movie?.id} movie={movie} />
        ))}
        <FaGreaterThan
          className="text-white  w-[50px] h-[50px] absolute top-1/2 right-5 hover:cursor-pointer"
          onClick={scrollRight}
        />
      </section>
    </>
  );
};
export default GenrePosters;
