import * as React from "react";

function CartItem({ name, description, price, image }) {
  return (
    <div className="flex gap-5 items-center mt-5 first:mt-0">
      <img
        loading="lazy"
        src={image}
        alt={name}
        className="object-contain shrink-0 self-stretch my-auto aspect-[0.81] w-[109px]"
      />
      <div className="flex flex-col self-stretch my-auto">
        <div className="text-xl leading-snug">{name}</div>
        <div className="mt-2 text-sm leading-5">{description}</div>
        <div className="mt-2 text-base">£{price}</div>
      </div>
    </div>
  );
}

export default CartItem;