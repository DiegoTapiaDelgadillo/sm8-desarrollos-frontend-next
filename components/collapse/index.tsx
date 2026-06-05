"use client";

import { useState } from "react";
import PlusSvg from "../plusSvg";

interface CollapseProps {
  title: string;
  text: string;
}

export default function Collapse({ title, text }: CollapseProps) {
  const [collapse, setCollapse] = useState(false);

  const showInfo = () => {
    setCollapse(!collapse);
  };

  return (
    <>
      <div
        className="border-t py-4 lg:py-8 2xl:py-16 border-neutral-500 cursor-pointer"
        key={title}
        onClick={showInfo}
      >
        <div className="flex justify-between w-full items-center">
          <h1 className="text-xl lg:text-4xl">{title}</h1>
          <PlusSvg className={collapse ? "hidden" : "block"} />
          <p
            className={
              collapse
                ? "text-3xl block hover:text-black/50 ease-in-out duration-300 cursor-pointer"
                : "hidden"
            }
          >
            -
          </p>
        </div>
        <h2
          className={
            collapse
              ? "text-justify text-xs sm:text-base 2xl:text-xl text-neutral-500 pt-4 block animate-fade"
              : "hidden"
          }
        >
          {text}
        </h2>
      </div>
    </>
  );
}
