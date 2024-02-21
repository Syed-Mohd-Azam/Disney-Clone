/* eslint-disable react/jsx-key */
import Profile from "../assets/Profile-Image.png";
import Disney from "../assets/Disney+_Image.png";
import itemsList from "../utils/constants";
import Item from "./Item";
const Header = () => {
  return (
    <>
      <section className="flex items-center justify-between px-6">
        <article className="flex items-center md:gap-10 gap-5">
          <img
            className="w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] hover:cursor-pointer"
            src={Disney}
            alt="Disney-Image"
          />
          <section className="flex gap-8 items-center mt-5">
            {itemsList.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </section>
        </article>
        <article>
          <img
            className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] rounded-full"
            src={Profile}
            alt="Profile-Image"
          />
        </article>
      </section>
    </>
  );
};
export default Header;
