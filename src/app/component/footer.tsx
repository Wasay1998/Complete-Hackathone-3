

import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="max-sm:px-4 lg:mt-[-200] bg-white w-full">
      {/* Top Section */}
      <section className="bg-[#f9f9f9] py-6 px-4">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-[#252b42] text-2xl font-bold leading-loose tracking-tight">Bandage</h1>
          </div>
          <div className="flex gap-4 text-xl text-[#252b42]">
            <IoLogoFacebook aria-label="Facebook" />
            <IoLogoInstagram aria-label="Instagram" />
            <TiSocialTwitter aria-label="Twitter" />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#e6e6e6]" />

      {/* Main Footer Content */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-[#252b42] text-base font-bold">Company Info</h2>
            <nav className="flex flex-col gap-2.5 mt-3">
              <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#252b42]">About Us</a>
              <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#252b42]">Careers</a>
              <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#252b42]">We Are Hiring</a>
              <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#252b42]">Blog</a>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-[#252b42] text-base font-bold">Legal</h2>
            <nav className="flex flex-col gap-2.5 mt-3">
              <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#252b42]">Terms of Service</a>
              <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#252b42]">Privacy Policy</a>
              <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#252b42]">Cookies</a>
              <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#252b42]">Refund Policy</a>
            </nav>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-[#252b42] text-base font-bold">Features</h2>
            <nav className="flex flex-col gap-2.5 mt-3">
              <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#252b42]">Business Marketing</a>
              <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#252b42]">User Analytics</a>
              <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#252b42]">Live Chat</a>
              <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#252b42]">Unlimited Support</a>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-[#252b42] text-base font-bold">Resources</h2>
            <nav className="flex flex-col gap-2.5 mt-3">
              <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#252b42]">iOS & Android</a>
              <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#252b42]">Watch a Demo</a>
              <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#252b42]">Customers</a>
              <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#252b42]">API</a>
            </nav>
          </div>

          {/* Get in Touch */}
          <div>
            <h2 className="text-[#252b42] text-base font-bold">Get In Touch</h2>
            <div className="mt-3">
              <div className="relative mb-4">
                <input
                  type="email"
                  className="w-full md:w-[221px] h-12 px-4 border border-[#e6e6e6] rounded-lg bg-[#f8f8f8] text-[#727272] text-sm"
                  placeholder="Your Email"
                />
                <button className="absolute right-0 top-0 h-12 px-4 bg-[#23a6f0] text-white text-sm font-normal rounded-r-lg">
                  Subscribe
                </button>
              </div>
              <p className="text-[#727272] text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-[#f9f9f9] py-4 px-4">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-[#727272] text-sm font-bold text-center md:text-left">
            Made with love by Finland. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
