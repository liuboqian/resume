"use client";

import Image from "next/image";

export default function HelloPage() {
  return (
    <section
      id="hello"
      className="h-screen snap-start flex flex-col items-center justify-center"
    >
      <div className="flex-1 grid grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr] gap-8 justify-items-center items-center">
        <Image
          src="/avatar.png"
          height={200}
          width={200}
          alt="Boqian Liu"
          className="row-start-2 relative left-24"
        />
        <h1 className="text-6xl font-bold row-start-2 col-start-2 col-span-2">
          Hi,
          <br />
          <span className="text-4xl">
            This is <b>Boqian Liu</b>
          </span>
          <br />
          <span className="text-2xl font-normal">
            A full-stack Software Engineer
          </span>
        </h1>
        <p className="text-xl row-start-3 col-span-3 m-8">
          I have worked for 6 years in this area, first start from
          <b> chemical engineering simulation</b> software, then switch to
          <b> health care software</b>. Now I&apos;m seeking for a senior
          developer role. <br /> As a full-stack developer, I can contribute
          from proposal to UI design, implementation and finally deliver to
          customer.
        </p>
      </div>
      <p className="text-center text-gray-400 animate-bounce">
        Slide for more...
      </p>
    </section>
  );
}
