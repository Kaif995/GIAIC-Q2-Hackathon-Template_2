import * as React from "react";

export function NavigationLink({ text }) {
  return (
    <a
      href={`#${text.toLowerCase()}`}
      className="text-base text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      role="menuitem"
    >
      {text}
    </a>
  );
}
