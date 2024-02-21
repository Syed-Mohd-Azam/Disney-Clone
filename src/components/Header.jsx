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
            className="min-w-8 min-h-8 w-[120px] hover:cursor-pointer"
            src={Disney}
            alt="Disney-Image"
          />
          <section className="flex gap-3  md:gap-8 items-center mt-5">
            {itemsList.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </section>
        </article>
        <article>
          <img
            className="min-w-[5px] min-h-[5px] w-[50px] h-[50px] rounded-full"
            src={Profile}
            alt="Profile-Image"
          />
        </article>
      </section>
    </>
  );
};
export default Header;
