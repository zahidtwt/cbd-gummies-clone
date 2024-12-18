import ProductCard from "../ProductCard/ProductCard";
import { IProduct } from "../../main/Main";

const MainLeftContent = ({
  productList,
  selectedProduct,
  setSelectedProduct,
  timeLeft,
}: {
  productList: IProduct[];
  selectedProduct: IProduct | null;
  // setSelectedProduct: React.Dispatch<React.SetStateAction<IProduct>>;
  setSelectedProduct: (data: IProduct) => void;
  timeLeft: string;
}) => {
  return (
    <div className="w-full pb-6">
      <div className="w-full border border-gray-400 p-1 lg:p-4 bg-white mb-4">
        <div className="flex gap-1 lg:gap-2 text-[10px] lg:text-[16px] pb-3">
          <button className="bg-gray-400/40 rounded-md p-3 w-full">
            1. Shipping Info
          </button>
          <button className="bg-orange-500 text-white rounded-md p-3 w-full ">
            2. Finish Order
          </button>
          <button className="bg-gray-400/40 rounded-md p-3 w-full">
            3. Summary
          </button>
        </div>

        <h6 className="pb-2">
          <strong>
            <span className="text-green-400">APPROVED!</span> Free Bottle
            Packages Confirmed
          </strong>
        </h6>

        <p className="font-[500] leading-5">
          Limited supply available as of . We currently have product{" "}
          <strong>in stock </strong>
          and ready to ship within 24 hours.
        </p>
        <p className="font-[500] leading-5">
          Sell Out Risk:
          <span className="text-red-500"> HIGH</span>
        </p>
        <p className="font-[500] leading-5 mt-2">
          Our THCA Cannabis Is Carefully Cultivated By Our Master Growers
          <br /> WARNING -
          <span className="text-red-500">HIGH THC-A PRODUCT</span>
        </p>
      </div>

      {productList.map((product) => (
        <ProductCard
          key={product.id}
          productData={product}
          isChecked={(selectedProduct?.id || null) === product.id}
          setSelectedProduct={setSelectedProduct}
          timeLeft={timeLeft}
        />
      ))}

      <div className="w-full">
        <img
          className="w-full h-[auto] py-6 px-8 lg:py-12 lg:px-16"
          src="secureicons_14.svg"
          alt=""
        />
      </div>

      <div className="rounded-md overflow-hidden border border-gray-400">
        <div className="bg-black text-white leading-9">
          <h5 className="font-[600] text-[16px] lg:text-[24px] text-center">
            30 day money back guarantee
          </h5>
        </div>

        <p className="text-center leading-6">
          We are so confident in our products and services, that we back it with
          a 30 day money back guarantee. If for any reason you are not fully
          satisfied with our products, simply return any unopened products
          within 30 days from when the order was placed. We will refund you
          purchase with absolutely no hassle.
        </p>
      </div>
    </div>
  );
};

export default MainLeftContent;
