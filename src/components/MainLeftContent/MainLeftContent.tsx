import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

export interface IProduct {
  id: number;
  heading: string;
  gummiesImage: string;
  showSavePrice: boolean;
  savePrice: string;
  title: string;
  price: string;
  retailPrice: string;
  image: string;
}

const MainLeftContent = () => {
  const productList: IProduct[] = [
    {
      id: 3,
      heading: "BUY 3 GET 3 FREE",
      gummiesImage: "3bottles.png",
      showSavePrice: true,
      savePrice: "$132.45",
      title: "6 Month CBD Relief Pack",
      price: "$39.99",
      retailPrice: "$66.64",
      image: "3bottles.png",
    },
    {
      id: 2,
      heading: "BUY 2 GET 2 FREE",
      gummiesImage: "2bottles.png",
      showSavePrice: true,
      savePrice: "$74.95",
      title: "4 Month CBD Relief Pack",
      price: "$47.49",
      retailPrice: "$74.95",
      image: "2bottles.png",
    },
    {
      id: 1,
      heading: "BUY 1 GET 1 FREE",
      gummiesImage: "1bottle.png",
      showSavePrice: false,
      savePrice: "",
      title: "2 Month CBD Relief Pack",
      price: "$64.99",
      retailPrice: "$79.99",
      image: "1bottle.png",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState<IProduct>(
    productList[0]
  );

  return (
    <div className="w-full pb-6">
      <div className="w-full border border-gray-400 p-4 bg-white mb-4">
        <div className="flex gap-2 text-[16px] pb-3">
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
      </div>

      {productList.map((product) => (
        <ProductCard
          key={product.id}
          productData={product}
          isChecked={selectedProduct.id === product.id}
          setSelectedProduct={setSelectedProduct}
        />
      ))}

      <div className="w-full">
        <img
          className="w-full h-[auto] py-12 px-16"
          src="secureicons_14.svg"
          alt=""
        />
      </div>

      <div className="rounded-md overflow-hidden border border-gray-400">
        <div className="bg-black text-white leading-9">
          <h5 className="font-[600] text-[24px] text-center">
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
