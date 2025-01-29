"use client"

import { sanityfetch } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import { allproducts } from "@/sanity/lib/queries";
import Image from "next/image";
import { useEffect, useState } from "react";

type Product = {
    _id: string;
    title: string;
    price: string;
    description: string;
    discountPercentage: string;
    productImage: string;
  };

const Items = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function fetchedProducts() {
            const result = await sanityfetch({query: allproducts});
            setProducts(result);
        
}
fetchedProducts();
}, []);

return (
    <div className="max-w-6xl mx-auto px-4 py-8">
        <h1>Items</h1>
        <div>
            {products.map((product) => (
                <div key={product._id}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <Image src={urlFor(product.productImage).url()} alt={product.title} width={100} height={100} />
                </div>
            ))}
        </div>
    </div>
);
}

export default Items;