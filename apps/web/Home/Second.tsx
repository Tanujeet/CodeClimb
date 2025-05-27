const Second = () => {
  return (
    <div className="h-screen w-screen relative z-10 mt-6">
      <div className="mt-10">
        <div className="w-fit mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-25 h-50 text-green-500"
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-500 to-teal-400">
              Building projects
            </span>
          </h3>
          <p className="text-gray-300 mt-4 max-w-[600px]">
            Practice by doing. Projects help you apply what you’ve learned and
            build confidence.
          </p>
        </div>
        <div className="flex flex-col gap-28">
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-12 px-4 lg:px-24 items-center mt-20">
            {/* Left side (can add image or illustration later) */}
            <div className="lg:w-6/12 flex justify-center">
              <img
                src="/undraw_code-thinking_0vf2.svg"
                alt=""
                className="h-80 w-100"
              />
            </div>

            {/* Right side text content */}
            <div className="lg:w-6/12 px-6 text-center lg:text-left">
              <h3 className="text-[1.5rem] lg:text-[2.5rem] font-semibold text-white leading-snug">
                Escape Tutorial Hell by Building Projects
              </h3>
              <p className="text-slate-400 max-w-[600px] text-md mx-auto lg:mx-0 mt-4 font-light">
                Tutorials are great, but they can trap you if you never build.
                The best way to learn is by creating real projects that put your
                skills to the test and help you grow faster
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-12 px-4 lg:px-24 items-center mt-20">
            {/* Left side (can add image or illustration later) */}

            {/* Right side text content */}
            <div className="lg:w-6/12 px-6 text-center lg:text-left">
              <h3 className="text-[1.5rem] lg:text-[2.5rem] font-semibold text-white leading-snug">
                Learn New Skills Daily
              </h3>
              <p className="text-slate-400 max-w-[600px] text-md mx-auto lg:mx-0 mt-4 font-light">
                Stay ahead by learning something new every day. Whether it’s a
                small coding concept, a design principle, or a productivity
                trick, daily skill-building keeps your mind sharp and your
                progress consistent. Each day adds up—turning small wins into
                big achievements over time
              </p>
            </div>
            <div className="lg:w-6/12 flex justify-center">
              <img
                src="/undraw_building-a-website_1wrp.svg"
                alt=""
                className="h-80 w-100"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-12 px-4 lg:px-24 items-center mt-20">
            {/* Left side (can add image or illustration later) */}
            <div className="lg:w-6/12 flex justify-center">
              <img
                src="/undraw_creative-flow_t3kz.svg"
                className="h-80 w-100"
              />
            </div>

            {/* Right side text content */}
            <div className="lg:w-6/12 px-6 text-center lg:text-left">
              <h3 className="text-[1.5rem] lg:text-[2.5rem] font-semibold text-white leading-snug">
                Build Your Portfolios
              </h3>
              <p className="text-slate-400 max-w-[600px] text-md mx-auto lg:mx-0 mt-4 font-light">
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
