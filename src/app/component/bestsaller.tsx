import Image from "next/image";
import pic1 from "@/app/images/product-cover-5 (21).png";
import pic2 from "@/app/images/product-cover-5 (22).png";
import pic3 from "@/app/images/product-cover-5 (23).png";
import pic4 from "@/app/images/product-cover-5 (24).png";
import pic5 from "@/app/images/product-cover-5 (25).png";
import pic6 from "@/app/images/product-cover-5 (20).png";
import CardT2 from "@/app/component/card2";
import cm1 from "@/app/images/fa-brands-1.png";
import cm2 from "@/app/images/fa-brands-2.png";
import cm3 from "@/app/images/fa-brands-3.png";
import cm4 from "@/app/images/fa-brands-4.png";
import cm5 from "@/app/images/fa-brands-5.png";
import cm6 from "@/app/images/fa-brands-6.png";

export default function Bestseller() {
  return (
    <div className="relative bg-[#FAFAFA] w-full">
      <div className="max-w-[1124px] h-auto mx-auto">
        <div className="max-w-[1124px] py-[48px] flex flex-col gap-[24px] mx-auto">
          {/* Heading */}
          <div className="flex justify-center gap-[10px]">
            <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] tracking-[0.2px] text-[#252B42]">
              BESTSELLER PRODUCTS
            </h3>
          </div>
          {/* Line under the heading */}
          <div className="w-full h-[2px] bg-[#dbdbdb]"></div>

          {/* Products Section */}
          <div className="flex flex-wrap justify-center gap-[30px]">
            {/* Card 1 */}
            <div className="w-[238px] h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image src={pic6} alt="pic" className="w-full h-full object-cover" />
              </div>
              <CardT2 />
            </div>
            {/* Card 2 */}
            <div className="w-[238px] h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image src={pic1} alt="pic" className="w-full h-full object-cover" />
              </div>
              <CardT2 />
            </div>
            {/* Card 3 */}
            <div className="w-[238px] h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image src={pic2} alt="pic" className="w-full h-full object-cover" />
              </div>
              <CardT2 />
            </div>
            {/* Card 4 */}
            <div className="w-[238px] h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image src={pic3} alt="pic" className="w-full h-full object-cover" />
              </div>
              <CardT2 />
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-wrap justify-center gap-[30px]">
            {/* Card 5 */}
            <div className="w-[238px] h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image src={pic4} alt="pic" className="w-full h-full object-cover" />
              </div>
              <CardT2 />
            </div>
            {/* Card 6 */}
            <div className="w-[238px] h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image src={pic5} alt="pic" className="w-full h-full object-cover" />
              </div>
              <CardT2 />
            </div>
            {/* Card 7 */}
            <div className="w-[238px] h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image src={pic6} alt="pic" className="w-full h-full object-cover" />
              </div>
              <CardT2 />
            </div>
            {/* Card 8 */}
            <div className="w-[238px] h-full mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
              <div className="flex-grow">
                <Image src={pic1} alt="pic" className="w-full h-full object-cover" />
              </div>
              <CardT2 />
            </div>
          </div>
        </div>
      </div>

      {/* Companies */}
      <div className="w-full bg-[#FAFAFA] py-8">
        <div className="max-w-[1124px] mx-auto">
          {/* Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 justify-center">
            <div className="flex justify-center">
              <Image src={cm1} alt="Client 1 Logo" className="h-12 w-auto" />
            </div>
            <div className="flex justify-center">
              <Image src={cm2} alt="Client 2 Logo" className="h-12 w-auto" />
            </div>
            <div className="flex justify-center">
              <Image src={cm3} alt="Client 3 Logo" className="h-12 w-auto" />
            </div>
            <div className="flex justify-center">
              <Image src={cm4} alt="Client 4 Logo" className="h-12 w-auto" />
            </div>
            <div className="flex justify-center">
              <Image src={cm5} alt="Client 5 Logo" className="h-12 w-auto" />
            </div>
            <div className="flex justify-center">
              <Image src={cm6} alt="Client 6 Logo" className="h-12 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
