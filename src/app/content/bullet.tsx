import React from "react";

const Bullet = ({
  children,
  level = 1,
  color = "gray",
}: {
  children: React.ReactNode;
  level?: number;
  color?: string;
}) => {
  const indent =
    level === 1
      ? "ml-4 mb-4 first:mt-4 last:mb-0"
      : level === 2
        ? "ml-8 mb-2 first:mt-2 last:mb-0"
        : "ml-12 mb-2 first:mt-2 last:mb-0";
  const size =
    level === 1 ? "w-4 h-4 translate-y-1" : level === 2 ? "w-2 h-2" : "w-2 h-2";
  return (
    <div
      className={`${indent} leading-4 grid grid-cols-[25px_1fr] items-baseline`}
    >
      <span
        className={`block ${size} rounded-full`}
        style={{ background: color }}
      ></span>
      <span className="col-start-2">{children}</span>
    </div>
  );
};

export default Bullet;
