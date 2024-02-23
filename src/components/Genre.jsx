import { useEffect, useState } from "react";
import { GENRE_API } from "../utils/constants";
import GenrePosters from "./GenrePosters";
const Genre = () => {
  const [genre, setGenre] = useState([]);
  useEffect(() => {
    fetchGenre();
  }, []);
  const fetchGenre = async () => {
    const genre = await fetch(GENRE_API);
    const genreData = await genre.json();
    setGenre(genreData?.genres);
  };
  if (genre?.length === 0) {
    return;
  }
  return (
    <>
      <section className="w-11/12  mx-auto px-10 py-10">
        {genre?.map(({ id, name }) => (
          <>
            <article key={id} className="py-10">
              <p className="text-white md:text-4xl text-3xl mb-16 italic">
                {name}
              </p>
              <GenrePosters id={id} />
            </article>
          </>
        ))}
      </section>
    </>
  );
};
export default Genre;
