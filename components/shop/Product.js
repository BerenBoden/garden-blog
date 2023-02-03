import React from 'react';

const Product = ({ product }) => {
    return (
      <div className="bg-white shadow-md flex flex-col">
        <img src={product.imageUrl} alt={product.name} className=" h-64 w-full mx-auto" />
        <div className="p-2">
          <h3 className="font-bold text-xl mb-2 text-left">{product.name}</h3>
          <p className="text-black text-sm text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, soluta.</p>
          <p className="text-gray-700 text-sm text-left">{product.price}</p>
        </div>
      </div>
    );
  };
export default Product;