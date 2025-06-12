import Image from "next/image";
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
              <Image
                width={300}
                height={300}
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
      <section className="py-12 px-4 lg:px-12">
        <div className="relative flex flex-col gap-3 lg:gap-6 z-10 justify-center items-center text-center max-w-3xl mx-auto">
          <h3 className="font-bold text-3xl lg:text-4xl ">
            Basic Steps to Master Frontend
          </h3>
          <p className="text-base lg:text-lg  text-gray-600 ">
            Practice consistently and build projects to sharpen your frontend
            skills.
          </p>
        </div>
        <div className="flex justify-center gap-8 max-w-[1280px] 3xl:max-w-[1620px] mx-auto relative mt-16">
          <div className=" py-3 xl:py-6 px-4 xl:px-12 md:px-8 2xl:px-12   bg-slate-50 backdrop-blur-sm rounded-xl">
            <article className="prose prose-pre:p-0 prose-pre:mt-2 prose-pre:bg-transparent prose-img:rounded-md prose-img:mt-4 ">
              <main className="px-6 py-12 max-w-4xl mx-auto space-y-12 text-gray-900">
                <header className="space-y-4">
                  <h1 className="text-4xl font-bold">
                    Becoming a Front-End Developer in 2025
                  </h1>
                  <p className="text-lg text-gray-600">
                    Front-end development shapes how people interact with the
                    web. You're not just writing code — you're building
                    experiences.
                  </p>
                </header>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">
                    💼 What Does a Front-End Developer Do?
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Design and build user interfaces</li>
                    <li>Create responsive, mobile-first layouts</li>
                    <li>Enhance interactivity with animations</li>
                    <li>Ensure cross-browser compatibility</li>
                    <li>Implement accessibility best practices</li>
                  </ul>
                </section>

                <section className="space-y-6">
                  <h2 className="text-2xl font-semibold">
                    🛠️ Essential Skills
                  </h2>

                  <div>
                    <h3 className="text-xl font-medium">Technical Skills</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>HTML, CSS, JavaScript proficiency</li>
                      <li>Experience with libraries/frameworks</li>
                      <li>Performance optimization</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium">Industry Knowledge</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>UI/UX design principles</li>
                      <li>Web design trends</li>
                      <li>Mobile-first development</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium">Soft Skills</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Debugging and problem-solving</li>
                      <li>Team collaboration</li>
                      <li>Effective communication</li>
                    </ul>
                  </div>
                </section>

                <section className="space-y-6">
                  <h2 className="text-2xl font-semibold">
                    📚 Core Technologies
                  </h2>

                  <div>
                    <h3 className="text-xl font-medium">HTML</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Semantic tags and structure</li>
                      <li>SEO and accessibility</li>
                      <li>Form controls and validation</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium">CSS</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Flexbox and Grid</li>
                      <li>Media queries</li>
                      <li>CSS variables and animations</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium">JavaScript</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>DOM manipulation</li>
                      <li>ES6+ features</li>
                      <li>Async/await, promises</li>
                    </ul>
                  </div>
                </section>

                <section className="space-y-6">
                  <h2 className="text-2xl font-semibold">
                    ⚙️ Frameworks & Tools
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      <strong>React</strong> – Component-based SPA framework
                    </li>
                    <li>
                      <strong>Next.js</strong> – React framework for SSR/SSG
                    </li>
                    <li>
                      <strong>Tailwind CSS</strong> – Utility-first styling
                    </li>
                    <li>
                      <strong>TypeScript</strong> – For static typing in JS
                    </li>
                  </ul>
                </section>

                <section className="space-y-6">
                  <h2 className="text-2xl font-semibold">
                    🚀 Optimization & Testing
                  </h2>

                  <div>
                    <h3 className="text-xl font-medium">Performance Tips</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Lazy loading</li>
                      <li>Responsive images</li>
                      <li>Minified JS/CSS</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium">Testing Tools</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Jest for unit testing</li>
                      <li>Cypress for E2E</li>
                      <li>Playwright for cross-browser testing</li>
                    </ul>
                  </div>
                </section>

                <section className="space-y-6">
                  <h2 className="text-2xl font-semibold">
                    👥 Building Your Career
                  </h2>

                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Create a strong portfolio website</li>
                    <li>Showcase real-world projects on GitHub</li>
                    <li>Write blogs, contribute to open source</li>
                    <li>Stay updated with newsletters, podcasts</li>
                    <li>Network through LinkedIn, meetups</li>
                  </ul>
                </section>

                <footer className="pt-8 border-t mt-12 text-center text-gray-600">
                  <p>Stay consistent, stay creative — and keep building!</p>
                </footer>
              </main>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
