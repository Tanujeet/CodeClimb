import Button from "../../../Components/Button";
import Navbar from "../../../Components/Navbar";

const page = () => {
  return (
    <div className="min-h-vh max-w-vw overflow-hidden">
      <Navbar />
      <section className="relative mt-56 lg:mt-50 ">
        <div className="relative flex flex-col gap-6 z-10 justify-center items-center text-center0">
          <h1 className="uppercase text-5xl text-center font-bold">
            How To Become a <br />
            Front End Developer
          </h1>
          <p className="text-gray-400 max-w-[600px] text-md lg:text-lg block font-light">
            Step-by-step guide to mastering frontend skills in 2025.
          </p>
          <div className="mt-4">
            <Button title="Get started now" />
          </div>
        </div>
      </section>
      <section className="px-4 lg:px-[4rem] py-[4rem] mt-4 ">
        <div>hy</div>
      </section>
    </div>
  );
};

export default page;
