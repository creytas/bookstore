"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Ratings from "./ratings";

const Card = ({ data }) => {
  const { image, title, price, rating } = data;
  const handle = ()=>console.log(`${title} added to cart`);

  return (
    <div className="rounded-md border border-gray-300 p-2 my-4 cursor-pointer hover:shadow-md hover:shadow-gray-900">
      <div className="w-full h-40 mb-3 relative">
        <Image
          src={image ? image : "/assets/bookstore.png"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <h2 className="text-gray-900 text-lg font-semibold">{title}</h2>
      <div className="flex space-x-2">
        <Ratings ratingValue={rating ? rating : 0} readOnly={true} />
        <h3 className="text-gray-500 text-sm font-medium">{`CDF ${price}`}</h3>
      </div>
      <button
        className="border border-gray-900 bg-gray-900 p-2 my-4 hover:bg-opacity-80"
        onClick={handle}
      >
        <FontAwesomeIcon icon={faCartPlus} className="text-gray-200" />
        <span className="text-gray-200">Add to the cart</span>
      </button>
    </div>
  );
};

export default Card;
