"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import arrow from "@/app/images/Vector (1).png";
import cat1 from "@/app/images/media bg-cover.png";
import cat2 from "@/app/images/media bg-cover (1).png";
import cat3 from "@/app/images/media bg-cover (2).png";
import cat4 from "@/app/images/media bg-cover (3).png"
import cat5 from "@/app/images/media bg-cover (4).png";
import frame from "@/app/images/Frame 31.png";
import clients from "@/app/images/desktop-clients-1.png";
import axios from "axios";
import Link from "next/link";

// Product type for TypeScript
type Product = {
  _id: string;
  title: string;
  price: string;
  imageUrl: string;
};

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const categories = [cat1, cat2, cat3, cat4, cat5];

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == \"product\"] | order(_createdAt desc)[8...20] {
        _id,
        title,
        price,
        "imageUrl": productImage.asset->url
      }`;

      const url = `https://xhyri615.api.sanity.io/v2025-01-13/data/query/production?query=${encodeURIComponent(query)}`;

      try {
        const response = await axios.get(url);
        if (response.data.result) {
          setProducts(response.data.result);
        } else {
          setError("No products found.");
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {/* Shop Section */}
      <div className="flex flex-col items-center py-6 sm:py-4">
        <div className="w-full flex justify-between items-center px-4 max-w-screen-lg">
          <h2 className="text-2xl font-bold text-[#252B42]">Shop</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-bold text-[#252B42]">Home</span>
            <Image src={arrow} alt="arrow" width={8} height={6} />
            <span className="text-sm font-bold text-[#BDBDBD]">Shop</span>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-[#FAFAFA] py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-screen-lg mx-auto px-4">
          {categories.map((cat, index) => (
            <Image key={index} src={cat} alt={`Category ${index + 1}`} className="w-full h-auto" />
          ))}
        </div>
      </div>

      {/* Popularity Section */}
      <div className="py-6 flex flex-wrap justify-between items-center max-w-screen-lg mx-auto px-4">
        <div className="text-sm font-bold text-[#737373]">{isLoading ? "Loading results..." : `Showing all ${products.length} results`}</div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-bold text-[#737373]">Views:</span>
            <Image src={frame} alt="frame" className="w-6 h-6" />
          </div>
          <div className="flex space-x-2">
            <button className="border border-[#DDDDDD] px-4 py-2 text-sm text-[#737373]">Popularity</button>
            <button className="bg-[#23A6F0] px-4 py-2 text-sm text-white">Filter</button>
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="py-6">
        <Image src={clients} alt="clients" className="w-full max-w-screen-lg mx-auto" />
      </div>
{/* Products Section */}
<div className="py-8 max-w-screen-lg mx-auto px-4">
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {isLoading ? (
      <div>Loading products...</div>
    ) : error ? (
      <div>{error}</div>
    ) : (
      products.map((product) => (
        <div key={product._id} className="text-center bg-[#f8f9fa] p-4 rounded-lg shadow-md">
          {/* Product Image */}
          <Image src={product.imageUrl} alt={product.title} width={300} height={300} className="w-full h-auto" />
          
          {/* Product Title */}
          <h5 className="font-bold text-lg text-[#252B42] mt-4">{product.title}</h5>
          
          {/* Product Pricing */}
          <div className="flex justify-center space-x-2 mt-2">
            <span className="line-through text-sm text-[#BDBDBD]">${product.price}</span>
            <span className="text-sm font-bold text-[#23856D]">${(parseFloat(product.price) * 0.5).toFixed(2)}</span>
          </div>
          
          {/* View Details Button */}
          <Link href={`/product/${product._id}`}>
            <button className="mt-4 w-full lg:w-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-8 rounded-lg shadow-lg hover:from-blue-400 hover:to-purple-400 transition duration-300 focus:outline-none">
              View Details
            </button>
          </Link>
        </div>
      ))
    )}
  </div>
</div>

      {/* Pagination */}
      <div className="py-4 flex justify-center">
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-[#F3F3F3] text-[#737373]">First</button>
          {[1, 2, 3].map((page, index) => (
            <button
              key={index}
              className={`px-4 py-2 ${page === 2 ? "bg-[#1D4ED8] text-white" : "bg-white text-[#1D4ED8]"}`}
            >
              {page}
            </button>
          ))}
          <button className="px-4 py-2 bg-white text-[#1D4ED8]">Next</button>
        </div>
      </div>
    </div>
  );
}
