/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
const Production = ({ img, video }) => {
  return (
    <>
      <section className="border border-1 border-white rounded-lg w-full px-3 py-2  hover:scale-90 relative hover:border-none hover:cursor-pointer transition-all duration-300 ease-in-out">
        <video
          src={video}
          loop
          autoPlay
          playsInline
          className="absolute top-0 left-0 rounded-lg opacity-0 hover:opacity-50"
        />
        <img src={img} alt="Production-House-Image" />
      </section>
    </>
  );
};
export default Production;
