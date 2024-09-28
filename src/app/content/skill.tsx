import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const SkillPage = () => {
  return (
    <section
      id="skills"
      className="h-screen snap-start flex-row items-center justify-center relative"
    >
      <Image
        src="/skills-bg.png"
        alt="Skills Background"
        width={1024}
        height={1024}
        className="absolute h-full w-1/2 gradient-transparent top-0 left-0 slide-in"
      />
      <h2 className="text-3xl font-semibold">
        <a href="#skills">Skills</a>
      </h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="frontend">
          <AccordionTrigger>Frontend</AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Vue.js</li>
              <li>Angular</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default SkillPage;
