import Profile from "../assets/Profile-Image.png";
import Disney from "../assets/Disney+_Image.png";
const Header = () => {
  return (
    <>
      <section className="flex items-center justify-between">
        <article className="flex items-center gap-4 ">
          <img
            className="min-w-8 min-h-8 w-[120px]"
            src={Disney}
            alt="Disney-Image"
          />
          <section className="flex gap-2 items-center"></section>
        </article>
        <article>
          <img
            className="min-w-8 min-h-8 w-[70px] h-[70px] rounded-full"
            src={Profile}
            alt="Profile-Image"
          />
        </article>
      </section>
    </>
  );
};
export default Header;
