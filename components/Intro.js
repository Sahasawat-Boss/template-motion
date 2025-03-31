"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { Mail } from "lucide-react";
import { useSectionInView } from "@/hooks/useInView";
import { useActiveSectionContext } from "../contexts/active-section";

function Intro() {
  const { ref } = useSectionInView("#home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="mb-2 max-w-[75rem] scroll-mt-[100rem] text-center sm:mb-3"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}
          >
            <Image
              src="/public/17-wild-oasis-customer-desktop.png"
              width="480"
              height="480"
              alt="Image"
              quality={80}
              priority={true}
              className="h-48 w-48 rounded-full border-[0.1rem] border-white object-cover shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <Fade
        direction="up"
        delay={400}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <h1 className="mb-10 mt-4 px-4 text-2xl sm:text-4xl">
          <span className="font-medium !leading-[1.5]">
            <span className="text-xl sm:text-2xl">Mock Data</span>
            Mock Data
          </span>
          <p className="text-[20px]">
            Mock Data
          </p>
        </h1>
      </Fade>

      <motion.div
        className="flex flex-col items-center justify-center gap-4 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div className="flex gap-4">
          <Link
            href="#contact"
            className="group flex items-center gap-2 text-nowrap rounded-full border border-slate-600 bg-gray-900 px-4 py-2 text-xs text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 xs:px-7 xs:py-3 sm:text-sm"
            onClick={() => {
              setActiveSection("#contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact
            <BsArrowRight className="hidden opacity-70 transition group-hover:translate-x-1 xs:block" />
            <Mail
              color={"#9ca3af"}
              className="opacity-70 transition group-hover:-translate-x-1"
            />
          </Link>
          <a
            className="group flex cursor-pointer items-center gap-2 text-nowrap rounded-full border border-slate-600 bg-white px-4 py-2 text-xs outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10 xs:px-7 xs:py-3 sm:text-sm"
            href="/" //Add File in Public
            download
          >
            Download
            <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Intro;
