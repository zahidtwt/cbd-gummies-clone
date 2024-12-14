import { useState } from "react";
import MainLeftContent from "../components/MainLeftContent/MainLeftContent";
import PaymentInfoPart from "../components/PaymentInfoPart/PaymentInfoPart";
import "./main.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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

const Main = () => {
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
  const [step, setStep] = useState(1);
  const [isMobile] = useState(window.innerWidth < 1024);
  // get localStorage data
  const modalData = localStorage.getItem("isTakenFromModalData");

  const [isModalOpen, setIsModalOpen] = useState(!modalData);

  const updateSelectProduct = (data: IProduct) => {
    setSelectedProduct(data);
    setStep(2);
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < 1024) {
  //       // isMobile && setStep(1);
  //       setIsMobile(true);
  //     } else {
  //       // !isMobile && setStep(2);
  //       setIsMobile(false);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, [isMobile]);

  // const handleResize = () => {
  //   if (window.innerWidth < 1024) {
  //     // isMobile && setStep(1);
  //     setIsMobile(true);
  //   } else {
  //     // !isMobile && setStep(2);
  //     setIsMobile(false);
  //   }
  // };

  // handleResize();

  const moods = [
    {
      title: "Happy Blend",
      color: "bg-[#c11f50]",
      textColor: "text-white",
      fontFamily: "font-poppins",
    },
    {
      title: "Relax Blend",
      color: "bg-[#4571cb]",
      textColor: "text-white",
      fontFamily: "font-relax",
    },
    {
      title: "Energy Blend",
      color: "bg-[#634496]",
      textColor: "text-white",
      fontFamily: "font-energy",
    },
  ];

  return (
    <div className="max-w-screen main main-bg-image font-poppins text-[14px] leading-4 p-5 lg:p-0">
      <header>
        <p className="text-center text-sm pt-6 lg:pt-0 pl-14 lg:pl-0 pb-3 lg:pb-0">
          <span className="text-[#f00]">Warning:</span> Due to extremely high
          media demand, there is limited supply of TranquilVibe CBD Gummies in
          stock as of <span className="text-[#f00]">HURRY! Expired</span>
        </p>
      </header>

      <div className="w-full flex justify-center">
        <div className="max-w-[1000px]">
          <section className="w-full flex justify-between items-center py-6 flex-col lg:flex-row">
            <div className="">
              <img className="w-[101px]" src="logo@2x.png" />
            </div>
            {/* desktop */}
            <div className="items-center justify-end gap-2 hidden lg:flex">
              <img className="w-[148px]" src="ca2.svg" />
              <p className="">
                Internet Exclusive Offers <br /> Available to USA Residents Only
              </p>
            </div>

            {/* mobile */}
            <div className="items-center justify-end gap-2 flex lg:hidden">
              <img className="w-[36px]" src="shipping.svg" />

              <p className="">
                <b>Fast, Free Shipping</b> For A Limited Time
              </p>
            </div>
          </section>

          <main className="lg:flex gap-4">
            {(!isMobile || (isMobile && step === 1)) && (
              <div className="w-full lg:w-[68%] ">
                <MainLeftContent
                  productList={productList}
                  selectedProduct={selectedProduct}
                  setSelectedProduct={updateSelectProduct}
                />
              </div>
            )}

            {(!isMobile || (isMobile && step === 2)) && (
              <div className="w-full lg:w-[32%]">
                <PaymentInfoPart />
              </div>
            )}
          </main>

          <p className="text-center mb-10">
            *The statements made on our websites have not been evaluated by the
            FDA (U.S. Food & Drug Administration). Our products are not intended
            to diagnose, cure or prevent any disease. The information provided
            by this website or this company is not a substitute for a
            face-to-face consultation with your physician, and should not be
            construed as individual medical advice. The testimonials on this
            website are individual cases and do not guarantee that you will get
            the same results. Due to the nature of this product and to protect
            the privacy of the individuals, actual names and photographs of the
            individuals depicted in the testimonials have been changed.
            Individuals are remunerated.
          </p>
          <p className="text-center mb-10">
            © TranquilVibe CBD Gummies. All Rights Reserved.
          </p>
        </div>
      </div>

      <Dialog
        open={isModalOpen}
        onOpenChange={() => {
          setIsModalOpen(false);
        }}
      >
        {/* <DialogTrigger>Open</DialogTrigger> */}
        <DialogContent className="w-full lg:max-w-4xl">
          <DialogHeader>
            <DialogTitle>Select Your Mood</DialogTitle>
            {/* <DialogClose className="hidden" /> */}
            <DialogDescription className="w-full">
              <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4 pt-4">
                {moods.map((mood, index) => (
                  <div
                    onClick={() => {
                      setIsModalOpen(false);
                      localStorage.setItem("isTakenFromModalData", "true");
                    }}
                    key={index}
                    className={`${mood.color} rounded-lg shadow-lg w-64 h-36 flex items-center justify-center cursor-pointer`}
                  >
                    <h2
                      className={`text-2xl font-bold ${mood.textColor} ${mood.fontFamily}`}
                    >
                      <i>{mood.title}</i>
                    </h2>
                  </div>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Main;
