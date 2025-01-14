import * as React from "react";

export const FooterSection = ({ title, items }) => {
  return (
    <nav
      className="flex flex-col text-white"
      role="navigation"
      aria-label={`${title} navigation`}
    >
      <h2 className="text-base">{title}</h2>
      {items.map((item, index) => (
        <a
          href="#"
          key={index}
          className="mt-3 hover:underline focus:outline-none focus:ring-2 focus:ring-white"
          tabIndex="0"
        >
          {item.title}
        </a>
      ))}
    </nav>
  );
};
