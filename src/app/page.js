import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import Card from "@/components/card/card";
import Booklist from "@/components/list/booklist";

export default function Home() {
  const books =[
    {
      image:"/assets/bescherelle_cover.jpg",
      title:"Bescherelle Francais",
      price:"10",
      rating:null
    },
    {
      image:"/assets/fireworks_cover.png",
      title:"Fireworks",
      price:"1",
      rating:1
    },
    {
      image:"/assets/math_cover.jpg",
      title:"Maths 6",
      price:"100,000",
      rating:2
    },
    {
      image:"/assets/physique_cover.jpeg",
      title:"Physique Chimie 2",
      price:"50,000",
      rating:3
    },
    {
      image:"/assets/histoire_cover.jpg",
      title:"Histoire 1",
      price:"500",
      rating:4
    },
    {
      image:"",
      title:"Le Robert college",
      price:"2,300",
      rating:5
    }
  ]
  return (
    <main className="w-screen min-h-screen">
      <Booklist titleIcon={faBookmark} title="best-seller">
        {
          books.map((book, index)=>{
            return <Card key={index} data={book} />
          })
        }
      </Booklist>
    </main>
  );
}
