import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Slider from "react-slick";

const settingss = {
  centerMode: true,
  infinite: true,
  centerPadding: "0px",
  slidesToShow: 3,
  speed: 500,
  arrows: false,
  responsive: [
    {
      breakpoint: 768, // for mobile and smaller tablets
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "20px", // optional: adds space on the sides
      },
    },
  ],
};

export default function BlogNews() {
  return (
    <section className="lat-sec   pt-24 pb-75 bg-[url('/img/lat.png')] bg-cover bg-no-repeat  ">
      <div className="container mx-auto max-w-screen">
        <div className="lat-top xl:px-28 px-6 py-32">
          <div className="xl:grid xl:grid-cols-3 gap-4 items-center">
            <div className="col-span-2">
              <h2 className="text-[96px] leading-26 font-medium capitalize text-white ">
                <span>
                  <span>Latest news</span>

                  <span className="flex items-center gap-2">
                    <span>
                      <img
                        className="  w-6 md:w-12"
                        src="/img/tr.svg"
                        alt="icon"
                      />
                    </span>
                    <span> from the world</span>
                  </span>
                  <span> of creativity</span>
                </span>
                <Link
                  href={""}
                  className="w-fit relative    text-xl text-black font-medium bg-[#FEECDD] px-16 py-4 rounded-full"
                >
                  View All Blogs!
                  <span className="arow bg-[#FEECDD]   text-2xl w-13 h-13 absolute -right-13 top-0 bottom-0 m-auto flex items-center justify-center rounded-full">
                    <MdArrowOutward />
                  </span>
                </Link>
              </h2>
            </div>
            <div>
              <p className="text-3xl max-w-3xl text-white">
                Stay inspired with fresh insights, bold ideas, and design trends
                shaping the creative world. From breakthrough innovations to
                behind-the-scenes stories.
              </p>
            </div>
          </div>
        </div>
        <Slider {...settingss} className="lat-slider">
          <div className="px-6 transition-all duration-300 transform">
            <div className="lat-card bg-black p-5 rounded-xl space-y-6 scale-90 slick-slide-card">
              <div>
                <img className="rounded-xl" src="/img/lat1.png" />
              </div>
              <div className="space-y-6">
                <span className="text-white border-2 border-red-600 px-8 py-2 block w-fit text-md rounded-full">
                  Brand Guidelines
                </span>
                <h4 className="text-4xl text-white font-medium">
                  Designing for Emotion: Why Feelings Drive Clicks
                </h4>
                <p className="text-xl text-gray-300">
                 Discover how emotional design influences user decisions, builds connection, and turns visitors into loyal customers.
                </p>
              </div>
            </div>
          </div>
          <div className="px-6 transition-all duration-300 transform">
            <div className="lat-card bg-black p-5 rounded-xl space-y-6 scale-90 slick-slide-card">
              <div>
                <img className="rounded-xl" src="/img/t6.jpeg" />
              </div>
              <div className="space-y-6">
                <span className="text-white border-2 border-red-600 px-8 py-2 block w-fit text-md rounded-full">
                  Brand Guidelines
                </span>
                <h4 className="text-4xl text-white font-medium">
                 The Power of Simplicity in UI Design
                </h4>
                <p className="text-xl text-gray-300">
                 Minimalist interfaces aren’t just trendy — they improve clarity, boost performance, and create seamless user journeys.
                </p>
              </div>
            </div>
          </div>
          <div className="px-6 transition-all duration-300 transform">
            <div className="lat-card bg-black p-5 rounded-xl space-y-6 scale-90 slick-slide-card">
              <div>
                <img className="rounded-xl" src="/img/t3.jpeg" />
              </div>
              <div className="space-y-6">
                <span className="text-white border-2 border-red-600 px-8 py-2 block w-fit text-md rounded-full">
                  Brand Guidelines
                </span>
                <h4 className="text-4xl text-white font-medium">
                 From Idea to Interface: The MVP Design Mindset
                </h4>
                <p className="text-xl text-gray-300">
                 Learn how to design lean, launch fast, and validate your product vision without overcomplicating the first release.
                </p>
              </div>
            </div>
          </div>
           <div className="px-6 transition-all duration-300 transform">
            <div className="lat-card bg-black p-5 rounded-xl space-y-6 scale-90 slick-slide-card">
              <div>
                <img className="rounded-xl" src="/img/lat1.png" />
              </div>
              <div className="space-y-6">
                <span className="text-white border-2 border-red-600 px-8 py-2 block w-fit text-md rounded-full">
                  Brand Guidelines
                </span>
                <h4 className="text-4xl text-white font-medium">
                  Designing for Emotion: Why Feelings Drive Clicks
                </h4>
                <p className="text-xl text-gray-300">
                 Discover how emotional design influences user decisions, builds connection, and turns visitors into loyal customers.
                </p>
              </div>
            </div>
          </div>
          <div className="px-6 transition-all duration-300 transform">
            <div className="lat-card bg-black p-5 rounded-xl space-y-6 scale-90 slick-slide-card">
              <div>
                <img className="rounded-xl" src="/img/t6.jpeg" />
              </div>
              <div className="space-y-6">
                <span className="text-white border-2 border-red-600 px-8 py-2 block w-fit text-md rounded-full">
                  Brand Guidelines
                </span>
                <h4 className="text-4xl text-white font-medium">
                 The Power of Simplicity in UI Design
                </h4>
                <p className="text-xl text-gray-300">
                 Minimalist interfaces aren’t just trendy — they improve clarity, boost performance, and create seamless user journeys.
                </p>
              </div>
            </div>
          </div>
          <div className="px-6 transition-all duration-300 transform">
            <div className="lat-card bg-black p-5 rounded-xl space-y-6 scale-90 slick-slide-card">
              <div>
                <img className="rounded-xl" src="/img/t3.jpeg" />
              </div>
              <div className="space-y-6">
                <span className="text-white border-2 border-red-600 px-8 py-2 block w-fit text-md rounded-full">
                  Brand Guidelines
                </span>
                <h4 className="text-4xl text-white font-medium">
                 From Idea to Interface: The MVP Design Mindset
                </h4>
                <p className="text-xl text-gray-300">
                 Learn how to design lean, launch fast, and validate your product vision without overcomplicating the first release.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
