import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import Ratings from "@/components/card/ratings";
import Card from "@/components/card/card";
import Booklist from "@/components/list/booklist";

export default function Home() {
  return (
    <main className="w-screen min-h-screen">
      <Booklist titleIcon={faBookmark} title="best-seller">
        <Card image="/assets/bescherelle_cover.jpg" title="Bescherelle Francais" price="10" />
        <Card image="/assets/fireworks_cover.png" title="Fireworks" price="0" rating={1} />
        <Card image="/assets/math_cover.jpg" title="Maths 6" price="100,000" rating={2} />
        <Card image="/assets/physique_cover.jpeg" title="Physique Chimie 2" price="50,000" rating={3} />
        <Card image="/assets/histoire_cover.jpg" title="Histoire 1" price="500" rating={4} />
        <Card title="Le Robert college" price="2,300" rating={5} />
      </Booklist>

      <Booklist titleIcon={faBookmark} title="upcoming">
        <Card image="/assets/bescherelle_cover.jpg" title="Bescherelle Francais" price="10" />
        <Card image="/assets/fireworks_cover.png" title="Fireworks" price="0" rating={1} />
        <Card image="/assets/math_cover.jpg" title="Maths 6" price="100,000" rating={2} />
        <Card image="/assets/physique_cover.jpeg" title="Physique Chimie 2" price="50,000" rating={3} />
        <Card image="/assets/histoire_cover.jpg" title="Histoire 1" price="500" rating={4} />
        <Card title="Le Robert college" price="2,300" rating={5} />
      </Booklist>

      <Booklist titleIcon={faBookmark} title="low cost">
        <Card image="/assets/bescherelle_cover.jpg" title="Bescherelle Francais" price="10" />
        <Card image="/assets/fireworks_cover.png" title="Fireworks" price="0" rating={1} />
        <Card image="/assets/math_cover.jpg" title="Maths 6" price="100,000" rating={2} />
        <Card image="/assets/physique_cover.jpeg" title="Physique Chimie 2" price="50,000" rating={3} />
        <Card image="/assets/histoire_cover.jpg" title="Histoire 1" price="500" rating={4} />
        <Card title="Le Robert college" price="2,300" rating={5} />
      </Booklist>      
    </main>
  );
}
