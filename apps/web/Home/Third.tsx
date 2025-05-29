const Third = () => {
  const sections = [
    {
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
    },
    {
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
    },
    {
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
    },
  ];

  return (
    <section className="mt-50 px-6 lg:px-20">
      <h1 className="text-5xl font-semibold text-center mb-12">
        Career Roadmap
      </h1>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-700 mb-3">
            {section.title}
          </h2>
          <p className="text-gray-600 max-w-2xl text-base lg:text-lg font-light mb-8">
            {section.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {section.projects.map((project, index) => (
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
        </div>
      ))}
    </section>
  );
};

export default Third;
