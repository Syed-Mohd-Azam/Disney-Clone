import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { IoStarOutline } from "react-icons/io5";
import { PiTelevisionLight } from "react-icons/pi";
import { RiMovie2Line } from "react-icons/ri";
const itemsList = [
  {
    Icon: GoHome,
    name: "Home",
  },
  {
    Icon: CiSearch,
    name: "Search",
  },
  {
    Icon: FiPlus,
    name: "WatchList",
  },
  {
    Icon: IoStarOutline,
    name: "Originals",
  },
  {
    Icon: RiMovie2Line,
    name: "Movies",
  },
  {
    Icon: PiTelevisionLight,
    name: "Series",
  },
];
export default itemsList;
export const API_KEY = "15f1925c1cc294aea0d2a293f918c656";
export const TRENDING_API =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=" + API_KEY;
export const POSTER_PATH_URL = "https://image.tmdb.org/t/p/w500/";
