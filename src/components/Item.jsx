// eslint-disable-next-line react/prop-types
const Item = ({ item: { name, Icon } }) => {
  return (
    <>
      <section className="hidden  text-white xl:flex gap-3 items-center hover:cursor-pointer hover:underline hover:underline-offset-8  ">
        <Icon className="md:w-6 md:h-6 text-white" />
        <p className="text-white italic text-2xl ">{name}</p>
      </section>
    </>
  );
};
export default Item;
