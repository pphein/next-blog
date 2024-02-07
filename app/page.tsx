import Image from "next/image";
import Posts from "./components/Posts";
import Link from "next/link";
import { FaFacebook, FaGithub } from "react-icons/fa";
import MyProfilePic from "./components/MyProfilePic";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <h1>
    //     Welcome
    //   </h1>
    // </main>
    <main className="px-6 mx-auto">
      <MyProfilePic />
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and welcome &nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Pyae</span>
        </span>
      </p>
      <div className="flex flex-row justify-center sm:justify-evently align-middle gap-4 text-white text-4xl lg:text-5xl">
        <Link
          className="text-white/90 hover:text-white"
          href="https://www.facebook.com/pph.hein"
        >
          <FaFacebook />
        </Link>
        <Link
          className="text-white/90 hover:text-white"
          href="https://www.github.com/pphein"
        >
          <FaGithub />
        </Link>
      </div>
      {/* <Posts /> */}
    </main>
  );
}
