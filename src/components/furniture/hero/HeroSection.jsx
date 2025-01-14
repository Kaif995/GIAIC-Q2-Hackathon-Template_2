import * as React from "react";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export function HeroSection() {
  return (
    <main
      className="flex overflow-hidden flex-col justify-center px-16 py-16 bg-white max-md:px-5"
      role="main"
      aria-label="Hero section"
    >
      <section
        className="overflow-hidden pl-16 bg-indigo-950 max-md:pl-5 max-md:max-w-full"
        aria-label="Furniture showcase"
      >
        <div className="flex gap-5 max-md:flex-col">
          <HeroContent />
          <HeroImage />
        </div>
      </section>
    </main>
  );
}
