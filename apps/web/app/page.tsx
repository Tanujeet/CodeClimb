"use client";

import Footer from "../Components/Footer";
import Fourth from "../Home/Fourth";
import Front from "../Home/Front";
import Second from "../Home/Second";
import Third from "../Home/Third";

const page = () => {
  return (
    <div className="font-[Knewave] bg-[#d4c9c9] text-black">
      <Front />
      <Second />
      <Third />
      <Fourth />
      <Footer />
    </div>
  );
};

export default page;
