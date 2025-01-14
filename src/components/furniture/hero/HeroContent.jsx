"use client"
import * as React from "react";

export function HeroContent() {
  const handleCollectionClick = () => {
    // Collection view logic here
  };

  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col self-stretch my-auto text-white max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[513px]">
          <h1 className="text-3xl leading-10 max-md:max-w-full">
            The furniture brand for the future, with timeless designs
          </h1>
          <button
            className="overflow-hidden gap-2.5 self-start px-8 py-4 mt-10 text-base bg-stone-50 bg-opacity-10 hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all max-md:px-5 max-md:mt-10"
            onClick={handleCollectionClick}
            aria-label="View furniture collection"
            role="button"
            tabIndex={0}
          >
            View collection
          </button>
        </div>
        <p className="mt-48 text-lg leading-7 max-md:mt-10 max-md:max-w-full">
          A new era in eco friendly furniture with Avelon, the French luxury
          retail brand with nice fonts, tasteful colors and a beautiful way to
          display things digitally using modern web technologies.
        </p>
      </div>
    </div>
  );
}
