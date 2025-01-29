import Image from "next/image";
import greenman from "@/app/images/shop-hero-2-png-picture-1.png";

const GreenDiv = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto rounded-[5px] bg-[#23856D] relative border lg:my-[1415px] max-sm:my-[4700px]">
      <div className="w-full h-auto py-[80px] flex flex-col sm:flex-row items-center sm:gap-[80px] px-6">
        {/* Left Section */}
        <div className="flex flex-col items-center sm:items-center gap-[30px] sm:w-[50%] text-center mx-auto">
          <h4 className="font-Montserrat font-normal text-[24px] leading-[34px] text-white">
            SUMMER 2020
          </h4>
          <h1 className="font-Montserrat font-bold text-[48px] sm:text-[70px] leading-[50px] sm:leading-[100px] text-white">
            Vita Classic Product
          </h1>
          <p className="font-Montserrat font-medium text-[18px] leading-[28px] text-white w-[80%] sm:w-[70%]">
            We know how large objects will act, we know how objects will act, we know.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-[20px] sm:gap-[34px] mx-auto">
            <h3 className="font-Montserrat font-bold text-[28px] leading-[38px] text-white">
              $16.48
            </h3>
            <a
              href="#"
              className="rounded-[5px] bg-[#2DC071] px-[50px] py-[20px] flex items-center justify-center gap-[12px] hover:bg-[#23855D] transition duration-300"
            >
              <h1 className="font-Montserrat text-[16px] leading-[24px] text-white">
                ADD TO CART
              </h1>
            </a>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full sm:w-[50%] flex justify-center items-center mt-[40px] sm:mt-0">
          <Image
            src={greenman}
            alt="picman"
            className="w-full sm:w-[90%] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default GreenDiv;
