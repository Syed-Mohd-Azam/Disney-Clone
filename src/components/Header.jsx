/* eslint-disable react/jsx-key */
import Profile from "../assets/Profile-Image.png";
import Disney from "../assets/Disney.png";
import itemsList from "../utils/constants";
import ItemLarge from "./ItemLarge";
import ItemMedium from "./ItemMedium";
import Item from "./Item";
const Header = () => {
  return (
    <>
      <section className=" flex items-center justify-between px-6">
        <article className="flex items-center md:gap-16 gap-5">
          <img
            className="w-[80px] h-[80px]  sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] hover:cursor-pointer bg-blend-multiply"
            src={Disney}
            alt="Disney-Image"
          />
          <section className="flex gap-8 items-center mt-5">
            {itemsList.map((item, index) => (
              <ItemLarge key={index} item={item} />
            ))}
            {itemsList.map((item, index) => (
              <ItemMedium key={index} item={item} />
            ))}
            {<Item items={itemsList} />}
          </section>
        </article>
        <article className="flex items-center justify-center">
          <img
            className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] rounded-full"
            src={Profile}
            alt="Profile-Image"
          />
        </article>
      </section>
    </>
  );
};
export default Header;
