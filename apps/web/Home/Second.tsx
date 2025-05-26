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
      </div>
    </div>
  );
};

export default Second;
