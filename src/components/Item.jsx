// eslint-disable-next-line react/prop-types
const Item = ({ item: { name, Icon } }) => {
  return (
    <>
      <section className="flex gap-2 items-center hover:cursor-pointer">
        <Icon className="md:w-6 md:h-6 text-white w-3 h-3 sm:w-4 sm:h-4" />
        <p className="text-white italic hidden lg:block lg:text-2xl ">{name}</p>
      </section>
    </>
  );
};
export default Item;
