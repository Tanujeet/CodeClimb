"use client";

import Navbar from "../Components/Navbar";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <div className="pt-45 pl-10">
        <h1 className="font-semibold text-[2.2rem] md:text-[3rem] lg:text-[4rem] max-w-[800px] mt-4 z-10">
          Your simple guide to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r w-fit from-purple-500 via-pink-400 to-yellow-300">
            Code projects
          </span>
        </h1>
        <p className="text-gray-200 max-w-[800px] text-md lg:text-lg block font-light mt-4">
          Climb from beginner to pro with real-world coding challenges.
        </p>
        <button
          onClick={() => router.push("/auth/signin")}
          className="relative mt-5 px-6 py-3 rounded-xl text-xs bg-slate-800 w-fit h-fit  outline outline-offset-2 outline-slate-800 hover:outline-purple-500 font-semibold hover:bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 glass-effect transition-all duration-300 ease-in-out"
        >
          Improve your Coding skills
        </button>
      </div>
    </div>
  );
};

export default page;
