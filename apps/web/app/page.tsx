"use client";

import Navbar from "../Components/Navbar";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <div className="relative mt-11 px-6 lg:mt-48 lg:px-20">
        <div className="relative flex flex-col gap-12">
          <div>
            <h1 className="font-semibold text-[2.2rem] md:text-[3rem] lg:text-[4rem] max-w-[800px] mt-4">
              Your Simple Guide To <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-500 to-teal-400">
                Code Projects
              </span>
            </h1>
            <p className="text-gray-200 max-w-[800px] text-md lg:text-lg font-light mt-4">
              Climb From Beginner To Pro With Real-World Coding Challenges.
            </p>
          </div>
          <button
            onClick={() => router.push("/auth/signin")}
            className="relative px-6 py-3 rounded-xl text-xs bg-slate-800 w-fit h-fit  outline outline-offset-2 outline-slate-800 hover:bg-gradient-to-br from-slate-500 via-cyan-600 to-teal-500
hover:outline-cyan-600
glass-effect transition-all duration-300 ease-in-out"
          >
            Improve your Coding skills
          </button>
        </div>
        <div className="w-full lg:w-[70%] mx-auto flex flex-col gap-8 my-24">
          <h2 className="text-[1rem] lg:text-[1.5rem] text-gray-300 text-center font-semibold mx-auto max-w-[320px] lg:max-w-[400px]">
            Build Your Projects and <br />
            Land Jobs at Top companies
          </h2>
        </div>
      </div>
    </div>
  );
};

export default page;
