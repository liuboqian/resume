"use client";
import React, { useState } from "react";
import Bullet from "./bullet";
import AnimeCard from "./anime-card";
import clsx from "clsx";

const ExperiencePage = () => {
  const [currentHover, setHover] = useState("elekta");
  return (
    <section
      id="experience"
      className="h-screen snap-start flex flex-col items-stretch p-8 overflow-visible"
    >
      <h2 className="text-4xl font-semibold m-16 mb-2 text-center">
        Experience
      </h2>
      <div
        className="flex-auto flex items-center relative overflow-hidden -m-16 p-16"
        style={{
          transformStyle: "preserve-3d",
          perspective: "50rem",
        }}
      >
        <AnimeCard
          id="elekta"
          header="Elekta"
          description="From Jan.2021 to now"
          state={currentHover === "elekta" ? "center" : "left"}
          className={clsx("absolute", {
            "w-2/3 h-4/5": currentHover === "elekta",
            "w-1/3 h-full -left-[2%]": currentHover !== "elekta",
          })}
          onFocus={(id) => setHover(id)}
        >
          <h2>
            <em>Patient Management System</em>
          </h2>
          <Bullet>
            Lead frontend rewrite for a legacy jQuery project using Angular 12,
            and use Nx as monorepo. The project is separated into 10 libraries,
            including a common library, a main entry and feature libraries. Then
            migrate to Angular 16.
          </Bullet>
          <Bullet>Heavy use on Angular Material and AG-Grid.</Bullet>
          <Bullet>
            Use dotnet core in backend, familiar with EF Core, SignalR.
          </Bullet>
          <Bullet>
            Cloud based, use Azure DevOps deploy to Azure App Service, Log
            Analytics, Storage Account. Also maintain and improve CI/CD
            pipeline.
          </Bullet>
          <Bullet>
            Follow agile development process, always deliver a full feature,
            including FE and BE, db schema and sometimes UI design with figma.
          </Bullet>
          <Bullet>
            Receive and process requirements from US team, provide proposals and
            system design in most cases.
          </Bullet>
          <h2>
            <em>Existing C++ project enhancement</em>
          </h2>
          <Bullet>Implement TLS support with openssl.</Bullet>
          <Bullet>Has domain knowledge about DICOM.</Bullet>
          <h2>
            <em>Small concept proof Next.js project</em>
          </h2>
          <Bullet>
            Self motivated, Postgresql as db, keycloak as IAM, use prisma and
            shadcn UI.
          </Bullet>
          <Bullet>
            Integrate with an AI agent that can retrieve data or execute
            operation.
          </Bullet>
          <h2>
            <em>Other</em>
          </h2>
          <Bullet>Organize tech talk and legacy code review.</Bullet>
          <Bullet>Provide tech support to other teams.</Bullet>
        </AnimeCard>
        <AnimeCard
          id="aspen"
          header="AspenTech"
          description="From Jul.2017 to Jan.2021"
          state={
            currentHover === "aspen"
              ? "center"
              : currentHover === "elekta"
                ? "right"
                : "left"
          }
          className={clsx("absolute", {
            "w-1/3 h-full left-[62%] z-10": currentHover === "elekta",
            "w-2/3 h-4/5 left-[20%]": currentHover === "aspen",
            "w-1/3 h-full left-[5%] z-10": currentHover === "school",
          })}
          onFocus={(id) => setHover(id)}
        >
          <h2>
            <em>Contribute to a data visualization project</em>
          </h2>
          <Bullet>
            Medium size Angular project, use eCharts for data visualization.
          </Bullet>
          <Bullet>Manage code using Perforce.</Bullet>
          <h2>
            <em>Add features to a large WPF Project</em>
          </h2>
          <h2>
            <em>Petroleum process simulation</em>
          </h2>
          <Bullet>
            Build dynamic simulation with Aspen Plus and Aspen Hysys.
          </Bullet>
          <Bullet>Develop a python tool to visualize and convert data.</Bullet>
          <Bullet>Rewrite the tool with C# for performance.</Bullet>
        </AnimeCard>
        <AnimeCard
          id="school"
          header="At School"
          description="From Sep.2010 to Jul.2017"
          state={currentHover === "school" ? "center" : "right"}
          className={clsx("absolute", {
            "w-1/3 h-full left-[75%]": currentHover !== "scroll",
            "w-2/3 h-4/5 left-[25%]": currentHover === "school",
          })}
          onFocus={(id) => setHover(id)}
        >
          <Bullet>
            CAPEOPEN Basic Class Library, a COM compatible library, with 3
            examples. Check here:
            <a
              className={clsx("text-blue-500 underline", {
                "pointer-events-none": currentHover !== "school",
              })}
              href="https://github.com/liuboqian/CasterUnitCore"
            >
              CasterUnitCore
            </a>
          </Bullet>
          <Bullet>
            Develop chemical reactor modules using MFC, mainly work on numeric
            algorithm.
          </Bullet>
          <Bullet>
            Process simulation for a real world petroleum plant equipment in
            Shandong, analyze result and provide evaluation report.
          </Bullet>
        </AnimeCard>
      </div>
    </section>
  );
};

export default ExperiencePage;
