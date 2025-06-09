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
            Discover smart ways to integrate AI tools like GitHub Copilot into
            your coding workflow while maintaining your learning edge and
            avoiding over-reliance.
          </p>
        </div>
        <div className="flex justify-center gap-8 max-w-[1280px] 3xl:max-w-[1620px] mx-auto relative mt-16">
          <div className="py-3 xl:py-6 px-4 xl:px-12 md:px-8 2xl:px-12 bg-slate-50 backdrop-blur-sm rounded-xl">
            <article className="prose prose-pre:p-0 prose-pre:mt-2 prose-pre:bg-transparent prose-img:rounded-md prose-img:mt-4">
              <main className="px-6 py-12 max-w-4xl mx-auto space-y-12 text-gray-900">
                <header className="space-y-4">
                  <h1 className="text-4xl font-bold">
                    How to Use AI Tools like GitHub Copilot Efficiently <br />
                    <span className="text-2xl font-medium text-gray-600">
                      (Without Getting Lazy)
                    </span>
                  </h1>
                  <p className="text-lg text-gray-600">
                    Discover smart ways to integrate AI tools like GitHub
                    Copilot into your workflow while actively building your
                    skills and avoiding the trap of over-reliance.
                  </p>
                </header>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold">
                    🧩 What is GitHub Copilot?
                  </h2>
                  <p className="text-gray-700">
                    GitHub Copilot is an AI-powered code completion tool that
                    helps developers write code faster by suggesting snippets,
                    functions, and even full components. It's built on OpenAI
                    Codex.
                  </p>
                </section>

                <section className="space-y-6">
                  <h2 className="text-2xl font-semibold">
                    🚦 When Should You Use Copilot?
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>To speed up boilerplate code writing</li>
                    <li>To explore unfamiliar APIs or frameworks quickly</li>
                    <li>To help you write tests or repetitive patterns</li>
                    <li>To overcome blank-screen syndrome when starting out</li>
                  </ul>
                </section>

                <section className="space-y-6">
                  <h2 className="text-2xl font-semibold">
                    ⚠️ When *Not* to Rely on Copilot
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>When learning new concepts from scratch</li>
                    <li>
                      When working on logic-heavy algorithms (understand them
                      first!)
                    </li>
                    <li>When debugging or refactoring complex code</li>
                    <li>When writing security-critical or sensitive code</li>
                  </ul>
                </section>

                <section className="space-y-6">
                  <h2 className="text-2xl font-semibold">
                    💡 Best Practices for Using Copilot
                  </h2>

                  <div>
                    <h3 className="text-xl font-medium">Stay in Control</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>
                        Don't just accept suggestions blindly—understand what
                        the code does
                      </li>
                      <li>Use Copilot as a *partner*, not as a crutch</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium">
                      Use it as a Learning Tool
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Pause and read every suggestion</li>
                      <li>Ask yourself: *Would I have written this myself?*</li>
                      <li>
                        Compare multiple suggestions and pick the most
                        readable/performant
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="space-y-6">
                  <h2 className="text-2xl font-semibold">
                    🔍 Copilot Alternatives & Enhancements
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      <strong>Codeium</strong> – Free AI assistant for multiple
                      languages
                    </li>
                    <li>
                      <strong>Tabnine</strong> – AI completion for your team’s
                      style
                    </li>
                    <li>
                      <strong>Cursor</strong> – ChatGPT-powered IDE experience
                    </li>
                  </ul>
                </section>

                <section className="space-y-6">
                  <h2 className="text-2xl font-semibold">
                    🧱 Real Projects to Use Copilot With
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Build a blog with Markdown support</li>
                    <li>Create a RESTful API with Node.js</li>
                    <li>
                      Automate tasks with custom scripts (e.g. CSV parsing)
                    </li>
                    <li>Build frontend forms with validations</li>
                  </ul>
                </section>

                <section className="space-y-6">
                  <h2 className="text-2xl font-semibold">
                    🎯 Final Tips for Efficient Use
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      Don’t turn off your brain — use Copilot to accelerate
                      *your* thinking
                    </li>
                    <li>
                      Practice coding without it regularly to strengthen
                      fundamentals
                    </li>
                    <li>Use it to explore *how* other devs structure code</li>
                  </ul>
                </section>

                <footer className="pt-8 border-t mt-12 text-center text-gray-600">
                  <p>
                    Let AI help you, but make sure *you* remain the developer in
                    control. Grow smarter, not just faster.
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