const page = () => {
  return (
    <main>
      <section className="px-2 lg:px-[4rem] text-black py-[4rem] mt-16 ">
        <div className="relative flex flex-col gap-2 lg:gap-6 z-10 justify-center items-center text-center">
          <h3 className="font-semibold text-center !text-[2rem] md:text-[2.4rem] lg:text-[3rem] max-w-[800px] z-10">
            “Next.js vs. SvelteKit: Which One Should You
            <br /> Master in 2025?
          </h3>
          <p className="text-base md:text-lg text-gray-600 max-w-[700px]">
            Explore the key differences between Next.js and SvelteKit —
            performance, learning curve, community, and ideal use cases — to
            help you choose the right one to master in 2025.
          </p>
        </div>
        <div className="flex justify-center gap-8 max-w-[1280px] 3xl:max-w-[1620px] mx-auto relative mt-16">
          <div className="py-3 xl:py-6 px-4 xl:px-12 md:px-8 2xl:px-12 bg-slate-50 backdrop-blur-sm rounded-xl">
            <article className="prose prose-pre:p-0 prose-pre:mt-2 prose-pre:bg-transparent prose-img:rounded-md prose-img:mt-4">
              <main className="px-6 py-12 max-w-4xl mx-auto space-y-12 text-gray-900">
                <header className="space-y-4">
                  <h1 className="text-4xl font-bold">
                    Next.js vs. SvelteKit: Which One Should You <br />
                    <span className="text-2xl font-medium text-gray-600">
                      Master in 2025?
                    </span>
                  </h1>
                  <p className="text-lg text-gray-600">
                    Choosing the right frontend framework in 2025 can shape your
                    development journey. Here's a clear comparison between
                    Next.js and SvelteKit to help you make the best choice.
                  </p>
                </header>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">📦 What Are They?</h2>
                  <div>
                    <h3 className="text-xl font-medium">Next.js</h3>
                    <p className="text-gray-700">
                      A React-based framework by Vercel that offers server-side
                      rendering, static site generation, API routes, and
                      seamless deployment on Vercel.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">SvelteKit</h3>
                    <p className="text-gray-700">
                      A full-stack framework built on top of Svelte — a compiler
                      that turns your UI into efficient JavaScript with zero
                      virtual DOM.
                    </p>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">
                    🚀 Performance Comparison
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      <strong>Next.js:</strong> Slightly heavier due to React’s
                      runtime and virtual DOM. Requires optimization for
                      top-tier performance.
                    </li>
                    <li>
                      <strong>SvelteKit:</strong> Extremely lightweight and fast
                      by default thanks to compile-time optimizations.
                    </li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">
                    🛠️ Developer Experience
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      <strong>Next.js:</strong> Familiar if you're already
                      comfortable with React. Large ecosystem and lots of
                      third-party support.
                    </li>
                    <li>
                      <strong>SvelteKit:</strong> Simpler syntax and reactive
                      logic built-in. Smaller learning curve if you're new, but
                      less community content (for now).
                    </li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">📚 Learning Curve</h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      <strong>Next.js:</strong> Requires knowledge of React,
                      JSX, and often TypeScript. Additional tools like Zustand,
                      TanStack Query, or Redux are often used.
                    </li>
                    <li>
                      <strong>SvelteKit:</strong> Easier syntax with less
                      boilerplate. Great for beginners learning reactivity and
                      frontend logic.
                    </li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">🧩 Use Cases</h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      <strong>Next.js:</strong> Ideal for large-scale apps,
                      enterprise-grade SaaS products, and when React is already
                      adopted in a team.
                    </li>
                    <li>
                      <strong>SvelteKit:</strong> Best for startups, landing
                      pages, small to medium apps, and performance-focused
                      projects.
                    </li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">
                    🌐 Community & Ecosystem
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      <strong>Next.js:</strong> Backed by Vercel, massive
                      community, tons of plugins, and tutorials.
                    </li>
                    <li>
                      <strong>SvelteKit:</strong> Rapidly growing, more
                      grassroots support, official SvelteKit team is responsive
                      and improving rapidly.
                    </li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">
                    🔮 Which One Should *You* Pick?
                  </h2>
                  <p className="text-gray-700">
                    If you're aiming for industry jobs, especially in
                    enterprise-level React environments,
                    <strong> Next.js is a safe, scalable choice.</strong>
                    <br />
                    If you love performance, simplicity, and writing less code
                    to do more, <strong>SvelteKit</strong> is worth mastering.
                  </p>
                </section>

                <footer className="pt-8 border-t mt-12 text-center text-gray-600">
                  <p>
                    Whether you choose Next.js or SvelteKit, you're investing in
                    the future of modern web development. Choose the one that
                    excites you — and build something amazing.
                  </p>
                </footer>
              </main>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;