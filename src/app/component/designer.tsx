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
      const result = await sanityfetch({ query: four });
      setProducts(result);
    };
    fetchSanityData();
  }, []);

  return (
    <div className="lg:mt-[350px] w-full rounded-[8px] absolute top-[1750px] border bg-white shadow-lg max-sm:mt-[-100px]">
      <div className="mx-auto w-full max-w-[1400px] flex flex-col justify-evenly p-6 sm:p-12">
        {/* Title Section */}
        <div className="w-full flex flex-col justify-center items-center text-center mb-10">
          <h4 className="font-Montserrat font-medium lg:text-[22px] sm:text-[20px] text-gray-500">
            Featured Products
          </h4>
          <h3 className="font-Montserrat font-extrabold lg:text-[30px] sm:text-[26px] text-gray-800">
            BESTSELLER PRODUCTS
          </h3>
          <p className="font-Montserrat font-normal lg:text-[18px] text-gray-500">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Products Section */}
        <div className="w-full flex flex-wrap justify-center gap-8">
          {/* Product Cards */}
          {products.length === 0 ? (
            <p className="text-center text-gray-600">Loading products...</p>
          ) : (
            products.map((product) => (
              <div
                key={product._id}
                className="w-full sm:w-[250px] md:w-[270px] lg:w-[320px] flex flex-col items-center mb-8 bg-white rounded-xl p-5 shadow-lg hover:shadow-2xl transition duration-300"
              >
                {/* Image */}
                <div className="w-[250px] h-[400px] flex justify-center overflow-hidden mb-4 rounded-lg bg-gray-100">
                  {product.productImage ? (
                    <Image
                      src={product.productImage}
                      alt={product.title}
                      className="w-full h-full object-cover rounded-lg"
                      width={250}
                      height={400}
                    />
                  ) : (
                    <div className="text-gray-400">No Image Available</div>
                  )}
                </div>

                {/* Text Section */}
                <div className="w-full text-center">
                  <h5 className="font-Montserrat font-semibold text-[18px] text-gray-800">
                    {product.title}
                  </h5>
                  <div className="flex justify-center gap-3 mt-2">
                    <h5 className="font-Montserrat font-medium text-[16px] text-gray-400 line-through">
                      ${product.discountPercentage}
                    </h5>
                    <h5 className="font-Montserrat font-bold text-[18px] text-green-600">
                      ${product.price}
                    </h5>
                  </div>

                  {/* View Details Button */}
                  <Link href={`/product/${product._id}`}>
                    <button className="mt-5 w-full lg:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-10 rounded-lg shadow-lg hover:from-blue-500 hover:to-purple-500 transition duration-300 focus:outline-none transform hover:scale-105">
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
