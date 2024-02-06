import Image from "next/image";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <h1>
    //     Welcome
    //   </h1>
    // </main>
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and welcome &nbsp;
        <span className="whitespace-nowrap">
          I'm <span className="font-bold">Pyae</span>
        </span>
      </p>
    </main>
  );
}
