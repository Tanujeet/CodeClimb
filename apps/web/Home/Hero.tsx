"use client";

import Navbar from "../Components/Navbar";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Button from "../Components/Button";

const Hero = () => {
  const router = useRouter();

  return (
    <section className="w-full bg-[#d4c9c9] text-black">
      <Navbar />

      <div className="relative z-10 px-4 mt-60  max-w-7xl mx-auto">
        {/* Hero Content: Text + Image */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text Section */}
          <div className="flex-1 flex flex-col gap-4 lg:gap-6">
            <h1 className="font-semibold text-[2.2rem] md:text-[3rem] lg:text-[4rem] max-w-[800px] leading-tight">
              Climb the Code Ladder <br />
              <span className="text-white bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-extrabold">
                Build Better
              </span>
            </h1>
            <p className="text-black max-w-[600px] text-md lg:text-lg font-light">
              Learn by building real-world projects. Step up from tutorials to
              practical experience.
            </p>

            <div className="mt-4">
              <Button
                title="Explore Projects"
                onClick={() => router.push("/projects")}
              />
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 w-full max-w-md">
            <img
              src="/images/undraw_coding_joxb.svg"
              alt="Coding Illustration"
              className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Skills Section */}
        <section className="w-full mt-30 flex flex-col gap-8 items-center">
          <h2 className="text-[1.2rem] lg:text-[1.5rem] text-black font-semibold text-center max-w-[400px]">
            Build Your Projects with Top Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-10 max-w-4xl">
            {[
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
                alt: "HTML5 Logo",
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
                alt: "CSS3 Logo",
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
                alt: "JavaScript Logo",
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                alt: "React Logo",
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
                alt: "Node.js Logo",
              },
            ].map(({ src, alt }) => (
              <motion.img
                key={alt}
                src={src}
                alt={alt}
                width={80}
                height={80}
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.2 }}
                className="cursor-pointer sm:w-16 sm:h-16 w-20 h-20"
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
