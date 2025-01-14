// src/components/ProductCard.js
import React from 'react';
import Image from 'next/image'; 

const ProductCard = ({ product }) => {
  return (
    <div className=" p-4 w-full">
      <div className="block relative h-48 rounded overflow-hidden">
        <Image
          alt={product.title}
          className="object-cover object-center w-full h-full block"
          src={product.image}
          width={400} 
          height={300} 
        />
      </div>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {product.category}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {product.title}
        </h2>
        <p className="mt-1">${product.price.toFixed(2)}</p>
        <p className="text-sm text-gray-500">
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </p>
      </div>
    </div>
  );
};

export default ProductCard;