import Button from "../../../Components/Button";
import Navbar from "../../../Components/Navbar";

const page = () => {
  return (
    <div className="min-h-screen w-screen flex justify-center">
      <Navbar />

      <div className="mt-40">
        <h1 className="uppercase text-5xl text-center font-bold">
          How To Become a <br />
          Front End Developer
        </h1>
        <p className="text-center text-lg mt-4 text-gray-600">
          Step-by-step guide to mastering frontend skills in 2025.
        </p>
        <div className="ml-45 mt-5">
          <Button title="Get started now" />
        </div>
      </div>
    </div>
  );
};

export default page;
