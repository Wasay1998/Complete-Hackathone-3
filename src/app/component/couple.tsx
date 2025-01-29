import Image from "next/image";
import couples from "@/app/images/couple.png";

const Whitediv = () => {
  return (
    <div className="lg:mt-[-1500px] max-sm:mt-[-4800px] w-full h-auto flex justify-center items-center relative bg-gray-50 py-12">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row gap-6 px-6 lg:px-12">
        <div className="w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-[700px] flex justify-center items-center">
          <Image
            src={couples}
            alt="Couple"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6">
          <h5 className="text-[16px] sm:text-[18px] font-Montserrat font-bold text-[#BDBDBD] mb-3">
            SUMMER 2020
          </h5>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-Montserrat font-bold leading-tight text-[#252B42] mb-5">
            Part of the Neural Universe
          </h2>
          <h4 className="text-[18px] sm:text-[20px] lg:text-[22px] font-Montserrat font-normal text-[#737373] mb-8">
            We know how large objects will act, but things on a small scale.
          </h4>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="w-[150px] sm:w-[160px] lg:w-[180px] h-[52px] rounded-[5px] bg-[#2DC071] flex justify-center items-center hover:bg-[#23855D]">
              <span className="text-[16px] font-Montserrat font-bold text-white">BUY NOW</span>
            </button>
            <button className="w-[150px] sm:w-[160px] lg:w-[180px] h-[52px] rounded-[5px] border border-[#2DC071] flex justify-center items-center hover:bg-[#2DC071] hover:text-white">
              <span className="text-[16px] font-Montserrat font-bold text-[#2DC071]">READ MORE</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whitediv;
