import MainLeftContent from "../components/MainLeftContent/MainLeftContent";
import PaymentInfoPart from "../components/PaymentInfoPart/PaymentInfoPart";
import "./main.css";

const Main = () => {
  return (
    <div className="max-w-screen main main-bg-image font-poppins text-[14px] leading-4">
      <header>
        <p className="text-center text-sm">
          <span className="text-[#f00]">Warning:</span> Due to extremely high
          media demand, there is limited supply of TranquilVibe CBD Gummies in
          stock as of <span className="text-[#f00]">HURRY! Expired</span>
        </p>
      </header>

      <div className="w-full flex justify-center">
        <div className="w-[1000px] mt-6">
          <section className="w-[100%] flex justify-between items-center py-10">
            <div className="">
              <img className="w-[101px]" src="logo@2x.png" />
            </div>
            <div className="flex items-center justify-end gap-2">
              <img className="w-[148px]" src="ca2.svg" />
              <p className="">
                Internet Exclusive Offers <br /> Available to USA Residents Only
              </p>
            </div>
          </section>

          <main className="flex gap-4">
            <div className="w-[68%]">
              <MainLeftContent />
            </div>
            <div className="w-[32%] overflow-hidden ">
              <PaymentInfoPart />
            </div>
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
    </div>
  );
};

export default Main;
