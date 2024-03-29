/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line react/prop-types, no-unused-vars
import { useEffect, useRef, useState } from "react";
import { PARTICULAR_GENRE_VIDEOS } from "../utils/constants";
import MoviePoster from "./MoviePoster";
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
const GenrePosters = ({ id }) => {
  const [movies, setMovies] = useState([]);
  const myRef = useRef();
  useEffect(() => {
    moviesList();
  }, []);
  const moviesList = async () => {
    const data = await fetch(PARTICULAR_GENRE_VIDEOS + id);
    const json = await data.json();
    setMovies(json?.results);
  };
  const scrollRight = (element) => {
    element.scrollLeft += 500;
  };
  const scrollLeft = (element) => {
    element.scrollLeft -= 500;
  };
  if (movies?.length === 0) {
    return;
  }
  return (
    <>
      <article className="relative">
        <FaLessThan
          className="hidden sm:block  text-white sm:w-[20px] sm:h-[20px]   lg:w-[30px] lg:h-[30px] absolute top-1/2 left-0 hover:cursor-pointer z-100 mr-4"
          onClick={() => scrollLeft(myRef.current)}
        />
        <section
          className="w-11/12 mx-auto flex flex-row overflow-x-auto gap-4 scrollbar-hide scroll-smooth transition-all ease-out duration-100  "
          ref={myRef}
        >
          {movies?.map((movie) => (
            <MoviePoster key={movie?.id} movie={movie} />
          ))}
        </section>
        <FaGreaterThan
          className="hidden sm:block text-white  sm:w-[20px] sm:h-[20px]  lg:w-[30px] lg:h-[30px] absolute top-1/2 right-0 hover:cursor-pointer z-100 ml-4"
          onClick={() => scrollRight(myRef.current)}
        />
      </article>
    </>
  );
};
export default GenrePosters;
