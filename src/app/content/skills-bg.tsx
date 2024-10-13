"use client";
import React from "react";
import Image from "next/image";

const SkillsBackground = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <div className="absolute h-full w-full bg-sky-950 gradient-transparent"></div>
      <Image
        src="/angular.svg"
        alt="angular"
        width={128}
        height={128}
        className="absolute h-auto w-24"
        style={{
          top: `20%`,
          left: `5%`,
        }}
      />
      <Image
        src="/nextjs.svg"
        alt="nextjs"
        width={128}
        height={128}
        className="absolute h-auto w-16"
        style={{
          top: `25%`,
          left: `25%`,
        }}
      />
      <Image
        src="/aggrid.svg"
        alt="aggrid"
        width={128}
        height={128}
        className="absolute h-auto w-20"
        style={{
          top: `25%`,
          left: `42%`,
        }}
      />
      <Image
        src="/echarts.png"
        alt="echarts"
        width={643}
        height={146}
        className="absolute h-auto w-32"
        style={{
          top: `20%`,
          left: `55%`,
        }}
      />
      <Image
        src="/nx.png"
        alt="nx"
        width={128}
        height={128}
        className="absolute h-auto w-16 invert opacity-70"
        style={{
          top: `30%`,
          left: `57%`,
        }}
      />
      <Image
        src="/aspnetcore.jpg"
        alt="aspnetcore"
        width={128}
        height={128}
        className="absolute h-auto w-48 rounded-3xl"
        style={{
          top: `45%`,
          left: `20%`,
        }}
      />
      <Image
        src="/sqlserver.png"
        alt="sqlserver"
        width={128}
        height={128}
        className="absolute h-auto w-16"
        style={{
          top: `43%`,
          left: `5%`,
        }}
      />
      <Image
        src="/postgresql.webp"
        alt="postgresql"
        width={128}
        height={128}
        className="absolute h-auto w-20"
        style={{
          top: `45%`,
          left: `55%`,
        }}
      />
      <Image
        src="/signalr.jpg"
        alt="signalr"
        width={128}
        height={128}
        className="absolute h-auto w-20 rounded-full"
        style={{
          top: `55%`,
          left: `5%`,
        }}
      />
      <Image
        src="/azure.png"
        alt="azure"
        width={128}
        height={128}
        className="absolute h-auto w-48"
        style={{
          top: `52%`,
          left: `52%`,
        }}
      />
      <Image
        src="/azuredevops.png"
        alt="azure devops"
        width={689}
        height={392}
        className="absolute h-auto w-32"
        style={{
          top: `72%`,
          left: `52%`,
        }}
      />
      <Image
        src="/docker.png"
        alt="docker"
        width={128}
        height={128}
        className="absolute h-auto w-24"
        style={{
          top: `75%`,
          left: `5%`,
        }}
      />
      <Image
        src="/kubernetes.png"
        alt="kubernetes"
        width={128}
        height={128}
        className="absolute h-auto w-32"
        style={{
          top: `70%`,
          left: `25%`,
        }}
      />
    </div>
  );
};

export default SkillsBackground;
