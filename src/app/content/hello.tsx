"use client";

import Image from "next/image";

export default function HelloPage() {
  return (
    <section
      id="hello"
      className="h-screen snap-start flex flex-col items-center justify-center gap-8 overflow-auto"
    >
      <div className="flex flex-row">
        <Image
          src="/avatar.png"
          height={200}
          width={200}
          alt="Boqian Liu"
          className="m-auto mr-16"
        />
        <h1 className="text-6xl font-bold">
          Hi,
          <br />
          <span className="text-2xl md:text-4xl">
            This is <b>Boqian Liu (刘博谦)</b>
          </span>
          <br />
          <span className="text-2xl font-normal">
            A full-stack Software Engineer
          </span>
        </h1>
      </div>

      <p className="text-xl m-4 mt-0">
        I have worked 6 years of experience as a developer. First start from
        <b> chemical engineering simulation</b> software, then switch to
        <b> health care software</b>.
        <br />
        Now I&apos;m seeking for a senior developer role.
        <br />
        As a full-stack developer, I can contribute from system design to UI
        design, implementation and finally deliver to customer.
      </p>
      <p className="mt-8 text-center text-gray-400 animate-bounce">
        Slide for more...
      </p>
    </section>
  );
}
