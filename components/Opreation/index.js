import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

export default function Operation({ onOpenModal }) {
  return (
    <section className="we-sec xl:px-28 px-6 bg-white py-32">
      <div className="container mx-auto max-w-screen">
        <div className="xl:grid xl:grid-cols-3 gap-12 ">
          <div className="col-span-2">
            <h2 className="text-[72px] leading-22 font-medium capitalize">
              <span> We are open to any</span>
              <span className="flex items-center gap-2">
                <span>
                  <img className="  w-6 md:w-8" src="/img/tr.svg" alt="icon" />
                </span>
                <span> kind of co-operation</span>
              </span>
            </h2>
          </div>
          <div className="flex flex-col justify-center items-center space-y-12">
            <div className="space  h-14 w-full"></div>
            <p className="text-xl   leading-10 pl-4 max-w-sm">
              Whether you’re a startup looking to build your MVP, a company needing a fresh redesign, or a team seeking design support — we’re here to make it happen.
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
          <div className="  ">
            <div className="wcard px-12 py-16 space-y-24 rounded-md  bg-[#F1FFE0] ">
              <div className="flex justify-between">
                <h3 className="text-8xl leading-26 font-medium">01</h3>
                <img src="/img/card1.png" />
              </div>
              <div className="space-y-6">
                <h3 className="text-5xl leading-26 font-medium uppercase">
                  mvp
                </h3>
                <p className="text-2xl   leading-10    ">
                We help you turn raw concepts into real, working products. Our focus is on launching fast with just the right features, allowing you to test, learn, and grow quickly. Build lean, move fast, and evolve with confidence.
                </p>
              </div>
            </div>
          </div>
          <div className=" ">
            <div className="wcard px-12 py-16 space-y-24 rounded-md  mt-24 bg-[#E2FDC1]">
              <div className="flex justify-between">
                <h3 className="text-8xl leading-26 font-medium">02</h3>
                <img src="/img/card2.png" />
              </div>
              <div className="space-y-6">
                <h3 className="text-5xl leading-26 font-medium capitalize">
                  Redesign
                </h3>
                <p className="text-2xl   leading-10    ">
                 Outdated interfaces and clunky experiences hold you back — we fix that. Whether it's a website, app, or platform, we revamp your product with modern design, better usability, and a sharper brand presence to re-engage your users.
                </p>
              </div>
            </div>
          </div>
          <div className=" ">
            <div className="wcard px-12 py-16 space-y-24 rounded-md  bg-[#d1ff99]  mt-52 ">
              <div className="flex justify-between">
                <h3 className="text-8xl leading-26 font-medium">03</h3>
                <img src="/img/card3.png" />
              </div>
              <div className="space-y-6">
                <h3 className="text-5xl leading-26 font-medium capitalize">
                  Team extension
                </h3>
                <p className="text-2xl   leading-10    ">
                  Need extra hands or specialized skills? We seamlessly integrate with your existing team, providing the expertise needed to speed up delivery, improve quality, and meet tight deadlines — without the hassle of hiring full-time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
