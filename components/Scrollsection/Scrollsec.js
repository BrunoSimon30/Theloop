import React, { useRef, useEffect } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
// ScrollTrigger register
gsap.registerPlugin(ScrollTrigger);

export default function Scrollsec({ onOpenModal }) {
  const section2Ref = useRef(null);
  const bgImageRef = useRef(null);
  const boxesRef = useRef([]);

  useEffect(() => {
    // Initial state set
    gsap.set(bgImageRef.current, { scale: 1.5 });
    boxesRef.current.forEach((box) => {
      gsap.set(box, { opacity: 0, y: 800 });
    });

    // Scroll animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "top top",
        end: "+=300%",
        scrub: 2,
        pin: true,
      },
    });

    // Background zoom out
    tl.to(bgImageRef.current, { scale: 1, duration: 3 });

    // Boxes animations
    tl.to(boxesRef.current[0], {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0,
    });
    tl.to(boxesRef.current[1], {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
    });
    tl.to(boxesRef.current[2], {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
    });
    tl.to(boxesRef.current[3], {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div>
      <section
        ref={section2Ref}
        className="relative w-full h-screen overflow-hidden "
      >
        <div
          ref={bgImageRef}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/img/scroll-back.webp')",
          }}
        ></div>

        <div className="relative h-full flex flex-col items-center justify-center gap-12 ">
          <div
            ref={(el) => (boxesRef.current[0] = el)}
            className="box absolute w-full   xl:px-40 px-12"
          >
            <div className="items-center px-28   py-24  w-full bg-white rounded-lg shadow-lg">
              <div className="xl:grid xl:grid-cols-2 gap-8   items-center">
                <div className="space-y-4">
                  <h2 className="text-[72px] leading-22 font-medium capitalize">
                    Branding
                  </h2>
                  <p className="text-xl   leading-10  ">
                    Your brand is not just a name—it tells your story, reflects
                    identity, and shapes the impact you desire. Create a bold,
                    unforgettable presence that captivates, connects, and
                    converts. Let’s our branding gurus make your brand
                    ruthlessly iconic! Get Started!
                  </p>
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
                <div className="flex flex-col justify-center items-center space-y-12">
                  <div>
                    <img
                      src={"/img/branding.png"}
                      alt="Branding"
                      className="  rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={(el) => (boxesRef.current[1] = el)}
            className="box absolute w-full   xl:px-40 px-12"
          >
            <div className="items-center px-28   py-24 w-full bg-red-300 rounded-lg shadow-lg">
              <div className="xl:grid xl:grid-cols-2 gap-8   items-center">
                <div className="space-y-4">
                  <h2 className="text-[72px] leading-22 font-medium capitalize">
                    Digital Marketing
                  </h2>
                  <p className="text-xl   leading-10  ">
                    Settled just for visibility? It’s not enough—you need
                    dominance.  we goes beyond typical marketing,
                    crafting powerful digital journeys that grab attention,
                    spark engagement, and drive real results. From SEO to social
                    media, PPC to content marketing—your brand deserves a proven
                    strategy that works.
                  </p>
                  <button onClick={onOpenModal} className="w-fit relative flex text-xl font-medium bg-[#FEECDD] px-16 py-4 rounded-full">
                    Let's Explore
                    <span className="arow bg-[#FEECDD]  text-2xl w-13 h-13 absolute -right-13 top-0 bottom-0 m-auto flex items-center justify-center rounded-full">
                      <MdArrowOutward />
                    </span>
                  </button>
                </div>
                <div className="flex flex-col justify-center items-center space-y-12">
                  <div>
                    <img
                      src={"/img/digi.png"}
                      alt="Branding"
                      className="  rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={(el) => (boxesRef.current[2] = el)}
            className="box absolute w-full   xl:px-40 px-12"
          >
            <div className="items-center px-28   py-24 w-full bg-purple-500 rounded-lg shadow-lg">
              <div className="xl:grid xl:grid-cols-2 gap-8   items-center">
                <div className="space-y-4">
                  <h2 className="text-[72px] leading-22 font-medium capitalize">
                    Website Design
                  </h2>
                  <p className="text-xl   leading-10  ">
                    First impressions matter—so make yours impressive. A great
                    website isn’t just about looking good; it’s about engaging
                    visitors, building trust, and driving action. Smart, sleek,
                    and stunning—your digital presence starts here.
                  </p>
                  <button onClick={onOpenModal} className="w-fit relative flex text-xl font-medium bg-[#FEECDD] px-16 py-4 rounded-full">
                    Let's Explore
                    <span className="arow bg-[#FEECDD]  text-2xl w-13 h-13 absolute -right-13 top-0 bottom-0 m-auto flex items-center justify-center rounded-full">
                      <MdArrowOutward />
                    </span>
                  </button>
                </div>
                <div className="flex flex-col justify-center items-center space-y-12">
                  <div>
                    <img
                      src={"/img/website.png"}
                      alt="Branding"
                      className="  rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={(el) => (boxesRef.current[3] = el)}
            className="box absolute w-full   xl:px-40 px-12"
          >
            <div className="items-center px-28   py-24 w-full bg-orange-500 rounded-lg shadow-lg">
              <div className="xl:grid xl:grid-cols-2 gap-8   items-center">
                <div className="space-y-4">
                  <h2 className="text-[72px] leading-22 font-medium capitalize">
                    App Development
                  </h2>
                  <p className="text-xl   leading-10  ">
                    Transform your digital dreams into app-tastic realities with
                    our cutting-edge app development. not only builds marvelous
                    apps but also crafts irresistible platforms where superb
                    functionality dances tango with blazing innovation. We’re
                    digital wizards, and we grab your vision by the horns and
                    morph it into seamless, dynamic mobile applications.
                  </p>
                  <button  onClick={onOpenModal} className="w-fit relative flex text-xl font-medium bg-[#FEECDD] px-16 py-4 rounded-full">
                    Let's Explore
                    <span className="arow bg-[#FEECDD]  text-2xl w-13 h-13 absolute -right-13 top-0 bottom-0 m-auto flex items-center justify-center rounded-full">
                      <MdArrowOutward />
                    </span>
                  </button>
                </div>
                <div className="flex flex-col justify-center items-center space-y-12">
                  <div>
                    <img
                      src={"/img/app.webp"}
                      alt="Branding"
                      className="  rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
