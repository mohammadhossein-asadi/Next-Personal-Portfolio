import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mohammad_sd Portfolio</title>
      </Head>
      <main>
        <section className="min-h-screen">
          <nav className="py-10">
            <h1>developed by mohammadhossein</h1>
            <ul>
              <li>
                <BsFillMoonStarsFill />
              </li>
              <li>
                <a href="#">Resume</a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
}
