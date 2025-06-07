import Image from "next/image";

const page = () => {
  return (
    <main>
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
      <section className="px-0 md:px-12 ">
        <div className="text-black px-4 pt-[3rem] bg-center bg-no-repeat mx-auto max-w-[1280px] 3xl:max-w-[1620px]">
          <div className="relative flex flex-col gap-16 z-10 justify-center items-center text-center lg:mt-4 mb-12">
            <a
              href=""
              className="flex flex-col md:flex-row max-w-[1020px] items-center gap-6 md:gap-12  px-4"
            >
              <Image
                src="/images/Co-pilot.png"
                alt=""
                width={400}
                height={260}
              />
              <div className="flex flex-col gap-4 justify-start">
                <div className="text-left text-lg lg:text-xl">
                  “How to Use AI Tools like GitHub Copilot Efficiently <br />{" "}
                  (Without Getting Lazy)”
                  <div className="flex gap-2">
                    <span className="text-xs bg-gray-800/50 px-2 py-1 rounded-lg">
                      Beginner
                    </span>
                    <span className="text-xs bg-gray-800/50 px-2 py-1 rounded-lg">
                      Tools
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a
              href=""
              className="flex flex-col md:flex-row max-w-[1020px] items-center gap-6 md:gap-12   px-4"
            >
              <Image
                src="/images/Comparsion.png"
                alt=""
                width={400}
                height={360}
              />
              <div className="flex flex-col gap-4 justify-start">
                <div className="text-left text-lg lg:text-xl">
                  “Next.js vs. SvelteKit: Which One Should You
                  <br /> Master in 2025?”
                  <div className="flex gap-2">
                    <span className="text-xs bg-gray-800/50 px-2 py-1 rounded-lg">
                      NextJs
                    </span>
                    <span className="text-xs bg-gray-800/50 px-2 py-1 rounded-lg">
                      framework
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
