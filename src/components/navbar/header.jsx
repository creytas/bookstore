"use client";
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBell } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Header = ({ cartItems, filter, setIsFiltered }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  return (
    <header className="grid grid-cols-4 py-2 px-8 bg-gray-100 text-black">
      <Link href="/" className="col-span-1 grid grid-rows-1">
        <Image
          src="/assets/bookstore.png"
          alt="bookstore logo"
          width={70}
          height={70}
          className="bg-gray-900 rounded-full"
        />
        <h1 className="text-2xl">
          <span className="font-black text-gray-900">Book</span>
          <span className="font-normal text-orange-600">store</span>
        </h1>
      </Link>
      <nav className="col-start-3 col-span-2 grid grid-rows-1">
        <div className="flex items-center justify-around">
          <div className="flex items-center">
            <input
              type="search"
              className="border border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-600 p-1"
              onChange={(e) => {
                setSearchKeyword(e.target.value);
                setIsFiltered(e.target.value.length > 0);
              }}
            />
            <button
              className="border border-orange-500 bg-orange-500 text-gray-100 w-24 p-1 hover:bg-opacity-80"
              onClick={() => {
                searchKeyword.length > 0
                  ? filter(searchKeyword)
                  : console.log("nothing");
              }}
            >
              Search
            </button>
          </div>
          <div className="w-1/2 flex justify-end items-center space-x-6">
            <Link href="/cart" className="flex items-center relative">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-2xl text-gray-900"
              />
              {cartItems > 0 && (
                <span className="w-[15px] flex items-center justify-center absolute right-0 bg-orange-500 bg-opacity-80 p-0.5 rounded-full text-white text-xs font-black">
                  {cartItems}
                </span>
              )}
            </Link>
            <Link href="/cart" className="flex items-center">
              <FontAwesomeIcon
                icon={faBell}
                className="text-2xl text-gray-900"
              />
            </Link>
            <button className="border border-orange-500 bg-orange-500  p-1 text-gray-100 w-2/5 flex justify-center items-center space-x-2 hover:bg-opacity-80">
              Login
            </button>
          </div>
        </div>

        <div className="hidden border border-yellow-600">admin nav</div>
      </nav>
    </header>
  );
};

export default Header;
