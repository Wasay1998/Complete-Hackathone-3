"use client";

import React, { useState, useCallback, useRef,  } from "react";
import { useRouter } from "next/navigation";
import {
  FaCartArrowDown,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import Link from "next/link";

import Image from "next/image";
import { createClient } from "next-sanity";



const client = createClient({
  projectId: "xhyri615", // Replace with your Sanity project ID
  dataset: "production",
  apiVersion: "2025-01-13",
  useCdn: false,
});


interface SanityProduct {
  _id: string;
  title: string;
  price: number;
  discountedPrice?: number;
  description: string;
  productImage: string;
}

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SanityProduct[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const searchProducts = useCallback(async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    try {
      // Sanity query to search products
      const sanityQuery = `
        *[_type == "product" && (
          title match "*${query}*" ||
          description match "*${query}*"
        )] | order(_createdAt desc)[0...10] {
          _id,
          title,
          price,
          discountedPrice,
          description,
          "imageUrl": productImage.asset->url
        }
      `;

      const results = await client.fetch(sanityQuery);
      setSearchResults(results);
    } catch (error) {
      console.error("Search error:", error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);



  // Handle input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    searchProducts(query);
  };

  // Handle search submit
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Navigate to product
  const navigateToProduct = (productId: string) => {
    router.push(`/product/${productId}`);
    setIsSearchFocused(false);
    setSearchQuery("");
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };


  return (
    <nav className="w-full bg-white shadow-sm">
      {/* Desktop Menu */}
      <div className="hidden lg:flex justify-between gap-9 px-6 py-4 max-w-7xl mx-auto">
        <h3 className="font-Montserrat font-semibold text-3xl">Bandage</h3>

        {/* Search Bar */}
        <div ref={searchContainerRef} className="relative flex-1 max-w-xs mx-6">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => setIsSearchFocused(true)}
              className="w-full px-4 py-2 pl-8 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <FaTimes />
              </button>
            )}
          </form>

          {/* Search Results Dropdown */}
          {isSearchFocused && (searchResults.length > 0 || isLoading) && (
            <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
              {isLoading ? (
                <div className="p-4 text-center text-gray-500">Loading...</div>
              ) : (
                searchResults.map((product) => (
                  <div
                    key={product._id}
                    onClick={() => navigateToProduct(product._id)}
                    className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        {product.productImage && (
                          <Image
                            src={product.productImage}
                            alt={product.title}
                            width={239}
                            height={427}
                            className="w-12 h-12 object-cover rounded"
                          />
                        )}
                        <div>
                          <h4 className="font-medium text-gray-900">{product.title}</h4>
                          <p className="text-sm text-gray-500 line-clamp-1">
                            {product.description}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-blue-600 font-medium">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.discountedPrice && (
                          <span className="block text-sm text-gray-500 line-through">
                            ${product.discountedPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-6">
          <li><Link href="/" className="text-[18px] font-semibold hover:text-blue-500 transition">Home</Link></li>
          <li><Link href="/Shop" className="text-[18px] font-semibold hover:text-blue-500 transition">Shop</Link></li>
          <li><Link href="/About" className="text-[18px] font-semibold hover:text-blue-500 transition">About</Link></li>
          <li><Link href="/Pages" className="text-[18px] font-semibold hover:text-blue-500 transition">Pages</Link></li>
          <li><Link href="/Pricing" className="text-[18px] font-semibold hover:text-blue-500 transition">Pricing</Link></li>
          <li><Link href="/Contact" className="text-[18px] font-semibold hover:text-blue-500 transition">Contact</Link></li>
        </ul>

        {/* User Actions */}
        <div className="flex items-center gap-2">
          <Link href="/login" className="flex items-center gap-2 text-blue-500 hover:text-blue-600">
            <span className="font-medium">Login</span>
          </Link>/
          <Link href="/signup" className="flex items-center gap-2 text-blue-500 hover:text-blue-600">
            <span className="font-medium">Register</span>
          </Link>
          <div className="flex items-center gap-4">
            <a href="/cart" className="text-gray-700 hover:text-blue-500 transition-colors">
              <FaCartArrowDown className="text-2xl" />
            </a>
            {[FaYoutube, FaFacebook, FaTwitter].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                <Icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between p-4">
          <h3 className="font-Montserrat font-semibold text-2xl">Bandage</h3>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-0.5 bg-gray-900 mb-1.5" />
            <div className="w-6 h-0.5 bg-gray-900 mb-1.5" />
            <div className="w-6 h-0.5 bg-gray-900" />
          </button>
        </div>

        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            role="dialog"
            aria-modal="true"
          >
            <div className="absolute right-0 top-0 h-full w-64 bg-white p-6 transition-transform duration-300 transform ease-in-out">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4"
                aria-label="Close menu"
              >
                <FaTimes className="text-xl" />
              </button>
              <ul className="mt-8 space-y-4">
                <li><Link href="/" className="text-[18px] font-semibold hover:text-blue-500 transition">Home</Link></li>
                <li><Link href="/Shop" className="text-[18px] font-semibold hover:text-blue-500 transition">Shop</Link></li>
                <li><Link href="/About" className="text-[18px] font-semibold hover:text-blue-500 transition">About</Link></li>
                <li><Link href="/Pages" className="text-[18px] font-semibold hover:text-blue-500 transition">Pages</Link></li>
                <li><Link href="/pricing" className="text-[18px] font-semibold hover:text-blue-500 transition">Pricing</Link></li>
                <li><Link href="/Contact" className="text-[18px] font-semibold hover:text-blue-500 transition">Contact</Link></li>
                <li>
                  <a href="/login" className="block text-lg font-medium text-blue-500 hover:text-blue-600 py-2">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;