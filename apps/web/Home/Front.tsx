"use client";

import Navbar from "../Components/Navbar";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Button from "../Components/Button";

const Front = () => {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <div className="relative flex flex-col gap-12 z-10">
        <div className="relative mt-30 ml-15 lg:mt-40 ">
          <h1 className="font-semibold text-[2.2rem] md:text-[3rem] lg:text-[4rem] max-w-[800px] mt-4 z-10">
            Climb the Code Ladder <br />
            <span>Build Better</span>
          </h1>
          <p className="text-gray-200 max-w-[600px] text-md lg:text-lg block font-light mt-4"></p>
          <Button title="Explore Projects" />
        </div>
        <section className="w-full lg:w-[70%] max-w-screen-lg mx-auto px-4 flex flex-col gap-8 my-24">
          <h2 className="text-[1rem] lg:text-[1.5rem] text-gray-300 text-center font-semibold mx-auto max-w-[320px] lg:max-w-[400px]">
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
                className="cursor-pointer sm:w-16 sm:h-16 w-20 h-20" // smaller icons on small screens
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Front;
