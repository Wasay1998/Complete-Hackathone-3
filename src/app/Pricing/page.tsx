
import Image from "next/image";
import arrow from "@/app/images/Vector (14).png";
import circle from "@/app/images/icn-circle circle-xs secondary-color-1.png";
import circle2 from "@/app/images/icn-circle circle-xs mute.png";
import cm1 from "@/app/images/fa-brands-1.png";
import cm2 from "@/app/images/fa-brands-2.png";
import cm3 from "@/app/images/fa-brands-3.png";
import cm4 from "@/app/images/fa-brands-4.png";
import cm5 from "@/app/images/fa-brands-5.png";
import cm6 from "@/app/images/fa-brands-6.png";
import arrow2 from "@/app/images/Vector (1).png"
import { FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


export default function Pricing() {
  return (
    <div>
      <div className="w-full min-h-screen bg-[#FAFAFA]">
        <div className="w-full max-w-[1050px] mx-auto py-[48px] px-4 lg:py-[112px] lg:px-0 flex flex-col gap-[48px]">
          {/* Navbar + Intro Section */}
          <div className="w-full h-auto bg-white rounded-lg shadow-md">
            <div className="w-full h-auto bg-white/50">
             
              {/* Pricing Section */}
              <div className="w-full max-w-[870px] mx-auto mt-[32px] lg:mt-[64px] flex flex-col items-center space-y-[16px] px-4">
                <h5 className="text-[#737373] text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center">
                  PRICING
                </h5>
                <h2 className="text-[#252B42] text-[32px] lg:text-[58px] font-bold leading-[40px] lg:leading-[80px] tracking-[0.2px] text-center">
                  Simple Pricing
                </h2>
                <div className="flex items-center space-x-[8px] lg:space-x-[15px]">
                  <a
                    className="text-[#252B42] text-[14px] font-bold leading-[24px] tracking-[0.2px]"
                    href="#"
                  >
                    Home
                  </a>
                  <div className="w-[9px] h-[16px]">
                    <Image src={arrow} alt="arrow" />
                  </div>
                  <span className="text-[#737373] text-[14px] font-bold leading-[24px] tracking-[0.2px]">
                    Pricing
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Short Intro Section */}
          <div className="flex flex-col items-center justify-center px-4 lg:px-0 space-y-[16px]">
            <div className="flex flex-col items-center w-full max-w-[625px] space-y-[8px]">
              <h2 className="text-[#252B42] text-[32px] lg:text-[40px] font-montserrat font-bold leading-[40px] lg:leading-[50px] tracking-[0.2px] text-center">
                Pricing
              </h2>
              <p className="text-[#737373] text-[14px] leading-[20px] text-center tracking-[0.2px]">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>
          </div>

          {/* TOGGLE BUTTON */}
          <div className="relative flex flex-row items-center justify-center gap-4 w-full max-w-md mx-auto px-4">
            {/* Monthly Label */}
            <h5 className="text-[16px] font-Montserrat font-bold text-[#252B42] leading-[24px] tracking-[0.1px]">
              Monthly
            </h5>

            {/* Toggle Switch */}
            <div className="relative flex items-center w-[45px] h-[25px] bg-white border border-[#23A6F0] rounded-full">
              <div className="absolute w-[19px] h-[19px] bg-[#D0D0D0] rounded-full left-1 top-[3px] transition-transform transform-gpu"></div>
            </div>

            {/* Yearly Label */}
            <h5 className="text-[16px] font-Montserrat font-bold text-[#252B42] leading-[24px] tracking-[0.1px]">
              Yearly
            </h5>

            {/* Save Button */}
            <button className="flex items-center justify-center p-2 w-28 h-11 bg-[#B3E3FF] rounded-[37px]">
              <h6 className="text-[14px] font-Montserrat font-bold text-[#23A6F0] text-center tracking-[0.2px]">
                Save 25%
              </h6>
            </button>
          </div>

          {/* THREE DIVS */}

          <div className="w-full lg:flex lg:flex-row flex-col gap-[20px]">
            {/* one */}
            <div className="w-[327px] h-[664px]">
              <div className="border rounded-[10px] items-center justify-center border-[#23A6F0] px-[40px] py-[50px] flex flex-col gap-[35px] bg-[#FFFFFF]">
                <h3 className="w-[64px] h-[32px] font-Montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
                  FREE
                </h3>
                <h5 className="w-[160px] h-[48px] font-Montserrat font-bold text-[16px] leading-[24px] flex justify-center items-center text-[#737373] tracking-[0.1px]">
                  Organize across all apps by hand
                </h5>
                <div className="w-[114px] h-[56px] flex gap-[10px]">
                  <h2 className="w-[28px] h-[50px] font-Montserrat font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#23A6F0]">
                    0
                  </h2>
                  <div className="w-[76px] h-[56px]">
                    <h3 className="w-[16px] h-[32px] font-Montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#23A6F0]">
                      $
                    </h3>
                    <h6 className="w-[76px] h-[24px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#8EC2F2]">
                      Per Month
                    </h6>
                  </div>
                </div>
                <div className="w-[247px] h-[236px] flex flex-col gap-[15px]">
                  <div className="w-[247px] h-[32px] flex gap-[10px]">
                    <Image src={circle} alt="circle" />
                    <h6 className="w-[205px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42]">
                      Unlimited product updates
                    </h6>
                  </div>
                  <div className="w-[247px] h-[32px] flex gap-[10px]">
                    <Image src={circle} alt="circle" />
                    <h6 className="w-[205px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42]">
                      Unlimited product updates
                    </h6>
                  </div>
                  <div className="w-[247px] h-[32px] flex gap-[10px]">
                    <Image src={circle} alt="circle" />
                    <h6 className="w-[205px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42]">
                      Unlimited product updates
                    </h6>
                  </div>
                  <div className="w-[247px] h-[32px] flex gap-[10px]">
                    <Image src={circle2} alt="circle" />
                    <h6 className="w-[205px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42]">
                      1GB Cloud storage
                    </h6>
                  </div>
                  <div className="w-[247px] h-[32px] flex gap-[10px]">
                    <Image src={circle2} alt="circle" />
                    <h6 className="w-[205px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42]">
                      Email and community support
                    </h6>
                  </div>
                </div>
                {/* button */}
                <button className="w-[246px] h-[52px] rounded-[5px] px-[40px] py-[15px] flex gap-[10px] items-center justify-center bg-[#23A6F0]">
                  <h6 className="font-Montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px] text-white">
                    Try for free
                  </h6>
                </button>
              </div>
            </div>

            {/* two */}
            <div className="w-[327px] h-[664px]">
              <div className="border rounded-[10px] items-center justify-center border-[#23A6F0] px-[40px] py-[70px] flex flex-col gap-[35px] bg-[#252B42]">
                <h3 className="w-[64px] h-[32px] font-Montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-white">
                  STANDARD
                </h3>
                <h5 className="w-[160px] h-[48px] font-Montserrat font-bold text-[16px] leading-[24px] flex justify-center items-center text-white tracking-[0.1px]">
                  Organize across all apps by hand
                </h5>
                <div className="w-[174px] h-[56px] flex gap-[10px]">
                  <h2 className="w-[88px] h-[50px] font-Montserrat font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#23A6F0]">
                    9.99
                  </h2>
                  <div className="w-[76px] h-[56px]">
                    <h3 className="w-[16px] h-[32px] font-Montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#23A6F0]">
                      $
                    </h3>
                    <h6 className="w-[76px] h-[24px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#8EC2F2]">
                      Per Month
                    </h6>
                  </div>
                </div>
                <div className="w-[247px] h-[236px] flex flex-col gap-[15px]">
                  <div className="w-[247px] h-[32px] flex gap-[10px]">
                    <Image src={circle} alt="circle" />
                    <h6 className="w-[205px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white">
                      Unlimited product updates
                    </h6>
                  </div>
                  <div className="w-[247px] h-[32px] flex gap-[10px]">
                    <Image src={circle} alt="circle" />
                    <h6 className="w-[205px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white">
                      Unlimited product updates
                    </h6>
                  </div>
                  <div className="w-[247px] h-[32px] flex gap-[10px]">
                    <Image src={circle} alt="circle" />
                    <h6 className="w-[205px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white">
                      Unlimited product updates
                    </h6>
                  </div>
                  <div className="w-[247px] h-[32px] flex gap-[10px]">
                    <Image src={circle2} alt="circle" />
                    <h6 className="w-[205px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white">
                      1GB Cloud storage
                    </h6>
                  </div>
                  <div className="w-[247px] h-[32px] flex gap-[10px]">
                    <Image src={circle2} alt="circle" />
                    <h6 className="w-[205px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white">
                      Email and community support
                    </h6>
                  </div>
                </div>
                {/* button */}
                <button className="w-[246px] h-[52px] rounded-[5px] px-[40px] py-[15px] flex gap-[10px] items-center justify-center bg-[#23A6F0]">
                  <h6 className="font-Montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px] text-white">
                    Try for free
                  </h6>
                </button>
              </div>
            </div>

            {/* three */}
            <div className="w-[327px] h-[664px] ">
              <div className="border rounded-[10px] items-center justify-center border-[#23A6F0] px-[40px] py-[50px] flex flex-col gap-[35px] bg-[#FFFFFF]">
                <h3 className="w-[64px]  h-[32px] font-Montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
                  PREMIUM
                </h3>
                <h5 className="w-[160px] h-[48px] font-Montserrat font-bold text-[16px] leading-[24px] flex justify-center items-center text-[#737373] tracking-[0.1px]">
                  Organize across all apps by hand
                </h5>
                <div className="w-[194px] h-[56px] flex gap-[10px]">
                  <h2 className="w-[104px] h-[50px] font-Montserrat font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#23A6F0]">
                    19.9
                  </h2>
                  <div className="w-[76px] h-[56px]">
                    <h3 className="w-[16px] h-[32px] font-Montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#23A6F0]">
                      $
                    </h3>
                    <h6 className="w-[76px] h-[24px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#8EC2F2]">
                      Per Month
                    </h6>
                  </div>
                </div>
                <div className="w-[247px] h-[236px] flex flex-col gap-[15px]">
                  <div className="w-[247px] h-[32px] flex gap-[10px]">
                    <Image src={circle} alt="circle" />
                    <h6 className="w-[205px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42]">
                      Unlimited product updates
                    </h6>
                  </div>
                  <div className="w-[247px] h-[32px] flex gap-[10px]">
                    <Image src={circle} alt="circle" />
                    <h6 className="w-[205px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42]">
                      Unlimited product updates
                    </h6>
                  </div>
                  <div className="w-[247px] h-[32px] flex gap-[10px]">
                    <Image src={circle} alt="circle" />
                    <h6 className="w-[205px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42]">
                      Unlimited product updates
                    </h6>
                  </div>
                  <div className="w-[247px] h-[32px] flex gap-[10px]">
                    <Image src={circle2} alt="circle" />
                    <h6 className="w-[205px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42]">
                      1GB Cloud storage
                    </h6>
                  </div>
                  <div className="w-[247px] h-[32px] flex gap-[10px]">
                    <Image src={circle2} alt="circle" />
                    <h6 className="w-[205px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42]">
                      Email and community support
                    </h6>
                  </div>
                </div>
                {/* button */}
                <button className="w-[246px] h-[52px] rounded-[5px] px-[40px] py-[15px] flex gap-[10px] items-center justify-center bg-[#23A6F0]">
                  <h6 className="font-Montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px] text-white">
                    Try for free
                  </h6>
                </button>
              </div>
            </div>
          </div>

          {/* COMPANIES */}
          <div className="w-full h-auto bg-[#FAFAFA]">
            <div className="max-w-[1050px] mx-auto py-[80px]">
              <h4 className="text-center font-Montserrat text-[20px] text-[#252B42] font-normal leading-[30px] tracking-[0.2px]">
                Trusted By Over 4000 Big Companies
              </h4>
              <div className="w-full py-[50px] flex justify-center">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                  <div className="flex justify-center">
                    <Image
                      src={cm1}
                      alt="Client 1 Logo"
                      className="h-12 w-auto"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src={cm2}
                      alt="Client 2 Logo"
                      className="h-12 w-auto"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src={cm3}
                      alt="Client 3 Logo"
                      className="h-12 w-auto"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src={cm4}
                      alt="Client 4 Logo"
                      className="h-12 w-auto"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src={cm5}
                      alt="Client 5 Logo"
                      className="h-12 w-auto"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src={cm6}
                      alt="Client 6 Logo"
                      className="h-12 w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* white div 1*/}
      <div className=" lg:block hidden w-[1440px] h-[1037px] bg-white">
        <div className="mx-[200px] w-[1056px] h-[1037px] absolute left-[192px] py-[80px] flex flex-col items-center gap-[50px]">
          {/* faqs text */}
          <div className=" w-[1050px] h-[210px] py-[45px] flex flex-col items-center justify-center">
            <div className="w-[651px] h-[120px] flex flex-col items-center">
              <div className="w-[607px] h-[120px] flex flex-col justify-center items-center gap-[10px]">
                <h2 className="w-[262px] h-[50px] font-Montserrat font-bold text-[40px] text-[#252B42] leading-[50px] tracking-[0.2px] text-center">
                  Pricing FAQs
                </h2>
                <h4 className="w-[552px] h-[60px] font-Montserrat font-normal text-center text-[20px] text-[#737373] leading-[30px] tracking-[0.2px]">
                  Problems trying to resolve the conflict between the two major
                  realms of Classical physics
                </h4>
              </div>
              </div>
              </div>
              {/* answers to faqc */}
              <div className="lg:w-[1056px] lg:h-[537px] lg:relative absolute  flex flex-col gap-[30px]">

                {/* one */}
                <div className="flex flex-row items-center gap-[30px] w-[1056px] h-[159px]">
                  <div className="flex flex-col items-start w-[491px] h-[159px]">
                    <div className="flex flex-col items-start p-[25px] w-[491px] h-[159px] rounded-[9px]">
                      <div className="flex flex-row items-start gap-[20px] w-[437px] h-[109px]">
                        {/* icn arrow-right */}
                        <div className="w-[9px] h-[16px] flex-none">
                          <Image src={arrow2} alt="arrow2"/>
                        </div>

                        <div className="flex flex-col items-start gap-[5px] w-[408px] h-[109px]">
                          <h5 className="w-[309px] h-[24px] font-Montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
                            the quick fox jumps over the lazy dog
                          </h5>

                          <h6 className="w-[408px] h-[80px] font-Montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
                            Met minim Mollie non desert Alamo est sit cliquey
                            dolor do met sent. RELIT official consequent door
                            ENIM RELIT Mollie. Excitation venial consequent sent
                            nostrum met.
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start w-[535px] h-[139px]">
                    <div className="flex flex-col items-start p-[25px] w-[535px] h-[139px] rounded-[9px]">
                      <div className="flex flex-row items-start gap-[20px] w-[493px] h-[89px]">
                        {/* icn arrow-right */}
                        <div className="w-[9px] h-[16px] flex-none">
                        <Image src={arrow2} alt="arrow2"/>
                        </div>

                        <div className="flex flex-col items-start gap-[5px] w-[464px] h-[89px]">
                          <h5 className="w-[309px] h-[24px] font-Montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
                            the quick fox jumps over the lazy dog
                          </h5>

                          <h6 className="w-[464px] h-[60px] font-Montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
                            Met minim Mollie non desert Alamo est sit cliquey
                            dolor do met sent. RELIT official consequent door
                            ENIM RELIT Mollie. Excitation venial consequent sent
                            nostrum met.
                          </h6>
                        </div>
                      </div>
                  
                  </div>
                </div>
              </div>
              {/* two */}
              <div className="flex flex-row items-center gap-[30px] w-[1056px] h-[159px]">
                  <div className="flex flex-col items-start w-[491px] h-[159px]">
                    <div className="flex flex-col items-start p-[25px] w-[491px] h-[159px] rounded-[9px]">
                      <div className="flex flex-row items-start gap-[20px] w-[437px] h-[109px]">
                        {/* icn arrow-right */}
                        <div className="w-[9px] h-[16px] flex-none">
                          <Image src={arrow2} alt="arrow2"/>
                        </div>

                        <div className="flex flex-col items-start gap-[5px] w-[408px] h-[109px]">
                          <h5 className="w-[309px] h-[24px] font-Montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
                            the quick fox jumps over the lazy dog
                          </h5>

                          <h6 className="w-[408px] h-[80px] font-Montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
                            Met minim Mollie non desert Alamo est sit cliquey
                            dolor do met sent. RELIT official consequent door
                            ENIM RELIT Mollie. Excitation venial consequent sent
                            nostrum met.
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start w-[535px] h-[139px]">
                    <div className="flex flex-col items-start p-[25px] w-[535px] h-[139px] rounded-[9px]">
                      <div className="flex flex-row items-start gap-[20px] w-[493px] h-[89px]">
                        {/* icn arrow-right */}
                        <div className="w-[9px] h-[16px] flex-none">
                        <Image src={arrow2} alt="arrow2"/>
                        </div>

                        <div className="flex flex-col items-start gap-[5px] w-[464px] h-[89px]">
                          <h5 className="w-[309px] h-[24px] font-Montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
                            the quick fox jumps over the lazy dog
                          </h5>

                          <h6 className="w-[464px] h-[60px] font-Montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
                            Met minim Mollie non desert Alamo est sit cliquey
                            dolor do met sent. RELIT official consequent door
                            ENIM RELIT Mollie. Excitation venial consequent sent
                            nostrum met.
                          </h6>
                        </div>
                      </div>
                  
                  </div>
                </div>
              </div>
              {/* three */}
              <div className="flex flex-row items-center gap-[30px] w-[1056px] h-[159px]">
                  <div className="flex flex-col items-start w-[491px] h-[159px]">
                    <div className="flex flex-col items-start p-[25px] w-[491px] h-[159px] rounded-[9px]">
                      <div className="flex flex-row items-start gap-[20px] w-[437px] h-[109px]">
                        {/* icn arrow-right */}
                        <div className="w-[9px] h-[16px] flex-none">
                          <Image src={arrow2} alt="arrow2"/>
                        </div>

                        <div className="flex flex-col items-start gap-[5px] w-[408px] h-[109px]">
                          <h5 className="w-[309px] h-[24px] font-Montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
                            the quick fox jumps over the lazy dog
                          </h5>

                          <h6 className="w-[408px] h-[80px] font-Montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
                            Met minim Mollie non desert Alamo est sit cliquey
                            dolor do met sent. RELIT official consequent door
                            ENIM RELIT Mollie. Excitation venial consequent sent
                            nostrum met.
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start w-[535px] h-[139px]">
                    <div className="flex flex-col items-start p-[25px] w-[535px] h-[139px] rounded-[9px]">
                      <div className="flex flex-row items-start gap-[20px] w-[493px] h-[89px]">
                        {/* icn arrow-right */}
                        <div className="w-[9px] h-[16px] flex-none">
                        <Image src={arrow2} alt="arrow2"/>
                        </div>

                        <div className="flex flex-col items-start gap-[5px] w-[464px] h-[89px]">
                          <h5 className="w-[309px] h-[24px] font-Montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
                            the quick fox jumps over the lazy dog
                          </h5>

                          <h6 className="w-[464px] h-[60px] font-Montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
                            Met minim Mollie non desert Alamo est sit cliquey
                            dolor do met sent. RELIT official consequent door
                            ENIM RELIT Mollie. Excitation venial consequent sent
                            nostrum met.
                          </h6>
                        </div>
                      </div>
                  
                  </div>
                </div>
              </div>
              <h1 className="font-Montserrat font-normal flex justify-center items-center text-[20px] leading-[30px] tracking-[0.2px] text-[#737373]">Haven’t got your answer? Contact our support</h1>
            </div>
         
            
        </div>
      </div>
      {/* white div 2 */}
      <div className="relative bg-white flex flex-col items-center py-[160px] gap-[96px] lg:w-[1440px] lg:h-[582px] w-full">
      {/* Container */}
      <div className=" w-[607px] lg:w-[1050px] lg:h-[602px] flex flex-col items-center gap-[36px] justify-center">
        
        {/* Main content */}
        <div className=" w-[547px] lg:w-[547px] h-[282px] flex flex-col items-center gap-[30px] justify-center ">
   
          <h2 className="font-Montserrat font-bold lg:text-[40px] text-[20px] leading-[50px] text-center text-[#252B42] w-full">
          Start your 14 days free trial
          </h2>
     
          <h6 className="font-Montserrat font-normal text-[14px] leading-[20px] text-center text-[#737373] w-[411px]">
          Met minim Mollie non desert Alamo est sit cliquey dolor 
          do met sent. RELIT official consequent.
              </h6>
          <div className="flex flex-row items-center gap-[10px]">
            <div className="bg-[#23A6F0] text-white font-Montserrat font-bold text-[14px] leading-[22px] rounded-[5px] px-[40px] py-[15px]">
            Try it free now
            </div>
          </div>
        </div>

        {/* Social Media Logos */}
        <div className="flex flex-row gap-[34px]">
          {/* Twitter */}
          <div className="w-[30px] h-[24.49px] ">
           <FaTwitter />
          </div>

          {/* Facebook */}
          <div className="w-[30px] h-[30px] ">
          <FaFacebookSquare />
          </div>

          {/* Instagram */}
          <div className="w-[30px] h-[30px]">
          <FaInstagram/>
          </div>

          {/* LinkedIn */}
          <div className="w-[30px] h-[29.88px] ">
         <FaLinkedin/>
          </div>
        </div>
      </div>
    </div>

    
    </div>
  );
}