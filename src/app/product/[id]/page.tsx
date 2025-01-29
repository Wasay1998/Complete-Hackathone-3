"use client";

import { useEffect, useState } from "react";
//  import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { singleProduct } from "@/sanity/lib/queries";
import { sanityfetch } from "@/sanity/lib/fetch";

type Product = {
  _id: string;
  title: string;
  price: string;
  description: string;
  discountPercentage: string;
  productImage: string;
};

const ProductDetail = () => {
  const [product, setProduct] = useState<Product | null>(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
      const result = await sanityfetch({query: singleProduct, params: {id}});
      setProduct(result[0]);
      };

      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;

    // Get cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Check if product already exists in the cart
    const existingProductIndex = cart.findIndex((item: Product) => item._id === product._id);

    if (existingProductIndex !== -1) {
      // If product already exists, increase the quantity
      cart[existingProductIndex].quantity += 1;
    } else {
      // If product doesn't exist, add it to the cart with quantity 1
      cart.push({ ...product, quantity: 1 });
    }

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Optional: Alert user or show confirmation message
    alert("Product added to cart");
  };



  return product ? (
    <div className="container mx-auto p-8">
      {/* Product Detail Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Left Side: Product Image */}
        <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
          <Image
            src={product.productImage || "/placeholder.png"}
            alt={product.title}
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: Product Info */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>

          {/* Description Heading */}
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
          <button
            onClick={handleAddToCart}
            className="mt-6 w-full lg:w-auto bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default ProductDetail;
