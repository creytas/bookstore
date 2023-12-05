import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import Ratings from "@/components/card/ratings";
import Card from "@/components/card/card";

export default function Home() {
  return (
    <main className="w-screen min-h-screen">
      <h1 className="w-full flex items-center space-x-2 px-4 border border-red-600 bg-white">
        <FontAwesomeIcon icon={faBookmark} className="text-blue-900" />
        <span className="text-blue-900">Bookstore</span>
        <Ratings />
      </h1>
      <div className="grid grid-cols-6 gap-3 px-4 bg-white">
        <Card image="/assets/bescherelle_cover.jpg" title="Bescherelle Francais" price="10" />
        <Card image="/assets/fireworks_cover.png" title="Fireworks" price="0" rating={1} />
        <Card image="/assets/math_cover.jpg" title="Maths 6" price="100,000" rating={2} />
        <Card image="/assets/physique_cover.jpeg" title="Physique Chimie 2" price="50,000" rating={3} />
        <Card image="/assets/histoire_cover.jpg" title="Histoire 1" price="500" rating={4} />
        <Card title="Le Robert college" price="2,300" rating={5} />
      </div>
    </main>
  );
}
