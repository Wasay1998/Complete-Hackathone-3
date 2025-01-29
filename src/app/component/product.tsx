import Image from 'next/image';

interface ProductCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  category: string;
  originalPrice: string;
  discountedPrice: string;
}

const ProductCard = ({
  imageSrc,
  altText,
  title,
  category,
  originalPrice,
  discountedPrice,
}: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
      <div className="w-full h-72 relative">
        <Image
          src={imageSrc}
          alt={altText}
          width={239}
          height={280}
          className="rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <h5 className="text-xl font-semibold text-[#252B42]">{title}</h5>
        <p className="text-[#737373] text-sm mt-2">{category}</p>
        <div className="flex items-center mt-4">
          <span className="text-[#BDBDBD] text-sm line-through">{originalPrice}</span>
          <span className="text-[#23856D] text-lg font-semibold ml-2">{discountedPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;