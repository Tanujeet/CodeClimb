"use client";

import Navbar from "../Components/Navbar";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Front = () => {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 lg:px-20 mt-16 lg:mt-48">
        <section className="max-w-3xl mx-auto text-center">
          <h1 className="font-semibold text-[2.2rem] md:text-[3rem] lg:text-[4rem] max-w-[800px] mt-4">
            Your Simple Guide To <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-500 to-teal-400">
              Code Projects
            </span>
          </h1>
          <p className="text-gray-200 max-w-[800px] text-md lg:text-lg font-light mt-4">
            Climb From Beginner To Pro With Real-World Coding Challenges.
          </p>

          <motion.button
            onClick={() => router.push("/auth/signin")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative mt-10 px-6 py-3 rounded-xl text-xs bg-cyan-600 w-fit h-fit  outline outline-offset-2 outline-slate-800 hover:bg-gradient-to-br from-slate-500 via-cyan-600 to-teal-500
  hover:outline-cyan-600
  glass-effect transition-all duration-300 ease-in-out"
          >
            Explore projects
          </motion.button>
        </section>
        <section className="mt-28 flex justify-center">
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
      </main>
    </div>
  );
};

export default Front;
