import Navbar from "../Components/Navbar";

const page = () => {
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
      </div>
    </div>
  );
};

export default page;
