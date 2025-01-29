;
import Image from "next/image";
import girl from "@/app/images/none.png";
import facebookIcon from "@/app/images/fffb.png";
import instagramIcon from "@/app/images/Vector (3).png";
import twittericon from "@/app/images/Vector (4).png";
import user1 from "@/app/images/team-1-user-1.jpg";
import user2 from "@/app/images/team-1-user-2.jpg";
import user3 from "@/app/images/team-1-user-3.jpg";
import cm1 from "@/app/images/fa-brands-1.png";
import cm2 from "@/app/images/fa-brands-2.png";
import cm3 from "@/app/images/fa-brands-3.png";
import cm4 from "@/app/images/fa-brands-4.png";
import cm5 from "@/app/images/fa-brands-5.png";
import cm6 from "@/app/images/fa-brands-6.png";
import girl2 from "@/app/images/unsplash_T_Qe4QlMIvQ.png";


export default function About() {
  return (
    <div>
      
      <div className="relative flex flex-col gap-8">
       {/* First Section */}
<div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 py-16 px-6">
  {/* Section 1 */}
  <div className="flex flex-col items-center lg:items-start gap-6 lg:w-1/2 mx-auto">
    <h5 className="text-sm font-semibold text-[#252B42] tracking-wider">
      ABOUT COMPANY
    </h5>
    <h1 className="text-4xl lg:text-5xl font-bold text-[#252B42]">
      ABOUT US
    </h1>
    <p className="text-base lg:text-lg text-[#737373] max-w-md text-center lg:text-left">
      We know how large objects will act, but things on a small scale
    </p>
    <button className="bg-[#23A6F0] text-white px-6 py-3 rounded-lg text-sm font-bold">
      Get Quote Now
    </button>
  </div>

  {/* Section 2 */}
  <div className="relative w-full lg:w-1/2 flex justify-center mx-auto">
    <Image src={girl} alt="girl" className="w-full h-auto" />
  </div>
</div>


        {/* Team Section */}
        <section className="container mx-auto py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#252B42]">Meet Our Team</h2>
            <p className="text-base text-[#737373] mt-4">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[user1, user2, user3].map((user, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-lg flex flex-col items-center"
              >
                <Image src={user} alt={`Team Member ${idx + 1}`} />
                <div className="p-6 text-center">
                  <h5 className="text-lg font-bold text-[#252B42]">Member {idx + 1}</h5>
                  <h6 className="text-sm text-[#737373]">Position</h6>
                  <div className="flex justify-center gap-4 mt-4">
                    {[facebookIcon, instagramIcon, twittericon].map((icon, i) => (
                      <Image key={i} src={icon} alt={`Social ${i}`} className="w-6 h-6" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Companies Section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#252B42] mb-6">
              Big Companies Are Here
            </h2>
            <p className="text-base text-[#737373] max-w-md mx-auto mb-12">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
              {[cm1, cm2, cm3, cm4, cm5, cm6].map((company, idx) => (
                <Image
                  key={idx}
                  src={company}
                  alt={`Company ${idx + 1}`}
                  className="mx-auto"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Grow Section */}
        <section className="bg-[#2A7CC7] text-white py-16">
          <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
            {/* Content */}
            <div className="flex flex-col items-center lg:items-start">
              <h5 className="text-sm font-bold">WORK WITH US</h5>
              <h2 className="text-3xl lg:text-4xl font-bold my-4">
                Now Let’s grow Yours
              </h2>
              <p className="text-sm lg:text-base max-w-lg">
                The gradual accumulation of information about atomic and
                small-scale behavior during the first quarter of the 20th
              </p>
              <button className="mt-4 px-6 py-3 bg-white text-[#2A7CC7] rounded-lg">
                Get Started
              </button>
            </div>
            {/* Image */}
            <div className="relative w-full lg:w-1/2">
              <Image src={girl2} alt="Grow Section" className="w-full" />
            </div>
          </div>
        </section>
       
      </div>
    </div>
  );
}
