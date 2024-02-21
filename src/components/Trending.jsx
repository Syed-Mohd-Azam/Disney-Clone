import { useEffect, useRef, useState } from "react";
import { TRENDING_API } from "../utils/constants";
import { POSTER_PATH_URL } from "../utils/constants";
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
const Trending = () => {
  const elementRef = useRef();
  const [movies, setMovies] = useState();
  useEffect(() => {
    trendingMovies();
  }, []);
  const screenWidth = window.innerWidth;
  const trendingMovies = async () => {
    const moviesData = await fetch(TRENDING_API);
    const jsonData = await moviesData.json();
    console.log(jsonData?.results);
    setMovies(jsonData?.results);
  };
  const scrollLeft = (element) => {
    console.log(element);
    element.scrollLeft -= screenWidth - 80;
  };
  const scrollRight = (element) => {
    console.log(element);
    element.scrollLeft += screenWidth - 80;
  };
  if (movies?.length === 0) {
    return;
  }
  return (
    <>
      <section
        className=" w-full flex flex-row px-16 py-5 overflow-hidden  scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        <article className="absolute top-1/2 left-8">
          <FaLessThan
            className="text-black  bg-white w-8 h-8 p-2 rounded-md hover:cursor-pointer "
            style={{ position: "absolute" }}
            onClick={() => scrollLeft(elementRef.current)}
          />
        </article>
        {movies?.map((movie) => (
          <img
            className="min-w-full h-[300px] object-fill  mr-12 rounded-lg"
            key={movie?.id}
            src={POSTER_PATH_URL + movie?.backdrop_path}
            alt="Trending-Banner-Image"
          />
        ))}
        <article className="absolute top-1/2 right-10">
          <FaGreaterThan
            className="text-black  bg-white w-8 h-8 p-2 rounded-md hover:cursor-pointer z-50"
            style={{ position: "absolute" }}
            onClick={() => scrollRight(elementRef.current)}
          />
        </article>
      </section>
    </>
  );
};
export default Trending;
