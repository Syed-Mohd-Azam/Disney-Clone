/* eslint-disable react/prop-types */
import GenrePosters from "./GenrePosters";
const ParticularGenre = ({ id, name }) => {
  return (
    <>
      <section>
        <p className="text-white md:text-4xl text-2xl sm:text-3xl mb-10 italic ">
          {name}
        </p>
        <GenrePosters id={id} />
      </section>
    </>
  );
};
export default ParticularGenre;
