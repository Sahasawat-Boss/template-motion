"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Fade } from "react-awesome-reveal";
import { useSectionInView } from "@/hooks/useInView";
import SocialLinks from "./SocialLinks";

export default function About() {
  const { ref } = useSectionInView("#about");

  return (
    <motion.section
      className="mb-10 mt-10 max-w-[55rem] scroll-mt-28 text-center leading-8 sm:mb-12"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
      id="about"
    >
      <div className="container mx-auto">
        <Fade
          direction="up"
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <SectionHeading>About Section</SectionHeading>
        </Fade>

        <div className="mt-0 grid gap-3 lg:text-start xl:grid-cols-2">
          <div className="flex-1">
            {/* Content */}
            <div className="text-lg">
              <div className="flex flex-col justify-start">
                <Fade
                  direction="up"
                  delay={400}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                </Fade>
                <Fade
                  direction="up"
                  delay={600}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-white/70">
                    Description Data:...
                  </p>
                </Fade>
                <Fade
                  direction="up"
                  delay={800}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <h3 className="mt-6 font-bold">More Description :...</h3>
                </Fade>
                <Fade
                  direction="up"
                  delay={1000}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-white/70">
                    Description Data:...
                  </p>
                </Fade>
              </div>
            </div>
          </div>
          <div className="">
            <Fade
              direction="right"
              delay={600}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <iframe width="350" height="240" src="https://www.youtube.com/embed/-EE0W5Lg738" title="Motion Graphic Opening" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </Fade>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
