const Third = () => {
  return (
    <div className=" mt-25">
      <h1 className="text-5xl font-semibold flex justify-center">
        Career Roadmap
      </h1>
      <h2 className="mt-15 text-4xl ml-10">Front End Development</h2>
      <p className="text-gray-300 max-w-[600px] text-md lg:text-lg font-light mt-4 ml-10">
        This roadmap will help you to practice your front end skills and to
        master it with html css and JavaScript
      </p>
      <div className="flex flex-col lg:flex-row gap-4 relative mt-4">
        <div className="w-12/12 lg:w-8/12">
          <div className=" text-slate-100  glass-effect-sm border-[0.5px] border-slate-700/50  grid grid-cols-1 lg:grid-cols-3 gap-4 p-2 rounded-xl max-h-[600px] overflow-hidden overflow-y-scroll scrollbar-hide">
            <div className="relative h-full">
              <div className="border-[0.5px] border-slate-700/90 rounded-xl p-2 block pb-4 transition ease-in-out duration-200  hover:outline outline-2 outline-offset-2 outline-blue-500 relative overflow-hidden group glass-effect-sm">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;