import Button from "../../../Components/Button";
import Heading from "../../../Components/Heading";
import Navbar from "../../../Components/Navbar";

const page = () => {

  const FrontEnd = {
    title: "Front End Development",
    description:
      "This roadmap will help you to practice your front end skills and to master it with HTML, CSS and JavaScript.",
    projects: [
      {
        title: "Todo List",
        image: "/images/scr_todolist1.png",
        level: "Beginner",
        description:
          "A simple task management app to track your daily goals. Built with HTML, CSS & JS.",
      },
      {
        title: "Weather Checker",
        image: "/images/simple-weather-app_23-2147552413.avif",
        level: "Beginner",
        description:
          "A clean and responsive app to check current weather conditions by city name. Built using HTML, CSS & JavaScript with live weather API integration.",
      },
      {
        title: "Random Quote Generator",
        image: "/images/maxresdefault.jpg",
        level: "Beginner",
        description:
          "A simple app that displays a new inspirational quote on each click. Uses JavaScript to dynamically update content.",
      },
      {
        title: "Calculator",
        image: "/images/21ccec97787515.5ecd66fe7be58.png",
        level: "Beginner",
        description:
          "A basic calculator to perform arithmetic operations like addition, subtraction, multiplication, and division. Built with HTML, CSS & JavaScript.",
      },
    ],
  };

  return (
    <div className="min-h-screen w-screen overflow-hidden">
      <Heading
        title={
          <>
            How to become a <br />
            Front end developer
          </>
        }
        subtitle=" Step-by-step guide to mastering frontend skills in 2025."
      />
      <section className="px-4 lg:px-[4rem] py-[4rem] mt-4">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold">Front end Projects</h2>
        </div>
        <p className="text-lg text-gray-600 mt-2">
          Explore some of the front-end projects built with HTML, CSS,
          JavaScript, and React.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-3">
          {FrontEnd.projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-300 bg-black shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
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
    </div>
  );
};

export default page;
