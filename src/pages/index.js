import Image from "next/legacy/image";
import Head from "next/head";
import Burtons from "next/font/local";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import mh from "public/mh.png";
import web1 from "public/web1.png";
import web2 from "public/web2.png";
import web3 from "public/web3.png";
import web4 from "public/web4.png";
import web5 from "public/web5.png";
import web6 from "public/web6.png";
import { useState } from "react";
import Link from "next/link";
import { cardsData } from "@/data";

const burtons = Burtons({ src: "../../public/Burtons.otf" });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Mohammad_sd Portfolio</title>
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className={`text-xl dark:text-gray-200 ${burtons.className}`}>
              Mohammadhossein
            </h1>
            <ul className="flex items-center">
              <li>
                {darkMode ? (
                  <BsFillSunFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl text-gray-200"
                  />
                ) : (
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl"
                  />
                )}
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
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Mohammadhossein Asadi
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Front-end Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400">
              Experienced Front-end developer specialized in ReactJS and NextJS,
              with two years of professional experience. Strong team player
              familiar with agile methodology, passionate about continuous
              learning.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <Link
              href={"https://github.com/mohammadhossein-asadi"}
              target="_blank"
            >
              <AiFillGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mohammadhossein-asadi/"
              target="_blank"
            >
              <AiFillLinkedin />
            </Link>
            <Link href="https://twitter.com/Mohammad_h_sd" target="_blank">
              <AiFillTwitterCircle />
            </Link>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image
              src={mh}
              alt="mohammadhossein"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-200">
              Service I offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              As a <span className="text-teal-500">front-end</span> programmer,
              I'm thrilled to offer you a wide array of services that cater to
              your specific needs. Whether you need help with brand design to
              give your business a unique identity, or require{" "}
              <span className="text-teal-500">top-notch</span> programming
              skills to bring your website to life, I've got you covered.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Moreover, I absolutely love sharing my knowledge, so if you're
              interested in <span className="text-teal-500">learning</span>, I
              offer personalized teaching and training sessions too. Let's{" "}
              <span className="text-teal-500">collaborate</span> and create
              something amazing together!
            </p>
          </div>
          <div className="lg:flex gap-10">
            {cardsData.map((card) => (
              <div
                key={card.id}
                className="text-center shadow-lg p-10 rounded-xl my-10"
              >
                <Image
                  className="mx-auto"
                  src={card.imageUrl}
                  alt="design"
                  width={100}
                  height={100}
                />
                <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-200">
                  {card.title}
                </h3>
                <p className="dark:text-gray-400">{card.description}</p>
                <h4 className="py-4 text-teal-600">{card.toolsTitle}</h4>
                {card.tools.map((item) => (
                  <p
                    key={item}
                    className="text-gray-800 py-1 dark:text-gray-400"
                  >
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-200">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-500">
              As a <span className="text-teal-500">front-end</span> programmer,
              I'm thrilled to offer you a wide array of services that cater to
              your specific needs. Whether you need help with brand design to
              give your business a unique identity, or require{" "}
              <span className="text-teal-500">top-notch</span> programming
              skills to bring your website to life, I've got you covered.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-500">
              Moreover, I absolutely love sharing my knowledge, so if you're
              interested in <span className="text-teal-500">learning</span>, I
              offer personalized teaching and training sessions too. Let's{" "}
              <span className="text-teal-500">collaborate</span> and create
              something amazing together!
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                alt="web1"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                alt="web2"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                alt="web3"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                alt="web4"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                alt="web5"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                alt="web6"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
