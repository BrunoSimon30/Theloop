import "@/styles/globals.css";
import Lenis from "lenis";
import Head from "next/head";
import { useEffect } from "react";

 

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Head>
        <title>The Four Loop High-Quality Design That Impress | The Four Loop </title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
