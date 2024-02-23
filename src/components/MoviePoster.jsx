/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { POSTER_PATH_URL } from "../utils/constants";
const MoviePoster = ({ movie: { poster_path } }) => {
  return (
    <>
      <img
        src={POSTER_PATH_URL + poster_path}
        alt="Movie-Poster"
        className="w-[200px]"
      />
    </>
  );
};
export default MoviePoster;
