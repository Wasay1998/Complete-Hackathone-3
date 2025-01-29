"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useParams } from "next/navigation";

type Product = {
  _id: string;
  title: string;
  price: string;
  description: string;
  discountPercentage: string;
  imageUrl: string;
};

export default function ProductDetail() {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const query = `*[_type == "product" && _id == "${id}"] {
          _id,
          title,
          price,
          discountPercentage,
          description,
          "imageUrl": productImage.asset->url
        }`;

        const url = `https://15hm7ok6.api.sanity.io/v1/data/query/production?query=${encodeURIComponent(query)}`;

        try {
          const response = await axios.get(url);
          if (response.data.result.length > 0) {
            setProduct(response.data.result[0]);
          } else {
            setError("Product not found.");
          }
        } catch (err) {
          setError("Failed to load product.");
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return product ? (
    <div>
      {/* Product Detail Section */}
      <div className="flex flex-col items-center py-6 sm:py-4">
        <div className="w-full flex justify-between items-center px-4 max-w-screen-lg">
          <h2 className="text-2xl font-bold text-[#252B42]">{product.title}</h2>
        </div>
      </div>

      {/* Product Image & Description Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 max-w-screen-lg mx-auto px-4">
        {/* Left Side: Product Image */}
        <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
          <Image
            src={product.imageUrl || "/placeholder.png"}
            alt={product.title}
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: Product Info */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-700 mt-6">Description</h2>
          <p className="text-lg text-gray-600 mt-2">{product.description}</p>

          {/* Pricing Section */}
          <div className="flex items-center gap-4 mt-6">
            <span className="text-2xl font-semibold text-blue-600">${product.price}</span>
            {product.discountPercentage && (
              <span className="text-md text-red-500 line-through">${(parseFloat(product.price) + (parseFloat(product.price) * (parseFloat(product.discountPercentage) / 100))).toFixed(2)}</span>
            )}
            {product.discountPercentage && (
              <span className="text-md text-green-600 font-bold">- {product.discountPercentage}%</span>
            )}
          </div>

          {/* Add to Cart Button */}
          <button className="mt-6 w-full lg:w-auto bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
