import { groq } from "next-sanity";

// Query for 4 Products from Sanity
export const allproducts = groq `*[_type == "product"]{
    _id,
    title,
    description,
    price,
    dicountPercentage,
    tags,
    isNew,
    "productImage": productImage.asset->url
    }`;
export const four = groq `*[_type == "product"] [0..6]
{
    _id,
    title,
    description,
    price,
    dicountPercentage,
    tags,
    isNew,
    "productImage": productImage.asset->url
    }`;

export const singleProduct = groq `*[_type == "product" && _id == $id]
{
    _id,
    title, 
    description, 
    price, 
    dicountPercentage, 
    tags, 
    isNew, 
    "productImage": productImage.asset->url
}`;


export const searchProduct = groq `
          *[_type == "product" && (
            title match "*$query*" ||
            description match "*$query*"
          )] | order(_createdAt desc)[0...10] {
            _id,
            title,
            price,
            discountedPrice,
            description,
            "productImage": productImage.asset->url
          }`;
        