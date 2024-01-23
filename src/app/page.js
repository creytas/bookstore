"use client";
import { useState, useEffect } from "react";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import Booklist from "@/components/list/booklist";
import Header from "@/components/navbar/header";
//import Modal from "@/components/card/modal";
import { books } from "@/lib/data";

export default function Home() {
  const [data, setData] = useState(books);
  const [filtered, setFiltered] = useState(books);
  const [cartItems, setCartItems] = useState(0);
  // const [selectedBook, setSelectedBook] = useState({
  //   image: "",
  //   title: "",
  //   description: "",
  //   price: "0",
  //   rating: null,
  // });
  const [isFiltered, setIsFiltered] = useState(false);
  //  const [isOpened, setIsOpened] = useState(false);

  const filterResult = (input) => {
    let filteredData = data.flat().filter((item) => {
      const title = item.title.toLowerCase();
      const keyword = input.toLowerCase();
      return title.indexOf(keyword) > -1;
    });
    setFiltered(filteredData);
  };

  useEffect(() => {
    setData(data);
  }, []);
  const addToCart = () => setCartItems(cartItems + 1);

  return (
    <main className="w-screen min-h-screen relative">
      <Header
        cartItems={cartItems}
        filter={filterResult}
        setIsFiltered={setIsFiltered}
      />
      <Booklist
        titleIcon={faBookmark}
        title="best-seller"
        data={isFiltered ? filtered : data}
        addToCart={addToCart}
        // setIsOpened={setIsOpened}
        // setSelectedBook={setSelectedBook}
      />
      {/* <Modal data={selectedBook} isOpened={isOpened} /> */}
    </main>
  );
}
