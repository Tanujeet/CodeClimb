import Heading from "../../../Components/Heading";
import Navbar from "../../../Components/Navbar";

const page = () => {
  const Backend = {
    title: "Backend Development",
    description:
      "This section focuses on server-side skills including working with Node.js, Express, and databases like MongoDB and PostgreSQL.",
    projects: [
      {
        title: "RESTful API",
        image: "/images/152fcb14-3acf-4027-a3c2-307f4596ef4b_3000x3900.png",
        level: "Intermediate",
        description:
          "Build and test a RESTful API using Node.js and Express with MongoDB integration.",
      },
      {
        title: "Auth System",
        image: "/images/email-requested-at-login.png",
        level: "Intermediate",
        description:
          "Implement user authentication with sessions, JWT, and password encryption using bcrypt.",
      },
    ],
  };
  return (
    <div className="min-h-screen w-screen overflow-hidden">
      <Heading
        title={
          <>
            How to become a <br />
            Backend developer
          </>
        }
        subtitle="Master backend development in 2025 with a step-by-step guide covering databases, APIs, authentication, and server-side frameworks."
      />
      <section className="px-4 lg:px-[4rem] py-[4rem] mt-4">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold">Back end Projects</h2>
        </div>
        <p className="text-lg text-gray-600 mt-2">
          Explore real-world back-end projects built with Node.js, Express,
          MongoDB, PostgreSQL, and RESTful APIs. Each project showcases logic,
          database operations, and server-side architecture.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-3">
          {Backend.projects.map((project, index) => (
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
            Basic Steps to Master Backend
          </h3>
          <p className="text-base lg:text-lg  text-gray-600 ">
            Practice consistently and build projects to sharpen your Backend
            skills.
          </p>
        </div>
        <div className="flex justify-center gap-8 max-w-[1280px] 3xl:max-w-[1620px] mx-auto relative mt-16">
          <div className="py-3 xl:py-6 px-4 xl:px-12 md:px-8 2xl:px-12   bg-slate-50 backdrop-blur-sm rounded-xl">
            <article className="prose prose-pre:p-0 prose-pre:mt-2 prose-pre:bg-transparent prose-img:rounded-md prose-img:mt-4">
              {" "}
              <main className="px-6 py-12 max-w-4xl mx-auto space-y-12 text-gray-900">
                <header className="space-y-4">
                  <h1 className="text-4xl font-bold">
                    Becoming a Back-End Developer in 2025
                  </h1>
                  <p className="text-lg text-gray-600">
                    Back-end development is the backbone of web applications —
                    it handles logic, databases, authentication, APIs, and much
                    more.
                  </p>
                </header>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">
                    💼 What Does a Back-End Developer Do?
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Design and manage databases</li>
                    <li>Create and manage APIs</li>
                    <li>Handle server-side logic</li>
                    <li>Ensure security and data protection</li>
                    <li>Manage user authentication and authorization</li>
                  </ul>
                </section>

                <section className="space-y-6">
                  <h2 className="text-2xl font-semibold">
                    🛠️ Core Skills You Need
                  </h2>

                  <div>
                    <h3 className="text-xl font-medium">
                      Programming Languages
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>JavaScript (Node.js), Python, Java, Go, or PHP</li>
                      <li>Async programming & event loops</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium">Databases</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>SQL (PostgreSQL, MySQL)</li>
                      <li>NoSQL (MongoDB, Redis)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium">APIs</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>RESTful API design</li>
                      <li>GraphQL basics</li>
                      <li>API authentication (JWT, OAuth)</li>
                    </ul>
                  </div>
                </section>

                <section className="space-y-6">
                  <h2 className="text-2xl font-semibold">
                    ⚙️ Tools & Frameworks
                  </h2>

                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      <strong>Node.js</strong> – JavaScript runtime
                    </li>
                    <li>
                      <strong>Express.js</strong> – Fast Node framework
                    </li>
                    <li>
                      <strong>Next.js API Routes</strong> – Full-stack
                      capabilities
                    </li>
                    <li>
                      <strong>Prisma</strong> – Type-safe ORM for DBs
                    </li>
                    <li>
                      <strong>Docker</strong> – Containerize your apps
                    </li>
                    <li>
                      <strong>PostgreSQL / MongoDB</strong> – Popular databases
                    </li>
                  </ul>
                </section>

                <section className="space-y-6">
                  <h2 className="text-2xl font-semibold">
                    🔐 Authentication & Security
                  </h2>

                  <div>
                    <h3 className="text-xl font-medium">Authentication</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>JWT tokens (stateless auth)</li>
                      <li>Session-based auth</li>
                      <li>OAuth with providers (Google, GitHub)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium">
                      Security Best Practices
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Input validation</li>
                      <li>Rate limiting</li>
                      <li>Environment variables</li>
                      <li>HTTPS & CORS management</li>
                    </ul>
                  </div>
                </section>

                <section className="space-y-6">
                  <h2 className="text-2xl font-semibold">
                    🚀 DevOps & Deployment
                  </h2>

                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Use CI/CD tools (GitHub Actions, Vercel, Netlify)</li>
                    <li>Deploy with Docker</li>
                    <li>
                      Monitor with tools like PostHog, Sentry, or LogRocket
                    </li>
                    <li>Use environment-specific configs (.env)</li>
                  </ul>
                </section>

                <section className="space-y-6">
                  <h2 className="text-2xl font-semibold">
                    📈 Project Ideas to Practice
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Authentication API (login/signup)</li>
                    <li>Blog backend with CRUD</li>
                    <li>Real-time chat backend (WebSockets)</li>
                    <li>REST API for ecommerce site</li>
                  </ul>
                </section>

                <section className="space-y-6">
                  <h2 className="text-2xl font-semibold">👨‍💻 Career Tips</h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Build and deploy real projects</li>
                    <li>Write clean, documented code</li>
                    <li>Contribute to open source (PRs, issues)</li>
                    <li>Learn Git, GitHub, and branching</li>
                    <li>Prepare for system design interviews</li>
                  </ul>
                </section>

                <footer className="pt-8 border-t mt-12 text-center text-gray-600">
                  <p>
                    Master the logic. Build what matters. You're powering the
                    web.
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
