/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { BsThreeDotsVertical } from "react-icons/bs";
import itemsList from "../utils/constants";
import { useState } from "react";
const Item = ({ items }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <section className="flex items-center gap-4 sm:hidden">
        {items.map(
          ({ Icon }, index) =>
            index < 3 && (
              <>
                <Icon className="text-white w-4 h-4" />
              </>
            )
        )}
        <article className="flex flex-col  ">
          <BsThreeDotsVertical
            className="text-white w-4 h-4"
            onClick={() => setToggle(!toggle)}
          />
          {toggle ? (
            <section className="p-4 border-2 border-white rounded-xl absolute  top-24 left-1/2 z-20">
              {itemsList.map(
                ({ Icon, name }, index) =>
                  index > 2 && (
                    <>
                      <article className="text-white flex flex-row gap-3 py-3 hover:underline hover:underline-offset-8 ">
                        <Icon className="text-white w-4 h-4 " />
                        <p className="text-white text-sm ">{name}</p>
                      </article>
                    </>
                  )
              )}
            </section>
          ) : null}
        </article>
      </section>
    </>
  );
};
export default Item;
