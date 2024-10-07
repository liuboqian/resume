"use client";
import React, { useState } from "react";
import Bullet from "./bullet";
import AnimeCard from "./anime-card";

const ExperiencePage = () => {
  const [currentHover, setHover] = useState("elekta");
  return (
    <section
      id="experience"
      className="h-screen snap-start flex flex-col items-stretch p-8 overflow-hidden"
    >
      <h2 className="text-4xl font-semibold m-16 mb-4 text-center">
        Experience
      </h2>
      <div
        className="flex-auto flex flex-row"
        style={{
          transformStyle: "preserve-3d",
          perspective: "50rem",
        }}
      >
        <AnimeCard
          id="elekta"
          header="Elekta"
          description="From 2020 to now"
          state={currentHover === "elekta" ? "center" : "left"}
          onFocus={(id) => setHover(id)}
        >
          <Bullet>
            Lead frontend rewrite for a legacy jQuery project using Angular 12,
            and use Nx as monorepo. The project is separated into 10 libraries,
            including a common library, a main entry and feature libraries. Then
            migrate to Angular 16.
          </Bullet>
          <Bullet>Heavy use on Angular Material and AG-Grid.</Bullet>
          <Bullet>
            Develop cloud based application, hosted on Azure services.
          </Bullet>
          <Bullet>
            Agile development process, using Azure DevOps to manage project and
            also use for CI/CD.
          </Bullet>
          <Bullet>
            Implement on feature level, including FE and BE, db schema and
            sometimes UI design with figma.
          </Bullet>
          <Bullet>
            Receive and process requirements from US team, provide proposals and
            system design in most cases.
          </Bullet>
          <Bullet>
            Organize tech talk and legacy code review, also provide tech support
            to other teams.
          </Bullet>
        </AnimeCard>
        <AnimeCard
          id="aspen"
          header="AspenTech"
          description="From 2017 to 2020"
          state={
            currentHover === "aspen"
              ? "center"
              : currentHover === "elekta"
                ? "right"
                : "left"
          }
          onFocus={(id) => setHover(id)}
        >
          <Bullet>
            Develop an Angular project with echarts, maintain a small react
            project.
          </Bullet>
          <Bullet>Develop a WPF project.</Bullet>
          <Bullet>
            Petroleum process simulation using Aspen Plus and Aspen Hysys.
          </Bullet>
        </AnimeCard>
        <AnimeCard
          id="school"
          header="At School"
          description="From 2010 to 2017"
          state={currentHover === "school" ? "center" : "right"}
          onFocus={(id) => setHover(id)}
        >
          <Bullet>
            CAPEOPEN Basic Class Library, a COM compatible library, with 3
            examples
          </Bullet>
          <Bullet>
            Develop chemical reactor module, mainly work on numeric algorithm.
          </Bullet>
        </AnimeCard>
      </div>
    </section>
  );
};

export default ExperiencePage;
