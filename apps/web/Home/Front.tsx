"use client";

import Navbar from "../Components/Navbar";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Button from "../Components/Button";

const Front = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />

      <div className="relative flex flex-col gap-12 z-10 px-4">
        {/* Hero Section */}
        <div className="mt-32 flex flex-col items-center text-center">
          <h1 className="font-semibold text-[2.2rem] md:text-[3rem] lg:text-[4rem] max-w-[800px] leading-tight">
            Climb the Code Ladder <br />
            <span className="text-violet-400">Build Better</span>
          </h1>
          <p className="text-gray-300 max-w-[600px] text-md lg:text-lg font-light mt-4">
            Learn by building real-world projects. Step up from tutorials to
            practical experience.
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <Button
            title="Explore Projects"
            onClick={() => router.push("/projects")}
          />
        </div>

        {/* Skills Section */}
        <section className="w-full lg:w-[70%] max-w-screen-lg mx-auto flex flex-col gap-8 my-24">
          <h2 className="text-[1.2rem] lg:text-[1.5rem] text-gray-300 text-center font-semibold mx-auto max-w-[400px]">
            Build Your Projects with Top Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-10 max-w-4xl mx-auto">
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
    </div>
  );
};

export default Front;
