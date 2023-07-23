import Image from "next/image";
import Head from "next/head";
import Burtons from "next/font/local";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import mh from "public/mh.png";

const burtons = Burtons({ src: "../../public/Burtons.otf" });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mohammad_sd Portfolio</title>
      </Head>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className={`text-xl ${burtons.className}`}>Mohammadhossein</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Mohammadhossein Asadi
            </h2>
            <h3 className="text-2xl py-2">Front-end Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Experienced Front-end developer specialized in ReactJS and NextJS,
              with two years of professional experience. Strong team player
              familiar with agile methodology, passionate about continuous
              learning.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillGithub />
            <AiFillLinkedin />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image
              src={mh}
              alt="mohammadhossein"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
