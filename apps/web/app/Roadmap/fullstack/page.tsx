import Heading from "../../../Components/Heading";
import Navbar from "../../../Components/Navbar";

const page = () => {
  const FullStack = {
    title: "Full Stack Development",
    description:
      "Combine frontend and backend skills to build full stack applications with modern frameworks like React and Next.js.",
    projects: [
      {
        title: "Blog App",
        image: "/images/creative-blog-02-600x1468.jpg",
        level: "Advanced",
        description:
          "Create a full-featured blog platform using Next.js, Prisma, PostgreSQL, and authentication.",
      },
      {
        title: "E-Commerce Site",
        image: "/images/ecommerce-website-design-examples-1024x768.jpg",
        level: "Advanced",
        description:
          "Build a complete e-commerce platform with product pages, cart functionality, and checkout integration.",
      },
    ],
  };
  return (
    <div className="min-h-screen w-screen overflow-hidden">
      <Heading
        title={
          <>
            How to become a <br />
            Full Stack developer
          </>
        }
        subtitle=" Step-by-step guide to mastering frontend skills in 2025."
      />
      <section className="px-4 lg:px-[4rem] py-[4rem] mt-4">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold">Full Stack Projects</h2>
        </div>
        <p className="text-lg text-gray-600 mt-2">
          Discover powerful full-stack projects combining modern frontend
          frameworks like React and Next.js with robust backend technologies
          such as Node.js, Express, PostgreSQL, and MongoDB. These projects
          highlight complete application workflows — from UI to database logic.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-3">
          {FullStack.projects.map((project, index) => (
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
      <section className="py-12 px-4 lg:px-12">
        <div className="relative flex flex-col gap-3 lg:gap-6 z-10 justify-center items-center text-center max-w-3xl mx-auto">
          <h3 className="font-bold text-3xl lg:text-4xl ">
            Basic Steps to Master Full Stack
          </h3>
          <p className="text-base lg:text-lg  text-gray-600 ">
            Practice consistently and build projects to sharpen your FullStack
          </p>
        </div>
        <div className="flex justify-center gap-8 max-w-[1280px] 3xl:max-w-[1620px] mx-auto relative mt-16">
          <div className=" py-3 xl:py-6 px-4 xl:px-12 md:px-8 2xl:px-12   bg-slate-50 backdrop-blur-sm rounded-xl">
            <article className="prose prose-pre:p-0 prose-pre:mt-2 prose-pre:bg-transparent prose-img:rounded-md prose-img:mt-4 ">
              <main className="px-6 py-12 max-w-4xl mx-auto space-y-12 text-gray-900">
                <header className="space-y-4">
                  <h1 className="text-4xl font-bold">
                    Becoming a Full-Stack Developer in 2025
                  </h1>
                  <p className="text-lg text-gray-600">
                    Full-stack developers work on both the frontend and backend
                    of applications — they build complete, scalable, and
                    interactive solutions.
                  </p>
                </header>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">
                    💼 What Does a Full-Stack Developer Do?
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Build responsive frontend interfaces</li>
                    <li>Design and connect with backend APIs</li>
                    <li>Work with databases to store and retrieve data</li>
                    <li>Ensure authentication and secure data flows</li>
                    <li>Deploy and maintain entire applications</li>
                  </ul>
                </section>

                <section className="space-y-6">
                  <h2 className="text-2xl font-semibold">
                    🛠️ Core Skills You Need
                  </h2>

                  <div>
                    <h3 className="text-xl font-medium">Frontend Skills</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>HTML, CSS, JavaScript (ES6+)</li>
                      <li>React.js, Next.js</li>
                      <li>State management (Context API, Redux, Zustand)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium">Backend Skills</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Node.js, Express.js</li>
                      <li>RESTful APIs or GraphQL</li>
                      <li>Authentication (JWT, OAuth)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium">Databases</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>SQL (PostgreSQL, MySQL)</li>
                      <li>NoSQL (MongoDB)</li>
                    </ul>
                  </div>
                </section>

                <section className="space-y-6">
                  <h2 className="text-2xl font-semibold">
                    ⚙️ Tools & Frameworks
                  </h2>

                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      <strong>Next.js</strong> – Full-stack React framework
                    </li>
                    <li>
                      <strong>Tailwind CSS</strong> – Utility-first CSS
                      framework
                    </li>
                    <li>
                      <strong>Prisma</strong> – ORM for PostgreSQL, MySQL, etc.
                    </li>
                    <li>
                      <strong>Clerk/Auth.js</strong> – Authentication providers
                    </li>
                    <li>
                      <strong>Docker</strong> – App containerization
                    </li>
                  </ul>
                </section>

                <section className="space-y-6">
                  <h2 className="text-2xl font-semibold">
                    🚀 DevOps & Deployment
                  </h2>

                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Deploy with Vercel, Netlify, or Docker</li>
                    <li>Use GitHub Actions for CI/CD</li>
                    <li>Manage .env and environment variables</li>
                    <li>Monitor logs and analytics (Sentry, PostHog)</li>
                  </ul>
                </section>

                <section className="space-y-6">
                  <h2 className="text-2xl font-semibold">
                    📈 Project Ideas to Practice
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Full-stack blog with auth and CMS features</li>
                    <li>Real-time chat app using WebSockets</li>
                    <li>Ecommerce store with cart, payments, dashboard</li>
                    <li>Job board with admin panel</li>
                  </ul>
                </section>

                <section className="space-y-6">
                  <h2 className="text-2xl font-semibold">👨‍💻 Career Tips</h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Focus on end-to-end problem solving</li>
                    <li>Build a portfolio with deployed full-stack apps</li>
                    <li>Write clean code and meaningful documentation</li>
                    <li>Learn version control (Git, GitHub)</li>
                    <li>Practice system design & architecture</li>
                  </ul>
                </section>

                <footer className="pt-8 border-t mt-12 text-center text-gray-600">
                  <p>
                    Build the frontend, command the backend — shape the future
                    of web development.
                  </p>
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
