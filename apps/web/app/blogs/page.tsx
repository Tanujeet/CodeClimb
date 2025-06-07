import Navbar from "../../Components/Navbar";

const page = () => {
  return (
    <section className=" pt-[20px] px-0 md:px-12">
      <div className="text-gray-200 pt-[6rem] px-4 lg:pt-[3rem] bg-center bg-no-repeat mx-auto max-w-[1280px] 3xl:max-w-[1620px]">
        <div className="relative mt-12 lg:mt-16 ">
          <div className="relative flex flex-col gap-6 z-10 justify-center items-center text-center">
            <h1 className="font-extrabold text-center text-[2.4rem] md:text-[3rem] lg:text-[3.5rem] leading-tight tracking-tight max-w-[800px] mt-6 z-10">
              Dive Into <span>Dev Wisdom</span> <br />
              <span className="text-black/80">with Curated Coding Blogs</span>
            </h1>
            <p className="mt-4 text-center text-lg text-gray-700 max-w-[700px] mx-auto">
              Stay ahead of the curve with fresh articles, tips, and guides
              written for devs, by devs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;