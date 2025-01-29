import Image from "next/image";
import Second from "@/app/images/Neha.jpg"; // Path to your image

const HeroSection = () => {
  return (
    <div className="relative w-full lg:h-[1000px] h-auto max-sm:my-[10px] mt-[10px]">
      {/* Background Image */}
      <Image
        src={Second}
        alt="Second"
        className="w-full h-full object-cover"
      />

      {/* Text and Button */}
      <div className="absolute inset-0 flex flex-col justify-center items-start lg:pl-[250px] p-6 lg:p-12 max-sm:p-4">
        <div className="text-white max-w-lg w-full max-sm:w-auto max-sm:gap-[2px]">
          {/* Small Heading */}
          <p className="lg:text-[50px] max-sm:text-[14px] font-semibold max-sm:mb-[5px]">
            Summer 2020
          </p>

          {/* Main Heading */}
          <h1 className="lg:text-[70px] max-sm:text-[24px] font-semibold leading-tight max-sm:mb-[5px]">
            New Collection
          </h1>

          {/* Description */}
          <p className="lg:text-[40px] max-sm:text-[14px] max-sm:w-[200px] font-normal max-sm:mb-[5px]">
            We know how large objects will act, but things on a small scale.
          </p>

          {/* Button */}
          <button
            className="lg:mt-4 max-sm:mt-2 lg:px-10 max-sm:px-4 lg:py-5 max-sm:py-2 bg-[#2DC071] text-white lg:text-[24px] max-sm:text-[12px] rounded hover:bg-gray-800"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
