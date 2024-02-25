/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { POSTER_PATH_URL } from "../utils/constants";
const MoviePoster = ({ movie: { poster_path } }) => {
  return (
    <>
      <img
        src={POSTER_PATH_URL + poster_path}
        alt="Movie-Poster"
        className="md:w-[250px] sm:w-[150px] w-[100px] hover:scale-125 p-2 rounded-2xl hover:cursor-pointer hover:transition-all hover:ease-in-out hover:duration-300 shadow-lg z-0"
      />
    </>
  );
};
export default MoviePoster;
