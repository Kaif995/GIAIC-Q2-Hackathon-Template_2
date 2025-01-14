"use client"
import * as React from "react";

export const NewsletterForm = () => {
  return (
    <div className="flex flex-col text-base max-md:max-w-full">
      <h2 className="self-start text-white">Join our mailing list</h2>
      <form
        className="flex flex-wrap mt-4 w-full max-md:max-w-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="emailInput" className="sr-only">
          Enter your email address
        </label>
        <input
          type="email"
          id="emailInput"
          className="overflow-hidden flex-1 shrink px-8 py-4 text-white whitespace-nowrap bg-white bg-opacity-10 min-w-[240px] max-md:px-5 max-md:max-w-full"
          placeholder="your@email.com"
          aria-label="Email address"
        />
        <button
          type="submit"
          className="overflow-hidden gap-2.5 self-start px-8 py-4 bg-white text-indigo-950 max-md:px-5 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};
