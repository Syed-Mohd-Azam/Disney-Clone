/* eslint-disable react/prop-types */
const ItemMedium = ({ item: { Icon } }) => {
  return (
    <>
      <section className="hidden md:flex xl:hidden  text-white  gap-3 items-center hover:cursor-pointer hover:underline hover:underline-offset-8  ">
        <Icon className="md:w-8 md:h-8 text-white" />
      </section>
    </>
  );
};
export default ItemMedium;
