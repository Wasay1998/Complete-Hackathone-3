import Image from "next/image";
import Men from "@/app/images/filter.png";
import women from "@/app/images/filter (1).png";
import div1 from "@/app/images/filter (2).png";
import div2 from "@/app/images/filter (3).png";

const Editors = () => {
  return (
    <div className="w-full flex justify-center py-10 bg-[#f5f5f5] relative max-sm:mt-[-60px]">
      <div className="w-full max-w-[1500px] h-auto flex flex-col gap-8 bg-[#FAFAFA] p-6 md:p-10">
        {/* Title Section */}
        <div className="flex flex-col items-center gap-2.5">
          <h3 className="font-Montserrat font-semibold text-[20px] sm:text-2xl leading-[28px] sm:leading-8">
            EDITOR’S PICK
          </h3>
          <p className="w-full max-w-[347px] font-Montserrat font-normal text-sm leading-5 text-[#737373] text-center">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Images Section */}
        <div className="w-full flex flex-col md:flex-row gap-7">
          {/* Men Image */}
          <div className="relative w-full md:w-[600px] lg:w-[800px] xl:w-[900px] h-[350px] md:h-[530px] lg:h-[730px]">
            <Image
              src={Men}
              alt="Men"
              className="w-full h-full object-cover rounded-md"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-10 py-2.5 shadow-md font-Montserrat font-bold text-[#252B42] text-sm md:text-lg leading-6 hover:bg-gray-100">
              MEN
            </button>
          </div>

          {/* Women Image */}
          <div className="relative w-full md:w-[400px] lg:w-[500px] xl:w-[600px] h-[350px] md:h-[530px] lg:h-[730px]">
            <Image
              src={women}
              alt="Women"
              className="w-full h-full object-cover"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-10 py-2.5 shadow-md font-Montserrat font-bold text-[#252B42] text-sm md:text-lg leading-6 hover:bg-gray-100">
              WOMEN
            </button>
          </div>

          {/* Accessories and Kids Section */}
          <div className="w-full flex flex-col md:w-[350px] lg:w-[400px] xl:w-[450px] gap-7">
            {/* Accessories Image */}
            <div className="relative w-full h-[200px] md:h-[300px] lg:h-[350px]">
              <Image
                src={div1}
                alt="Accessories"
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2.5 shadow-md font-Montserrat font-bold text-[#252B42] text-sm md:text-lg leading-6 hover:bg-gray-100">
                ACCESSORIES
              </button>
            </div>

            {/* Kids Image */}
            <div className="relative w-full h-[200px] md:h-[300px] lg:h-[350px]">
              <Image
                src={div2}
                alt="Kids"
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2.5 shadow-md font-Montserrat font-bold text-[#252B42] text-sm md:text-lg leading-6 hover:bg-gray-100">
                KIDS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editors;
