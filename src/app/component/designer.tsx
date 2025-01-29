"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { four } from "@/sanity/lib/queries";
import { sanityfetch } from "@/sanity/lib/fetch";

type Product = {
  _id: string;
  title: string;
  price: string;
  description: string;
  discountPercentage: string;
  productImage: string;
};

const CardText = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchSanityData = async () => {
      const result = await sanityfetch({query: four});
      setProducts(result);
    };
    fetchSanityData();
  }, []);


  return (
    <div className="lg:mt-[350px] w-full rounded-[5px] absolute top-[1750px] border bg-white max-sm:mt-[-100px]">
      <div className="mx-auto w-full max-w-[1400px] flex flex-col justify-evenly p-5 sm:p-10">
        {/* Title Section */}
        <div className="w-full flex flex-col justify-center items-center text-center mb-8">
          <h4 className="font-Montserrat font-normal lg:text-[20px] sm:text-[20px] leading-[24px] sm:leading-[30px] text-[#737373]">
            Featured Products
          </h4>
          <h3 className="font-Montserrat font-bold lg:text-[28px] sm:text-[24px] leading-[28px] sm:leading-[32px] text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="font-Montserrat font-normal lg:text-[17px] leading-[20px] text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Products Section */}
        <div className="w-full flex flex-wrap justify-center gap-6">
          {/* Product Cards */}
          {products.length === 0 ? (
            <p>Loading products...</p>
          ) : (
            products.map((product) => (
              <div
                key={product._id}
                className="w-full sm:w-[238px] md:w-[250px] lg:w-[300px] flex flex-col items-center mb-8 bg-[#f8f9fa] rounded-lg p-4 shadow-md"
              >
                {/* Image */}
                <div className="w-[239px] h-[427px] flex justify-center overflow-hidden mb-4">
                  {product.productImage ? (
                    <Image
                      src={product.productImage}
                      alt={product.title}
                      className="w-full h-full object-contain rounded"
                      width={239}
                      height={427}
                    />
                  ) : (
                    <div>No Image Available</div>
                  )}
                </div>

                {/* Text Section */}
                <div className="w-full text-center">
                  <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                    {product.title}
                  </h5>
                  <div className="flex justify-center gap-2 mt-2">
                    <h5 className="font-Montserrat font-bold text-[16px] text-[#BDBDBD] line-through">
                      ${product.discountPercentage}
                    </h5>
                    <h5 className="font-Montserrat font-bold text-[16px] text-[#23856D]">
                      ${product.price}
                    </h5>
                  </div>

                  {/* View Details Button */}
                  <Link href={`/product/${product._id}`}>
                    <button className="mt-4 w-full lg:w-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-8 rounded-lg shadow-lg hover:from-blue-400 hover:to-purple-400 transition duration-300 focus:outline-none">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CardText;
