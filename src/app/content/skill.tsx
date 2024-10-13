import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SkillsBackground from "./skills-bg";
import Bullet from "./bullet";

const SkillPage = () => {
  return (
    <section
      id="skills"
      className="h-screen snap-start p-0 items-stretch justify-center relative"
    >
      <SkillsBackground className="absolute w-full md:w-2/3 h-full top-0 left-0 slide-in opacity-30 md:opacity-100" />
      <h1 className="absolute top-24 left-2 md:left-1/4 text-white text-bolder text-4xl">
        Skills
      </h1>
      <Accordion
        type="single"
        collapsible
        className="absolute w-full md:w-1/2 pt-48 md:pt-24 left-2 md:left-1/2 overflow-auto max-h-full"
        defaultValue="frontend"
      >
        <AccordionItem value="frontend">
          <AccordionTrigger>Frontend</AccordionTrigger>
          <AccordionContent className="m-2">
            <ul>
              <Bullet>
                Multiple Angular projects experience; capable of construct
                complex UI project; familiar with monorepo with Nx
              </Bullet>
              <Bullet>Heavy use on AG-Grid and Angular Material</Bullet>
              <Bullet>
                Enjoy Next.js, experience with small react project
              </Bullet>
              <Bullet>Experience with ECharts</Bullet>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="backend">
          <AccordionTrigger>Backend</AccordionTrigger>
          <AccordionContent className="m-2">
            <ul>
              <Bullet>Web Development with Asp.net Core</Bullet>
              <Bullet>Know ORM like EFCore or Prisma</Bullet>
              <Bullet>Use SignalR for realtime notification</Bullet>
              <Bullet>
                Performance tunning, primarily on sql query optimization
              </Bullet>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="language">
          <AccordionTrigger>Programming Language</AccordionTrigger>
          <AccordionContent className="m-2">
            <ul>
              <Bullet>Proficient in C# and Typescript</Bullet>
              <Bullet>Experience with Python and C++</Bullet>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="devops">
          <AccordionTrigger>DevOps</AccordionTrigger>
          <AccordionContent className="m-2">
            <ul>
              <Bullet>Agile development process with Azure DevOps</Bullet>
              <Bullet>
                Azure DevOps CI/CD pipeline, also acquaintant with Github
                Actions
              </Bullet>
              <Bullet>
                Docker and Kubernetes experience on personal projects
              </Bullet>
              <Bullet>
                Azure services, familiar with
                <ul>
                  <Bullet level={2}>App Service</Bullet>
                  <Bullet level={2}>Key Vault</Bullet>
                  <Bullet level={2}>Log Analytics</Bullet>
                  <Bullet level={2}>Application Gateway</Bullet>
                  <Bullet level={2}>Storage Account</Bullet>
                  <Bullet level={2}>Sql Server</Bullet>
                  <Bullet level={2}>Appliation Insights</Bullet>
                </ul>
              </Bullet>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="certificates">
          <AccordionTrigger>Certificates</AccordionTrigger>
          <AccordionContent className="m-2">
            <ul>
              <li className="flex items-center gap-2">
                <Image
                  src="/ckad.webp"
                  alt="ckad"
                  width={128}
                  height={128}
                  className="inline relative w-24"
                />
                Certified Kubernetes Application Developer (CKAD)
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/az900.svg"
                  alt="az900"
                  width={128}
                  height={128}
                  className="inline relative w-24"
                />
                AZ900 Azure Fundamentals
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/az204.png"
                  alt="az204"
                  width={128}
                  height={128}
                  className="inline relative w-24"
                />
                AZ204 Azure Developer Associate
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default SkillPage;
