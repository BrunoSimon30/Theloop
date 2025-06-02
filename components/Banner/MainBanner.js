import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

export default function MainBanner() {
  return (
    <section className="min-h-screen h-full w-full px-6 md:px-28 pt-36 bg-[url('/img/hero_bg.svg')] bg-cover bg-no-repeat relative">
      {/* Top Banner */}
      <div className="top-ban lg:min-h-[calc(80vh-100px)] flex flex-col-reverse md:flex-row items-center justify-between w-full gap-10 md:gap-0">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-[clamp(40px,5vw+1rem,128px)] leading-[clamp(50px,6vw+1rem,170px)] font-medium capitalize">
            <span className="block">Elevate Your</span>
            <span className="flex justify-center md:justify-start gap-2">
              <span>
                <img className="mt-10 w-10 md:w-auto" src="/img/tr.svg" alt="icon" />
              </span>
              <span>Digital Presence</span>
            </span>
            <span className="block">with The Logo</span>
          </h1>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img className="  lg:ml-auto max-w-xs lg:max-w-full   " src="/img/mobile.webp" alt="Mobile" />
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="btm-ban w-full pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
          {/* Description */}
          <div>
            <p className="text-xl md:text-2xl max-w-2xl text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua ipsum dolor sit
              consectetur amet.
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-center md:justify-end">
            <Link
              href="/"
              className="w-fit relative flex text-3xl md:text-6xl capitalize text-black font-medium gap-6 items-center"
            >
              <span>Start Project!</span>
              <span className="arow text-red-700 bg-white text-2xl md:text-3xl w-14 h-14 md:w-18 md:h-18 flex items-center justify-center rounded-full">
                <MdArrowOutward />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
