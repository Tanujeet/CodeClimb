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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 600"
                className="max-w-[400px] w-full h-auto"
              >
                <rect width="800" height="600" fill="#0f172a" />
                <g>
                  <rect
                    x="200"
                    y="180"
                    width="400"
                    height="280"
                    rx="20"
                    fill="#1e293b"
                  />
                  <rect
                    x="230"
                    y="220"
                    width="340"
                    height="40"
                    rx="5"
                    fill="#0ea5e9"
                  />
                  <rect
                    x="230"
                    y="280"
                    width="280"
                    height="30"
                    rx="4"
                    fill="#38bdf8"
                  />
                  <rect
                    x="230"
                    y="330"
                    width="240"
                    height="25"
                    rx="4"
                    fill="#7dd3fc"
                  />
                  <rect
                    x="230"
                    y="370"
                    width="180"
                    height="25"
                    rx="4"
                    fill="#bae6fd"
                  />
                  <circle cx="240" cy="200" r="6" fill="#f87171" />
                  <circle cx="260" cy="200" r="6" fill="#facc15" />
                  <circle cx="280" cy="200" r="6" fill="#4ade80" />
                </g>
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 600"
                className="max-w-[400px] w-full h-auto"
              >
                <rect width="800" height="600" fill="#0f172a" />
                <g>
                  <rect
                    x="200"
                    y="180"
                    width="400"
                    height="280"
                    rx="20"
                    fill="#1e293b"
                  />
                  <rect
                    x="230"
                    y="220"
                    width="340"
                    height="40"
                    rx="5"
                    fill="#0ea5e9"
                  />
                  <rect
                    x="230"
                    y="280"
                    width="280"
                    height="30"
                    rx="4"
                    fill="#38bdf8"
                  />
                  <rect
                    x="230"
                    y="330"
                    width="240"
                    height="25"
                    rx="4"
                    fill="#7dd3fc"
                  />
                  <rect
                    x="230"
                    y="370"
                    width="180"
                    height="25"
                    rx="4"
                    fill="#bae6fd"
                  />
                  <circle cx="240" cy="200" r="6" fill="#f87171" />
                  <circle cx="260" cy="200" r="6" fill="#facc15" />
                  <circle cx="280" cy="200" r="6" fill="#4ade80" />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-12 px-4 lg:px-24 items-center mt-20">
            {/* Left side (can add image or illustration later) */}
            <div className="lg:w-6/12 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 600"
                className="max-w-[400px] w-full h-auto"
              >
                <rect width="800" height="600" fill="#0f172a" />
                <g>
                  <rect
                    x="200"
                    y="180"
                    width="400"
                    height="280"
                    rx="20"
                    fill="#1e293b"
                  />
                  <rect
                    x="230"
                    y="220"
                    width="340"
                    height="50"
                    rx="8"
                    fill="#0ea5e9"
                  />
                  <text
                    x="400"
                    y="255"
                    fill="#fff"
                    fontSize="28"
                    fontWeight="700"
                    fontFamily="Arial, sans-serif"
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    Build Your Portfolios
                  </text>
                  <rect
                    x="230"
                    y="290"
                    width="280"
                    height="30"
                    rx="6"
                    fill="#38bdf8"
                  />
                  <rect
                    x="230"
                    y="340"
                    width="240"
                    height="25"
                    rx="6"
                    fill="#7dd3fc"
                  />
                  <rect
                    x="230"
                    y="385"
                    width="180"
                    height="25"
                    rx="6"
                    fill="#bae6fd"
                  />
                  <circle cx="240" cy="200" r="6" fill="#f87171" />
                  <circle cx="260" cy="200" r="6" fill="#facc15" />
                  <circle cx="280" cy="200" r="6" fill="#4ade80" />
                </g>
              </svg>
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
