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
import logo from "public/logo.png";
import { useState } from "react";
import Link from "next/link";
import { cardsData, projects } from "@/data";

const burtons = Burtons({ src: "../../public/Burtons.otf" });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Mohammadhs Portfolio</title>
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between xss:flex-col-reverse">
            <div className="flex justify-center items-center cursor-pointer xss:pt-6">
              <Image src={logo} alt="logo" width={50} height={50} />
              <h1
                className={`text-xl dark:text-gray-200 ${burtons.className} pl-4`}
              >
                Mohammadhossein
              </h1>
            </div>
            <ul className="flex items-center xss:justify-between">
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
                  href="MohammadhosseinAsadi.pdf"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-4xl py-2 text-teal-600 font-medium md:text-6xl sm:text-5xl xss:text-2xl xss:font-bold">
              Mohammadhossein Asadi
            </h2>
            <h3 className="text-2xl py-2 md:text-4xl dark:text-gray-200">
              Front-end Developer
            </h3>
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
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 xss:right-2">
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
              Im thrilled to offer you a wide array of services that cater to
              your specific needs. Whether you need help with brand design to
              give your business a unique identity, or require{" "}
              <span className="text-teal-500">top-notch</span> programming
              skills to bring your website to life, Ive got you covered.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Moreover, I absolutely love sharing my knowledge, so if youre
              interested in <span className="text-teal-500">learning</span>, I
              offer personalized teaching and training sessions too. Lets{" "}
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
                <h3 className="text-xl font-medium pt-8 pb-2 dark:text-gray-200">
                  {card.title}
                </h3>
                <p className="dark:text-gray-400">{card.description}</p>
                <h4 className="py-4 text-teal-600">{card.toolsTitle}</h4>
                {card.tools.map((item) => (
                  <p
                    key={item}
                    className="font-medium text-gray-800 py-1 dark:text-gray-400"
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
              In need of a skilled{" "}
              <span className="text-teal-500">front-end</span> programmer to
              transform your ideas into captivating websites and web
              applications? Your search ends here! With over 2 years of
              experience in front-end development, I offer{" "}
              <span className="text-teal-500">top-notch</span> services that
              will <span className="text-teal-500">enhance</span> your online
              presence.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            {projects.map((project) => (
              <div key={project.alt} className="basis-1/3 flex-1">
                <Image
                  src={project.src}
                  alt={project.alt}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
