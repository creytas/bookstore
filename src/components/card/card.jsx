"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import Ratings from "./ratings";

const Card = ({ data, openModal }) => {
  const { image, title, price, rating } = data;
  const handle = () => openModal();

  return (
    <div>
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
          <FontAwesomeIcon icon={faBookOpen} className="text-gray-200 mr-1" />
          <span className="text-gray-200">See details</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
