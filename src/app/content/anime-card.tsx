"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import React, { useEffect, useRef } from "react";
import clsx from "clsx";

const AnimeCard = ({
  id,
  header,
  description,
  children,
  className,
  state,
  onFocus,
}: {
  id: string;
  header: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  state: "center" | "left" | "right";
  onFocus: (id: string) => void;
}) => {
  const element = useRef<HTMLDivElement>(null);
  const transformElement = (e: React.MouseEvent<HTMLDivElement>) => {
    if (state !== "center") return;
    const multiple = 50;
    const div = e.currentTarget as HTMLDivElement;
    const box = div.getBoundingClientRect();
    let calcX = -(e.clientY - box.y - box.height / 2) / multiple;
    let calcY = (e.clientX - box.x - box.width / 2) / multiple;

    window.requestAnimationFrame(() => {
      div.style.transform = `scale(1.1) rotateX(${calcX}deg) rotateY(${calcY}deg)`;
    });
  };
  const originalTransform =
    state === "center"
      ? "scale(1) rotateX(-2deg) rotateY(0deg)"
      : state === "left"
        ? "scale(0.7) rotateX(0deg) rotateY(90deg)"
        : "scale(0.7) rotateX(0deg) rotateY(-90deg)";
  const resetElement = (e: React.MouseEvent<HTMLDivElement>) => {
    if (state !== "center") return;
    const div = e.currentTarget as HTMLDivElement;
    window.requestAnimationFrame(() => {
      div.style.transform = originalTransform;
    });
  };
  const background =
    "drop-shadow-xl bg-white bg-opacity-80 hover:bg-sky-200 backdrop-blur-lg";
  const transition = "transition duration-50 ease-in-out";
  const layout = state === "center" ? "z-50" : "z-0";
  useEffect(() => {
    if (element.current) {
      window.requestAnimationFrame(() => {
        element.current!.style.transform = originalTransform;
      });
    }
  }, [originalTransform]);
  return (
    <Card
      ref={element}
      className={[background, transition, layout, className].join(" ")}
      style={{ transform: originalTransform }}
      onMouseMove={transformElement}
      onMouseEnter={() => onFocus(id)}
      onMouseLeave={resetElement}
    >
      <CardHeader>
        <CardTitle>{header}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent
        className={clsx("overflow-auto", {
          "overflow-hidden blur-sm": state !== "center",
        })}
        style={{ maxHeight: "80%" }}
      >
        {children}
      </CardContent>
    </Card>
  );
};

export default AnimeCard;
