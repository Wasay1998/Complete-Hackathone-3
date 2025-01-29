"use client";
import React from "react";
import Image from "next/image";
import colours from "@/images/product-colors.png";
import {  ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function CardText() {
  const notify = () => toast(" Item added to cart! ✅");

  return (
    <div className="w-[239px] h-[200px] py-[5px] px-[25px] flex flex-col items-center justify-center gap-[10px] border border-gray-200 rounded-lg shadow-sm">
      <h5 className="w-full font-Montserrat font-bold text-[16px] leading-[24px] text-center text-[#252B42]">
        Graphic Design
      </h5>
     
      <div className="w-full px-[3px] py-[5px] flex justify-center gap-[5px]">
        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#BDBDBD] line-through">
          $16.48 
        </h5>
        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#23856D]">
          $6.48
        </h5>
      </div>
      <div className="w-[82.2px] h-[16px] flex justify-center">
        <Image src={colours} alt="colours" />
      </div>
      <button
        onClick={notify}
        className=" py-[10px] px-[20px] w-full font-Montserrat font-bold text-[14px] text-white bg-[#23A6F0] rounded-md hover:bg-[#1d91d0] focus:outline-none focus:ring-2 focus:ring-[#23A6F0] focus:ring-offset-2 transition-all"
      >
        Add to Cart
      </button>
      <ToastContainer />
    </div>
  );
}