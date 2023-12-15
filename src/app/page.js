"use client";
import { useState, useEffect } from "react";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import Booklist from "@/components/list/booklist";
import Header from "@/components/navbar/header";
import { books } from "@/lib/data";

export default function Home() {
  const [data, setData] = useState(books);
  const [filtered, setFiltered] = useState(books);
  const [isFiltered, setIsFiltered] = useState(false);

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

  return (
    <main className="w-screen min-h-screen">
      <Header filter={filterResult} setIsFiltered={setIsFiltered} />
      <Booklist
        titleIcon={faBookmark}
        title="best-seller"
        data={isFiltered ? filtered : data}
      />
    </main>
  );
}
