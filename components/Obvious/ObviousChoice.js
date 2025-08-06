import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Marquee from "react-fast-marquee";

export default function ObviousChoice({ onOpenModal }) {
  return (
    <section className="make-sec bg-white">
      <div className="container mx-auto max-w-screen">
        <div className="m-top">
          <div className="xl:grid xl:grid-cols-2 gap-4 items-center xl:px-28 px-6 py-32">
            <div>
              <h2 className="text-[72px] leading-22 font-medium capitalize">
                <span> Make your</span>

                <span className="flex items-center gap-2">
                  <span>
                    <img
                      className="  w-6 md:w-8"
                      src="/img/tr.svg"
                      alt="icon"
                    />
                  </span>
                  <span> brand the</span>
                </span>

                <span> obvious choice</span>
              </h2>
            </div>
            <div className="flex flex-col justify-center items-center space-y-12">
              <p className="text-xl   leading-10 pl-4 max-w-sm">
                We craft brands that stand out with clarity and purpose. From
                strategy to visuals, we help you create a distinct identity that
                resonates with your audience 
              </p>
              <div className="pr-24">
                <button
                 onClick={onOpenModal}
                  className="w-fit relative flex text-xl font-medium bg-[#FEECDD] px-16 py-4 rounded-full"
                >
                  Let's Explore
                  <span className="arow bg-[#FEECDD]  text-2xl w-13 h-13 absolute -right-13 top-0 bottom-0 m-auto flex items-center justify-center rounded-full">
                    <MdArrowOutward />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="m-btm pb-12 space-y-4">
          {/* Top Row - Right to Left */}
          <Marquee
            direction="right"
            pauseOnHover={true}
            speed={50}
            className="top-im"
          >
            <div className="m-img mr-4">
              <img className="rounded-xl" src="/img/p1.png" alt="p1" />
            </div>
            <div className="m-img mr-4">
              <img className="rounded-xl" src="/img/p2.png" alt="p2" />
            </div>
            <div className="m-img mr-4">
              <img className="rounded-xl" src="/img/p3.png" alt="p3" />
            </div>
          </Marquee>

          {/* Bottom Row - Left to Right */}
          <Marquee pauseOnHover={true} speed={50} className="btm-im">
            <div className="m-img mr-4">
              <img className="rounded-xl" src="/img/p4.png" alt="p4" />
            </div>
            <div className="m-img mr-4">
              <img className="rounded-xl" src="/img/p5.png" alt="p5" />
            </div>
            <div className="m-img mr-4">
              <img className="rounded-xl" src="/img/p6.png" alt="p6" />
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
