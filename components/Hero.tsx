"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";

const TypewriterEffect = dynamic(
  () => import("./ui/TypewriterEffect").then((mod) => mod.TypewriterEffect),
  {
    loading: () => (
      <p className="text-center md:text-5xl lg:text-6xl my-5 font-bold text-white">
        I Build Awesome Web Applications
      </p>
    ),
  }
);

const Hero = () => {
  const words = [
    {
      text: "I",
    },
    {
      text: "Build",
    },
    {
      text: "Awesome",
    },
    {
      text: "web",
      className: "text-purple dark:text-purple",
    },
    {
      text: "Applications",
      className: "text-purple dark:text-purple",
    },
  ];

  return (
    <div id="home" className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-[100svh]"
          fill="white"
        />
        <Spotlight className="top-10 left-full h-[80svh]" fill="purple" />
        <Spotlight
          className="top-28 left-80 h-[80svh] w-[50vw]"
          fill="#87CEEB"
        />
        <Spotlight
          className="absolute -top-20 left-1/2 transform -translate-x-1/2 h-[40svh] w-[30vw]"
          fill="white"
        />
      </div>

      <div className="min-h-[100svh] w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80"
          >
            Full Stack Web Developer Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center text-4xl md:text-6xl lg:text-7xl font-bold mt-4"
          >
            Sameer Khan
          </motion.h1>
          <span className="sr-only">I Build Awesome Web Applications</span>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            aria-hidden="true"
          >
            <TypewriterEffect
              className="text-center md:text-5xl lg:text-6xl my-5"
              words={words}
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl"
          >
            Full-stack Developer | Software Engineer · React · Next.js · Node.js | Java | Javascript | Typescript | AWS | Building Scalable Web Apps |
          </motion.p>

          <motion.a
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            href="#projects"
            className="cursor-pointer"
          >
            <MagicButton
              title="See my work"
              icon={<FaLocationArrow />}
              position="right"
              as="span"
            />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
