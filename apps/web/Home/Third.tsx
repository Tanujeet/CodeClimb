"use client";

const Third = () => {
  return (
    <section className="mt-20 px-6 lg:px-20">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-6">
        Career Roadmap
      </h1>
      <h2 className="text-3xl lg:text-4xl font-semibold text-gray-700 mb-3">
        Front End Development
      </h2>
      <p className="text-gray-600 max-w-2xl text-base lg:text-lg font-light mb-8">
        This roadmap will help you to practice your front-end skills and master
        HTML, CSS, and JavaScript through structured projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-300 bg-black shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <span className="text-sm text-blue-600 font-medium">
                {project.level}
              </span>
              <h3 className="text-xl font-semibold text-white mt-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Todo List",
    level: "Beginner",
    image: "/images/scr_todolist1.png",
    description:
      "A simple task management app to track your daily goals. Built with HTML, CSS & JS.",
  },
  {
    title: "Weather Checker",
    level: "Beginner",
    image: "/images/simple-weather-app_23-2147552413.avif",
    description:
      "A clean and responsive app to check current weather conditions by city name. Built with HTML, CSS & JavaScript using live API.",
  },
  {
    title: "Random Quote Generator",
    level: "Beginner",
    image: "/images/maxresdefault.jpg",
    description:
      "A simple app that displays a new inspirational quote on each click. Uses JavaScript to dynamically update content.",
  },
  {
    title: "Calculator",
    level: "Beginner",
    image: "/images/21ccec97787515.5ecd66fe7be58.png",
    description:
      "A basic calculator to perform arithmetic operations. Built with HTML, CSS & JavaScript.",
  },
];

export default Third;
