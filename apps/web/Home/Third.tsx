const Third = () => {
  return (
    <div className=" mt-25">
      <h1 className="text-5xl font-semibold flex justify-center">
        Career Roadmap
      </h1>
      <h2 className="mt-15 text-4xl ml-10">Front End Development</h2>
      <p className="text-black max-w-[600px] text-md lg:text-lg font-light mt-4 ml-10">
        This roadmap will help you to practice your front end skills and to
        master it with html css and JavaScript
      </p>
      <div className="flex flex-col lg:flex-row gap-4 mt-4 relative">
        <div className="w-full lg:w-8/12">
          <div className="text-slate-100 glass-effect-sm border border-slate-700/50 rounded-xl ml-10 p-2 max-h-[600px] overflow-y-auto scrollbar-hide">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border border-slate-700/90 rounded-xl p-2 pb-4 transition ease-in-out duration-200 hover:outline outline-2 outline-offset-2 outline-gray-500 overflow-hidden group glass-effect-sm">
                <img
                  src="/images/scr_todolist1.png"
                  alt="Screenshot of Todo List project"
                  className="w-full rounded-md group-hover:scale-105 transition duration-300"
                />
                <div className="mt-3 p-2">
                  <span className="text-sm text-black font-semibold">
                    Beginner
                  </span>
                  <h1 className="text-2xl mt-2 font-bold text-black">
                    Todo List
                  </h1>
                  <p className="text-black mt-1">
                    A simple task management app to track your daily goals.
                    Built with HTML, CSS & JS.
                  </p>
                </div>
              </div>{" "}
              <div className="border border-slate-700/90 rounded-xl p-2 pb-4 transition ease-in-out duration-200 hover:outline outline-2 outline-offset-2 outline-gray-500 overflow-hidden group glass-effect-sm over">
                <img
                  src="/images/simple-weather-app_23-2147552413.avif"
                  alt="Screenshot of Todo List project"
                  className="w-full rounded-md group-hover:scale-105 transition duration-300"
                />
                <div className="mt-3 p-2">
                  <span className="text-sm text-black font-semibold">
                    Beginner
                  </span>
                  <h1 className="text-2xl mt-2 font-bold text-black">
                    Weather Checker
                  </h1>
                  <p className="text-black mt-1">
                    A clean and responsive app to check current weather
                    conditions by city name. Built using HTML, CSS & JavaScript
                    with live weather API integration
                  </p>
                </div>
              </div>
              <div className="border border-slate-700/90 rounded-xl p-2 pb-4 transition ease-in-out duration-200 hover:outline outline-2 outline-offset-2 outline-gray-500 overflow-hidden group glass-effect-sm">
                <img
                  src="/images/maxresdefault.jpg"
                  alt="Screenshot of Todo List project"
                  className="w-full rounded-md group-hover:scale-105 transition duration-300"
                />
                <div className="mt-3 p-2">
                  <span className="text-sm text-blackfont-semibold">
                    Beginner
                  </span>
                  <h1 className="text-2xl mt-2 font-bold text-black">
                    Random Quote Generator
                  </h1>
                  <p className="text-black mt-1">
                    A simple app that displays a new inspirational quote on each
                    click. Uses JavaScript to dynamically update content.
                  </p>
                </div>
              </div>
              <div className="border border-slate-700/90 rounded-xl p-2 pb-4 transition ease-in-out duration-200 hover:outline outline-2 outline-offset-2 outline-gray-500 overflow-hidden group glass-effect-sm">
                <img
                  src="/images/21ccec97787515.5ecd66fe7be58.png"
                  alt="Screenshot of Todo List project"
                  className="w-full rounded-md group-hover:scale-105 transition duration-300"
                />
                <div className="mt-3 p-2">
                  <span className="text-sm text-black font-semibold">
                    Beginner
                  </span>
                  <h1 className="text-2xl mt-2 font-bold text-black">
                    Calculator
                  </h1>
                  <p className="text-black mt-1">
                    A basic calculator to perform arithmetic operations like
                    addition, subtraction, multiplication, and division. Built
                    with HTML, CSS & JavaScript.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;