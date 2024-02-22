/* eslint-disable no-unused-vars */
import { productionHouse } from "../utils/constants";
import Production from "./Production";
const ProductionHouse = () => {
  return (
    <>
      <section className="flex flex-row w-11/12 mx-auto gap-10 px-10">
        {productionHouse?.map(({ id, video, img }) => (
          <>
            <Production key={id} img={img} video={video} />
          </>
        ))}
      </section>
    </>
  );
};
export default ProductionHouse;
