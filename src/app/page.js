"use client";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Link from "next/link";

export default function Home() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 800]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 900]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <>
      <div className="bg-black h-screen"></div>

      <div
        ref={container}
        className="  flex  bg-black w-full h-screen overflow-hidden  ">
        <motion.div
          style={{ y }}
          className="  flex flex-col  h-auto w-auto mx-1 
           "
          y={y}>
          <Image
            src="/1.jpg"
            alt="image "
            width={500}
            height={500}
            className="w-full h-1/3 my-2"
          />
          <Image
            src="/2.jpg"
            alt="image "
            width={500}
            height={500}
            className="w-full h-1/3 my-2"
          />
          <Image
            src="/3.jpg"
            alt="image "
            width={500}
            height={500}
            className="w-full h-1/3 my-2"
          />
        </motion.div>
        <motion.div
          style={{ y }}
          className="flex flex-col  h-auto w-auto mx-1  "
          y={y1}>
          <Image
            src="/4.jpg"
            alt="image "
            width={500}
            height={500}
            className="w-full h-1/3 my-2"
          />
          <Image
            src="/5.jpg"
            alt="image "
            width={500}
            height={500}
            className="w-full h-1/3 my-2"
          />
          <Image
            src="/6.jpg"
            alt="image "
            width={500}
            height={500}
            className="w-full h-1/3 my-2"
          />
        </motion.div>
        <motion.div
          style={{ y }}
          className="flex flex-col h-auto  w-auto mx-1 "
          y={y2}>
          <Image
            src="/7.jpg"
            alt="image "
            width={500}
            height={500}
            className="w-full h-1/3 my-2"
          />
          <Image
            src="/8.jpg"
            alt="image "
            width={500}
            height={500}
            className="w-full h-1/3 my-2"
          />
          <Image
            src="/9.jpg"
            alt="image "
            width={500}
            height={500}
            className="w-full h-1/3 my-2"
          />
        </motion.div>
        <motion.div
          style={{ y }}
          className="flex flex-col  h-auto w-auto mx-1  "
          y={y3}>
          <Image
            src="/10.jpg"
            alt="image "
            width={500}
            height={500}
            className="w-full h-1/3 my-2"
          />
          <Image
            src="/11.jpg"
            alt="image "
            width={500}
            height={500}
            className="w-full h-1/3 my-2"
          />
          <Image
            src="/12.jpg"
            alt="image "
            width={500}
            height={500}
            className="w-full h-1/3 my-2"
          />
        </motion.div>
      </div>
      <Link href="/Design/Tailwind">Navigate To Tailwind Design</Link>
      <Link href="/Design/Motion">Navigate To Animation</Link>
      <div className="bg-black h-screen"></div>
    </>
  );
}
