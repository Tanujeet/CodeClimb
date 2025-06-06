"use client";

import Footer from "../Components/Footer";
import Fourth from "../Home/Fourth";
import Hero from "../Home/Hero";
import Second from "../Home/Second";
import Third from "../Home/Third";

const page = () => {
  return (
    <div className="font-[Knewave]  bg-[#d4c9c9] text-black">
      <Hero />
      <Second />
      <Third />
      <Fourth />
    </div>
  );
};

export default page;
