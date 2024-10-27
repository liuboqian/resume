"use client";

import Image from "next/image";

export default function HelloPage() {
  return (
    <section
      id="hello"
      className="h-screen snap-start flex flex-col items-center justify-center gap-8 overflow-auto"
    >
      <div className="flex-1 flex flex-row items-center">
        <Image
          src="/avatar.png"
          height={200}
          width={200}
          alt="Boqian Liu"
          className="m-auto mr-16"
        />
        <h1 className="text-6xl font-bold">
          <span className="text-8xl ">Hi</span>,
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
        7 years of experience as a developer. First start from
        <b> chemical engineering simulation</b> software, then switch to
        <b> health care software</b>.
        <br />
        As a <b>full-stack developer</b>, I can contribute to the whole process
        from system design to UI design, implementation and finally deliver to
        customer.
        <br />
        As a <b>team player</b>, I value and cherish healthy relationships with
        collages. Sometimes I organize tech talk to share my knowledge with team
        members, and also get to know other territories from them.
      </p>
      <p className="my-8 text-center text-gray-400 animate-bounce">
        Slide for more...
      </p>
    </section>
  );
}
