const Second = () => {
  return (
    <div className="min-h-screen w-full relative z-10 mt-6 px-4 bg-[#d4c9c9] text-black">
      <div className="mt-10">
        <div className="w-fit mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#8b5cf6" // violet color from first component
            className="w-25 h-50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 9l3 3-3 3M14 15h4M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div className="relative z-10 mt-6 flex flex-col items-center text-center">
          <h3 className="font-semibold !text-[2rem] lg:!text-[3rem] max-w-[800px] mx-auto z-10">
            Best way to learn programming <br />
            is by
            <br />
            <span className="text-white bg-clip-text bg-gradient-to-r  font-extrabold">
              Building Projects
            </span>
          </h3>
          <p className="text-gray-600 mt-4 max-w-[600px] text-lg">
            Practice by doing. Projects help you apply what you’ve learned and
            build confidence.
          </p>
        </div>
        <div className="flex flex-col gap-20">
          {/* First Section */}
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 px-4 lg:px-24 items-center mt-20">
            <div className="lg:w-6/12 flex justify-center">
              <img
                src="/images/undraw_code-thinking_0vf2.svg"
                alt="Person thinking while coding illustration"
                className="h-64 md:h-80 lg:h-96 w-auto max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="lg:w-6/12 px-6 text-center lg:text-left">
              <h3 className="text-black  bg-clip-text bg-gradient-to-r  font-extrabold text-[1.5rem] lg:text-[2.5rem]">
                Escape Tutorial Hell by Building Projects
              </h3>
              <p className="text-gray-600 max-w-[600px] text-md mx-auto lg:mx-0 mt-4 font-light">
                Tutorials are great, but they can trap you if you never build.
                The best way to learn is by creating real projects that put your
                skills to the test and help you grow faster.
              </p>
            </div>
          </div>

          {/* Second Section */}
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 px-4 lg:px-24 items-center mt-20">
            <div className="lg:w-6/12 px-6 text-center lg:text-left">
              <h3 className="text-black bg-clip-text bg-gradient-to-r  font-extrabold text-[1.5rem] lg:text-[2.5rem]">
                Learn New Skills Daily
              </h3>
              <p className="text-gray-600 max-w-[600px] text-md mx-auto lg:mx-0 mt-4 font-light">
                Stay ahead by learning something new every day. Whether it’s a
                small coding concept, a design principle, or a productivity
                trick, daily skill-building keeps your mind sharp and your
                progress consistent. Each day adds up—turning small wins into
                big achievements over time.
              </p>
            </div>
            <div className="lg:w-6/12 flex justify-center">
              <img
                src="/images/undraw_programming_65t2.svg"
                alt="Illustration of building a website"
                className="h-64 md:h-80 lg:h-96 w-auto max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Third Section */}
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 px-4 lg:px-24 items-center mt-20">
            <div className="lg:w-6/12 flex justify-center">
              <img
                src="/images/undraw_creative-flow_t3kz.svg"
                alt="Creative workflow illustration"
                className="h-64 md:h-80 lg:h-96 w-auto max-w-full transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="lg:w-6/12 px-6 text-center lg:text-left">
              <h3 className="text-black bg-clip-text bg-gradient-to-r  font-extrabold text-[1.5rem] lg:text-[2.5rem]">
                Build Your Portfolios
              </h3>
              <p className="text-gray-600 max-w-[600px] text-md mx-auto lg:mx-0 mt-4 font-light">
                Building projects not only sharpens your skills but also helps
                you create a portfolio that showcases your abilities to
                employers and clients. A strong portfolio is your best tool to
                prove what you can do and stand out in the job market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
