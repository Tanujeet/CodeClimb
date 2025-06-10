const page = () => {
  return (
    <main>
      <section className="bg-[url('/homepage/blue-planet.webp')] bg-right bg-no-repeat bg-cover  bg-opacity-50 pt-[20px] px-0 md:px-12">
        <div className="text-black pt-[6rem] px-4 lg:pt-[3rem] bg-center bg-no-repeat mx-auto max-w-[1280px] 3xl:max-w-[1620px]">
          <div className="relative mt-12 lg:mt-16 ">
            <div className="relative flex flex-col gap-6 z-10 justify-center items-center text-center">
              <h1 className="font-semibold text-center text-[2.2rem] md:text-[2.4rem] lg:text-[3rem] max-w-[800px] mt-4 z-10">
                HTML & CSS <br /> projects
              </h1>
              <p className="text-gray-400 max-w-[600px] text-md lg:text-lg block font-light"></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;