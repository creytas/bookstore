import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import Ratings from "@/components/card/ratings";

export default function Home() {
  return (
    <main className="w-screen min-h-screen">
      <h1 className="w-1/4 flex items-center space-x-2 border border-red-600 bg-white">
        <FontAwesomeIcon icon={faBookmark} className="text-blue-900" />
        <span className="text-blue-900">Bookstore</span>
        <Ratings />
      </h1>
    </main>
  );
}
