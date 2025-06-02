import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Slider from "react-slick";

const testimonials = [
  {
    quote:
      "I have worked with website developers in the past, and this was by far the BEST experience I have had. Communication was very easy.",
    name: "Katrin L.",
    title: "Founder, Elemotion",
    img: "/img/d1.png",
    logo: "/img/d2.png",
  },
  {
    quote:
      "Their team was proactive and truly understood our vision. We are beyond happy with the results!",
    name: "Matrin L.",
    title: "Founder, Gelpsy",
    img: "/img/d1.png",
    logo: "/img/d2.png",
  },
];

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 1,
  pauseOnHover: true,
  centerMode: false,
  nextArrow: <CustomNextArrow />,
  prevArrow: null,
  responsive: [
    {
      breakpoint: 768, // screens below 768px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function CustomersReviews() {
  return (
    <section className="dis-sec bg-white pb-24">
      <div className="container mx-auto max-w-screen">
        <div className="dis-top xl:px-28 px-6 py-32">
          <div className="xl:grid xl:grid-cols-2 gap-4 items-center">
            <div>
              <h2 className="text-[72px] leading-22 font-medium capitalize">
                <span> Discover what</span>
                <br />
                <span className="flex items-center gap-2">
                  <span>
                    <img
                      className="  w-6 md:w-8"
                      src="/img/tr.svg"
                      alt="icon"
                    />
                  </span>
                  <span> our customers</span>
                </span>

                <span>have to say </span>
                <a
                  href="#"
                  className="w-fit relative inline-flex text-xl font-medium bg-[#FEECDD] px-16 py-4 rounded-full"
                >
                  Let's Explore
                  <span className="arow bg-[#FEECDD] text-2xl w-13 h-13 absolute -right-13 top-0 bottom-0 m-auto flex items-center justify-center rounded-full">
                    <MdArrowOutward />
                  </span>
                </a>
              </h2>
            </div>
            <div className="flex flex-col justify-center items-center space-y-6">
              <div className="flex -space-x-3">
                <img src="/img/t1.png" />
                <img src="/img/t2.png" />
                <img src="/img/t3.png" />
                <img src="/img/t4.png" />
              </div>
              <p className="text-xl leading-10 pl-4 max-w-sm">
                Over 1.5k happy clients
              </p>
            </div>
          </div>
        </div>

        <div className="dis-btm xl:px-28 px-12">
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <div key={index} className={`dis-sil space-y-6 px-4  `}>
                <p className="text-4xl leading-20 font-medium">
                  "{item.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex gap-4 -space-x-6">
                    <img className="rounded-xl w-16 h-16" src={item.img} />
                    <img className="rounded-xl w-16 h-16" src={item.logo} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">{item.name}</h4>
                    <p className="text-md font-medium">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="custom-arrow bg-black text-white w-12 h-12 rounded-full flex items-center justify-center absolute right-[-30px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
    >
      <MdArrowOutward size={24} />
    </div>
  );
}
