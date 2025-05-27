"use client";

import Navbar from "../Components/Navbar";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

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
          <motion.button
            onClick={() => router.push("/auth/signin")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative px-6 py-3 rounded-xl text-xs bg-cyan-600 w-fit h-fit  outline outline-offset-2 outline-slate-800 hover:bg-gradient-to-br from-slate-500 via-cyan-600 to-teal-500
  hover:outline-cyan-600
  glass-effect transition-all duration-300 ease-in-out"
          >
            Explore projects
          </motion.button>
        </div>
        <section className="w-full lg:w-[70%] mx-auto flex flex-col gap-8 my-24">
          <h2 className="!text-[1rem] lg:!text-[1.5rem] !text-gray-300 text-center font-semibold mx-auto max-w-[320px] lg:max-w-[400px]">
            Build Your Projects with Top Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-10 max-w-4xl">
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
                className="cursor-pointer"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Front;
