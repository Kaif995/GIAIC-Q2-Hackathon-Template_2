import * as React from "react";
import { FooterSection } from "./FooterSection";
import { NewsletterForm } from "./NewsletterForm";
import {
  menuItems,
  categoryItems,
  companyItems,
  socialIcons,
} from "./FooterData";

export const Footer = () => {
  return (
    <footer
      className="flex overflow-hidden flex-col px-20 pt-14 pb-6 bg-indigo-950 max-md:px-5"
      role="contentinfo"
    >
      <div className="flex flex-wrap gap-5 justify-between items-start text-sm max-md:max-w-full">
        <FooterSection title="Menu" items={menuItems} />
        <FooterSection title="Categories" items={categoryItems} />
        <FooterSection title="Our company" items={companyItems} />
        <NewsletterForm />
      </div>

      <div className="shrink-0 mt-12 max-w-full h-px bg-indigo-800 border border-indigo-800 border-solid w-[1277px] max-md:mt-10" />

      <div className="flex flex-wrap gap-5 justify-between mt-6 w-full max-md:max-w-full">
        <p className="my-auto text-sm text-white">Copyright 2022 Avion LTD</p>
        <div
          className="flex gap-6 items-start"
          role="list"
          aria-label="Social media links"
        >
          {socialIcons.map((icon, index) => (
            <a
              key={index}
              href="#"
              className="focus:outline-none focus:ring-2 focus:ring-white rounded-full"
              role="listitem"
            >
              <img
                loading="lazy"
                src={icon.src}
                alt={icon.alt}
                className="object-contain shrink-0 w-6 bg-blend-multiply aspect-square fill-white"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
