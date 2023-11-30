import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="w-screen min-h-screen">
      <h1 className="w-1/4 flex items-center space-x-2 border border-red-600">
        <FontAwesomeIcon icon={faBookmark} />
        <span>Bookstore</span>
      </h1>
    </main>
  );
}
