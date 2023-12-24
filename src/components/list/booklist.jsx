import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "@/components/card/modal";
import Card from "@/components/card/card";

const Booklist = ({ titleIcon, title, data }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const openModal = (book) => {
    setSelectedBook(book);
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setSelectedBook(null);
    setIsModalOpened(false);
  };

  return (
    <section className="mt-8 pt-4 border-t border-gray-300 relative">
      <h2 className="w-1/5 flex items-center justify-center space-x-2 px-4 text-lg bg-orange-600 absolute top-[-15px] backdrop-filter backdrop-blur-sm bg-opacity-20 border border-orange-600">
        <FontAwesomeIcon icon={titleIcon} className=" text-gray-900" />
        <span className={`text-orange-600 font-black uppercase`}>{title}</span>
      </h2>
      {/* flex */}
      <div className="grid grid-cols-6 gap-3 px-4 bg-white">
        {data ? (
          data.map((book, index) => {
            return (
              <Card key={index} data={book} openModal={() => openModal(book)} />
            );
          })
        ) : (
          <div className="border border-red-700">Book not found</div>
        )}
      </div>
      {isModalOpened && <Modal data={selectedBook} closeModal={closeModal} />}
    </section>
  );
};

export default Booklist;
