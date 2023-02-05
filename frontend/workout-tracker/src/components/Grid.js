import React from "react";
import Image from '../images/snowboard-1.jpg'
// Components
import Button from "../components/Button";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      image: Image,
      name: "Bataleon",
      price: "SWAP for weekend",
      rating: 4.5,
    },
    {
      id: 2,
      image: Image,
      name: "Bataleon",
      price: "RENT $100 for weekend",
      rating: 4.0,
    },
    {
      id: 3,
      image: Image,
      name: "Bataleon",
      price: "SWAP for 1 day",
      rating: 3.5,
    },
    // Add more products here
  ];

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden" key={product.id}>
          <img src={product.image} alt={product.name} className="w-full" />
          <div className="p-6">
            <h2 className="text-lg font-medium">{product.name}</h2>
            <span className="flex justify-between items-center">
                <p className="text-gray-600 mt-2">{product.price}</p>
                <Button buttonText={'Details'}/>
            </span>
            <div className="mt-4">
              {/* Star rating component goes here */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
