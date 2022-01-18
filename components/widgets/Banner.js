import React from "react";
import Link from "next/link";

export default function Banner() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="my-3 text-2xl font-bold tracking-wide font-serif lowercase italic">
          nee<span className="text-pink-500">fah</span>
        </p>
        <Link href="/registration/login">
          <a className="border-4 border-pink-600 tracking-wider rounded-full text-xl font-bold w-20 py-1 text-center cursor-pointer">
            login
          </a>
        </Link>
      </div>
      <div className="w-full lg:h-96 bg-teal-50 rounded-3xl lg:p-10 p-5 flex justify-between items-center mt-4">
        <div>
          <div className="capitalize font-bold lg:text-3xl md:text-2xl text-sm tracking-wide">
            buy your groceries with <br />{" "}
            <span className="text-pink-600 capitalize">ease</span> from neefah
          </div>
          <div>
            <button className="lg:mt-4 mt-2 lg:text-lg md:text-2xl text-xs border-4 border-pink-600 lg:p-3 p-2 capitalize rounded-full font-bold">
              order now
            </button>
          </div>
        </div>
        <div className="lg:w-96 lg:h-72 md:w-96 w-32">
          <img src="/images/showcase.png" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
