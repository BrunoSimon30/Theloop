import React, { useState } from "react";
import Slider from "react-slick";
import { MdArrowOutward, MdArrowBack, MdArrowForward } from "react-icons/md";
import Link from "next/link";

export default function FeaturedIn() {
  const facts = [
    { number: "25+", text: "Tempor incididun sed labore et dolore magna." },
    {
      number: "50+",
      text: "Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      number: "100+",
      text: "Duis aute irure dolor in reprehenderit in voluptate.",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_, next) => setActiveSlide(next),
  };

  let sliderRef = null;

  return (
    <section className="relative   bg-white  pt-12">
      <div className="phone absolute  bottom-20 left-0 right-20 m-auto  w-fit hidden xl:block">
        <img src="/img/phone.webp" />
      </div>
      <div className="container mx-auto max-w-screen">
        <div className="top-f  xl:px-28 px-6">
          <div className="xl:grid xl:grid-cols-5 pt-4 pb-16  gap-4 items-center border-b-2 border-[#ffebdc]">
            <div className="col-span-2">
              <h2 className="  font-medium text-[clamp(20px,5vw+1rem,48px)] leading-[clamp(50px,6vw+1rem,48px)] ">
                Featured In
              </h2>
            </div>
            <div className="xl:col-span-3 flex justify-between items-center gap-2  ">
              {["f1", "f2", "f3", "f4", "f5"].map((img, index) => (
                <div
                  key={index}
                  className="bg-[#FFF9F5] border-2 border-[#ffebdc] py-5 xl:px-7 px-2 rounded-lg"
                >
                  <img src={`/img/${img}.png`} alt={`Featured ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mid-f pt-52 pb-18 xl:px-28 px-6">
          <div className="xl:grid xl:grid-cols-3 gap-4 items-center ">
            <div className="">
              <h2 className="text-[60px] leading-22 font-medium">
                <span>Design is hard</span>

                <span className="flex items-center gap-2">
                  <span>
                    <img
                      className="  w-6 md:w-8"
                      src="/img/tr.svg"
                      alt="icon"
                    />
                  </span>
                  <span> Get outside</span>
                </span>

                <span>help.</span>
              </h2>
            </div>
            <div></div>
            <div className="space-y-6">
              <p className="text-3xl   leading-10 pl-4">
                Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua ipsum dolor sit
                consectetur amet.
              </p>
              <p className="text-3xl  leading-10 pl-4">
                Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua ipsum dolor sit
                consectetur amet.
              </p>
            </div>
          </div>
        </div>
        <div className="btm-f bg-[#FEECDD] py-48">
          <div className="xl:grid xl:grid-cols-3 gap-4 items-center xl:px-28 px-6">
            <div className="count-sil-wrap   p-8 max-w-xl rounded-md">
              <div className="sil-wrap pb-10">
                <div className="flex items-center justify-between border-b pb-2">
                  <h3 className="text-xl font-semibold">Serious Facts</h3>
                  <h3 className="text-xl font-medium">
                    {String(activeSlide + 1).padStart(2, "0")} /{" "}
                    <span className="text-gray-600">
                      {String(facts.length).padStart(2, "0")}
                    </span>
                  </h3>
                </div>

                <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
                  {facts.map((fact, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center pt-12">
                        <h2 className="text-6xl xl:text-8xl font-medium">
                          {fact.number}
                        </h2>
                        <p className="text-xl max-w-[200px]">{fact.text}</p>
                      </div>
                    </div>
                  ))}
                </Slider>

                {/* Arrows */}
                <div className="flex gap-4 mt-12">
                  <button
                    onClick={() => sliderRef?.slickPrev()}
                    className="w-13 h-13 flex items-center justify-center bg-white rounded-full  text-2xl"
                  >
                    <MdArrowBack />
                  </button>
                  <button
                    onClick={() => sliderRef?.slickNext()}
                    className="w-13 h-13 flex items-center justify-center bg-white rounded-full  text-2xl"
                  >
                    <MdArrowForward />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full"></div>
            <div className="">
              <Link
                href={""}
                className="w-fit relative flex text-xl font-medium bg-white px-16 py-4 rounded-full"
              >
                Let's Explore
                <span className="arow bg-white  text-2xl w-13 h-13 absolute -right-13 top-0 bottom-0 m-auto flex items-center justify-center rounded-full">
                  <MdArrowOutward />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
