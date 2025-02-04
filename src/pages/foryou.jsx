import Image from "next/image";
import Home from "../../public/assets/Home.png"
import book from '../../public/assets/book.jpg'
import marker from '../../public/assets/marker.jpg'
import Link from "next/link";

export default function foryou(){
  return (
    <>
    <div className="bg-red-400">
      <nav className="flex flex-col bg-slate-600">
        <Link href={"/"}>
        <Image src={Home} className="home"
        width={100}
        height={100}/>
        </Link>
        <Image src={book} width={100}
        className="pointer-events-none"/>
        <Image src={marker} width={100}/>
      </nav>
      <div>
      <h1 className="">this is the for you page.</h1>
      </div>

    </div>
    </>
  )
}