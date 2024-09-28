"use client";

import Image from "next/image";

export default function HelloPage() {
  return (
    <section
      id="hello"
      className="h-screen snap-start flex flex-col items-center justify-center"
    >
      <div className="flex-1 flex flex-col justify-center text-center">
        <h1 className="text-6xl font-bold">Hi</h1>
        <br />
        <Image src="/avatar.png" height={200} width={200} alt="Boqian Liu" />
        <h1 className="text-4xl">
          This is <b>Boqian Liu</b>
        </h1>
        <p className="text-xl">I'm a Software Engineer</p>
      </div>
      <p className="text-center text-gray-400 animate-bounce">
        Slide for more...
      </p>
    </section>
  );
}
