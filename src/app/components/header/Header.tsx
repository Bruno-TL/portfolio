import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between px-40 m-3 items-center border-2 border-dotted border-pink-700">
      <section className="w-2/5 flex justify-center">
        <Image src="/assets/T.BRUNOo.png" alt="Logo" width={100} height={100} />
      </section>
      <section className="w-2/5 flex items-center h-16 border border-transparent rounded-xl bg-gradient-to-r from-violet-950 via-black to-pink-800">
        <nav className=" w-full h-full flex  ">
          <ul className="w-full h-full flex py-2 ">
            <Link
              href="#Home"
              className="text-white flex items-center justify-center border-r-white font-medium text-lg border border-transparent w-1/3 hover:opacity-60 hover:text-pink-500 transition duration-700 "
            >
              Home
            </Link>
            <Link
              href="#About"
              className="text-white flex items-center justify-center border-r-white font-medium text-lg border border-transparent w-1/3 hover:opacity-60 hover:text-zinc-600 transition duration-700"
            >
              About
            </Link>
            <Link
              href="#Contact"
              className="text-white flex items-center justify-center font-medium text-lg w-1/3 hover:opacity-60 hover:text-violet-500 transition duration-700"
            >
              Contact
            </Link>
          </ul>
        </nav>
      </section>
    </header>
  );
}
