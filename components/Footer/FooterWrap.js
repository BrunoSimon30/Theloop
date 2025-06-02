import Link from "next/link";
import { MdArrowOutward, MdArrowBack, MdArrowForward } from "react-icons/md";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

export default function FooterWrap() {
  return (
    <div>
      <section className="relative  px-12   -mt-64 z-10">
        <div className="shap">
          <img
            className="absolute -top-2 left-0  w-full -z-1"
            src="/img/shade.png"
          />
        </div>
        <div className="container mx-auto max-w-screen bg-[#FEECDD] xl:px-28 px-6 py-24">
          <div className="xl:grid xl:grid-cols-3 gap-4 items-center  ">
            <div className="col-span-2">
              <h2 className="text-[72px] leading-22  font-medium capitalize">
                <span>From dreams to reality.</span>

                <span className="flex items-center gap-2">
                  <span>
                    <img
                      className="  w-6 md:w-12"
                      src="/img/tr.svg"
                      alt="icon"
                    />
                  </span>
                  <span> creating brands that</span>
                </span>

                <span> change the world.</span>
                <br />
              </h2>
            </div>
            <div className="flex flex-col justify-center items-center space-y-12">
              <p className="text-xl   leading-10 pl-4 max-w-sm">
                We work with businesses to help them in the evolution
                reinvention or creation of their brand.
              </p>
              <div className="pr-24">
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
      <footer className=" bg-white  ">
        <div className="container mx-auto max-w-screen ">
          <div className="ft-top xl:flex items-center   justify-between px-28 py-20 border-b border-gray-200 ">
            <div>
              <img src="/img/ft-logo.png" />
            </div>
            <ul className="xl:flex gap-16">
              <li>
                <Link
                  href={""}
                  className="text-[40px] capitalize text-gray-400 font-medium"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-[40px] capitalize text-gray-400 font-medium"
                >
                  works
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-[40px] capitalize text-gray-400 font-medium"
                >
                  reviews
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-[40px] capitalize text-gray-400 font-medium"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="w-fit relative flex  text-[40px] capitalize text-black font-medium gap-6 items-center"
                >
                  <span> Start Project!</span>
                  <span className="arow text-white bg-red-700  text-2xl w-13 h-13   flex items-center justify-center rounded-full">
                    <MdArrowOutward />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="ft-btm xl:flex  xl:divide-x  divide-gray-200  justify-between px-28  items-end">
            <div className="ft-left w-full   pt-20 pb-10 pr-24 space-y-20">
              <p className="text-[26px] max-w-lg">
                Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua ipsum dolor sit
                consectetur amet.
              </p>
              <div className="relative h-[300px]  ">
                <img
                  className="absolute right-0 bottom-0"
                  src="/img/ft-ld.png"
                />
              </div>
              <p className="text-xl ">
                © All Rights Reserved. 2024, The4Loop. Inc
              </p>
            </div>
            <div className="ft-right w-full  pt-20 pb-10 pl-32 space-y-16">
              <div className="flex  gap-25">
                <h2 className="text-md font-medium">Services</h2>
                <ul className="ft-list">
                  <li>
                    <Link
                      href={""}
                      className="text-xl font-medium text-gray-600"
                    >
                      Mobile Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={""}
                      className="text-xl font-medium text-gray-600"
                    >
                      Back-End Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={""}
                      className="text-xl font-medium text-gray-600"
                    >
                      Artificial Intelligence (AI)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={""}
                      className="text-xl font-medium text-gray-600"
                    >
                      Front-End Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={""}
                      className="text-xl font-medium text-gray-600"
                    >
                      Web Development (Full Stack)
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex  gap-25">
                <h2 className="text-md font-medium capitalize">contact</h2>
                <ul className="ft-list">
                  <li>
                    <Link
                      href={""}
                      className="text-xl font-medium text-gray-600"
                    >
                      Mobile Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={""}
                      className="text-xl font-medium text-gray-600"
                    >
                      Back-End Development
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex  gap-25">
                <h2 className="text-md font-medium capitalize">socials</h2>
                <ul className="flex gap-4">
                  <li>
                    <Link
                      href={""}
                      className="text-xl w-10 h-10 bg-[#FFE6D3]  flex items-center justify-center rounded-full"
                    >
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={""}
                      className="text-xl w-10 h-10 bg-[#FFE6D3]  flex items-center justify-center rounded-full"
                    >
                      <RiTwitterXLine />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={""}
                      className="text-xl w-10 h-10 bg-[#FFE6D3]  flex items-center justify-center rounded-full"
                    >
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={""}
                      className="text-xl w-10 h-10 bg-[#FFE6D3] flex items-center justify-center rounded-full"
                    >
                      <FaFacebookF />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
