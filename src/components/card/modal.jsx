import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faLadderWater } from "@fortawesome/free-solid-svg-icons";
import Ratings from "./ratings";

export default function Modal({ closeModal, data, addToCart }) {
  const { image, title, description, price, rating } = data;
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative min-w-[768px] my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                <span>{title}</span>
                <div className="flex space-x-4">
                  <Ratings ratingValue={rating ? rating : 0} readOnly={true} />
                  <span className="text-gray-500 text-xl">{`CDF ${price}`}</span>
                </div>
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => closeModal()}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto md:flex">
              <div className="w-[25%] h-60 relative">
                <Image
                  src={image ? image : "/assets/bookstore.png"}
                  alt={title}
                  fill
                  className="absolute object-cover"
                />
              </div>
              <p className="w-[70%] pl-3 text-blueGray-500 text-lg leading-relaxed">
                {description ? description : "No Description"}
              </p>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => closeModal()}
              >
                Close
              </button>
              <button
                className="border border-gray-900 bg-gray-900 text-white p-2 my-4 hover:bg-opacity-80"
                type="button"
                onClick={() => {
                  addToCart();
                  closeModal();
                  alert(`${title} added to your cart`);
                }}
              >
                <FontAwesomeIcon
                  icon={faCartPlus}
                  className="text-gray-200 mr-1"
                />
                Add to the cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
