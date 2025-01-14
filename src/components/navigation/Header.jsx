import * as React from "react";
import { MainNavigation } from "./MainNavigation";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import CartItem from "../shoppingCart/CartItem";


export function Header() {
  return (
    <header className="flex overflow-hidden flex-col px-7 py-5 bg-white max-md:px-5">
      <div className="flex flex-wrap gap-5 justify-between items-center w-full max-md:mr-0.5 max-md:max-w-full">

        <CiSearch
          loading="lazy"
          className="object-contain shrink-0 self-stretch my-auto w-4 bg-blend-multiply aspect-square text-black"
        />
       <Link  href="/"> <h1 className="self-stretch text-2xl text-zinc-800">Avion</h1></Link>
        <div
          className="flex gap-4 self-stretch my-auto"
          role="group"
          aria-label="User actions"
        >
          <Link  href="/cart">
            <button
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              aria-label="Search"
            >
              <CiShoppingCart
                loading="lazy"
                className="object-contain shrink-0 w-4 bg-blend-multiply aspect-square text-black"
              />
            </button>
          </Link>
          <button
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            aria-label="Cart"
          >
            <CgProfile
              loading="lazy"
              className="object-contain shrink-0 w-4 bg-blend-multiply aspect-square fill-white"
            />
          </button>
        </div>
      </div>
      <div className="shrink-0 mt-5 h-px border border-solid border-black border-opacity-10 max-md:max-w-full" />
      <MainNavigation />
    </header>
  );
}
