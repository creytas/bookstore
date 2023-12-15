import Ratings from "./ratings";
import Image from "next/image";

export default function Modal({ isOpened, data }) {
  const { image, title, description, price, rating } = data;
  return (
    <div
      className={`${
        isOpened ? "visible" : "hidden"
      } w-screen h-screen flex items-center justify-center z-10 relative top-0 left-0 bg-gray-500 bg-opacity-30`}
    >
      <div className="w-1/2 p-4 absolute flex space-x-4 bg-white">
        <div className="w-[25%] h-56 border border-red-600 relative">
          <Image
            src={image ? image : "/assets/bookstore.png"}
            alt={title}
            fill
            className="absolute object-cover"
          />
        </div>
        <div className="w-[70%] border border-red-600">
          <h2>{title}</h2>
          <span>{`Quality : ${rating ? rating : 0} / 5`}</span>
          <h3 className="">{`Price : CDF ${price}`}</h3>
          <p className="border border-red-600">
            { description ? description : "No description" }
          </p>
        </div>
      </div>
    </div>
  );
}
