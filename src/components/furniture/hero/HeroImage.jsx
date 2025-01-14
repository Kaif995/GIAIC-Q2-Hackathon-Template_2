import * as React from "react";

export function HeroImage() {
  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:hidden">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/2b47d56e3c75429e95bbdc40507f265e/7aad864f99f7b44815ca59ada9cbd68dc2d0167b178d4aaa17a8297a76c14454?apiKey=2b47d56e3c75429e95bbdc40507f265e&"
        alt="Modern luxury furniture showcase featuring eco-friendly designs"
        className="object-contain grow w-full aspect-[0.89]"
      />
    </div>
  );
}
