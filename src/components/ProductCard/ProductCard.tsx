import "./ProductCard.css";
import { FaPlusCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { IProduct } from "../../main/Main";

const ProductCard = ({
  productData,
  isChecked,
  setSelectedProduct,
  timeLeft,
}: {
  productData: IProduct;
  isChecked: boolean;
  // setSelectedProduct: React.Dispatch<React.SetStateAction<IProduct>>;
  setSelectedProduct: (data: IProduct) => void;
  timeLeft: string;
}) => {
  return (
    <div
      className="w-full overflow-hidden rounded-md border border-gray-400 mb-4 cursor-pointer"
      onClick={() => setSelectedProduct(productData)}
    >
      <div className="overflow-hidden flex">
        <div className="w-[62%] lg:w-[68%] p-1 bg-orange-400 flex items-center justify-start">
          <h6 className="font-[500] lg:font-[700] font-sans text-xl lg:text-3xl text-start text-white">
            {productData.heading}
          </h6>
        </div>

        <div className="w-[38%] lg:w-[32%] p-1 flex justify-center items-center product-card-right-header relative z-10">
          <img
            className="w-[20px] z-20 mr-1 lg:mr-3"
            src="box-icon.svg"
            alt=""
          />
          <h6 className="font-[400] lg:font-[700] font-sans text-md lg:text-lg z-20">
            FREE SHIPPING
          </h6>
        </div>
      </div>
      <div className="relative">
        <div className="flex justify-between ps-2 lg:ps-14 pe-1 lg:pe-4 py-4 gap-2">
          <div className="flex flex-col lg:flex-row justify-start items-center gap-2 w-[50%] lg:w-[65%]">
            <img
              className="w-[90px] lg:w-[160px]"
              src={productData.gummiesImage}
              alt=""
            />
            <FaPlusCircle size={28} />
            <img
              className="w-[90px] lg:w-[160px]"
              src={productData.gummiesImage}
              alt=""
            />
          </div>
          <div className="text-center flex items-center justify-center w-[50%] lg:w-[35%]">
            <div>
              <h6 className="text-red-600 font-[500] text-[18px] leading-5">
                <i>{productData.title}</i>
              </h6>
              <h3 className="font-oswald font-[400] text-[36px] leading-10 underline">
                {productData.promoPricePerBottle}
              </h3>
              <small className="font-oswald font-[400] text-[14px] leading-7">
                bottle
              </small>
              <p className="font-oswald font-[600] text-[14px]">
                Retail -{" "}
                <span className="line-through">
                  {productData.retailPricePerBottle}
                </span>
              </p>
              {isChecked ? (
                <button className="text-white font-bold bg-orange-400 px-6 py-2 rounded-md text-[18px]">
                  Selected!
                </button>
              ) : (
                <button className="text-white font-bold bg-orange-500 px-6 py-2 rounded-md text-[18px]">
                  Select Package
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0  hidden lg:block">
          <div className="h-full flex items-center">
            <div
              className={`${isChecked ? "checkMarkArea" : ""} hidden lg:block`}
            >
              <FaRegCircle size={32} className="ms-3" color="#63aee4" />
            </div>

            {productData.showSavePrice && (
              <div className="absolute left-[340px] top-14 w-[80px]">
                <img className="" src="package-save.svg" alt="" />
                <div className="relative bottom-[60px] left-[0px] text-center">
                  <h6 className="font-oswald text-[16px] leading-6">SAVE</h6>
                  <p className="font-oswald text-[13px]">
                    {productData.savePrice}
                  </p>
                </div>
              </div>
            )}

            {productData.showTimeLeft && (
              <div className="absolute bottom-0 right-0 left-0 bg-transparent text-center">
                <p className="font-oswald text-[14px] leading-5 font-bold mr-20">
                  Acceptance of applications ends in:{" "}
                  <span className="text-red-500">{timeLeft}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
