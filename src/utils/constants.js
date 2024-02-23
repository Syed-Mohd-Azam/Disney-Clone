import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { IoStarOutline } from "react-icons/io5";
import { PiTelevisionLight } from "react-icons/pi";
import { RiMovie2Line } from "react-icons/ri";
import Disney from "../images/disney.png";
import Marvel from "../images/marvel.png";
import National from "../images/nationalG.png";
import Pixar from "../images/pixar.png";
import Starwar from "../images/starwar.png";
import DisneyVideo from "../videos/disney.mp4";
import MarvelVideo from "../videos/marvel.mp4";
import NationalVideo from "../videos/national-geographic.mp4";
import PixarVideo from "../videos/pixar.mp4";
import StarVideo from "../videos/star-wars.mp4";
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
export const productionHouse = [
  {
    id: 1,
    img: Disney,
    video: DisneyVideo,
  },
  {
    id: 2,
    img: Marvel,
    video: MarvelVideo,
  },
  {
    id: 3,
    img: National,
    video: NationalVideo,
  },
  {
    id: 4,
    img: Pixar,
    video: PixarVideo,
  },
  {
    id: 5,
    img: Starwar,
    video: StarVideo,
  },
];
export default itemsList;
export const API_KEY = "15f1925c1cc294aea0d2a293f918c656";
export const TRENDING_API =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=" + API_KEY;
export const POSTER_PATH_URL = "https://image.tmdb.org/t/p/w500/";

export const GENRE_API =
  "https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=" +
  API_KEY;
