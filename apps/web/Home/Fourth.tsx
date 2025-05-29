import Button from "../Components/Button";

const Fourth = () => {
  return (
    <section className="text-center pt-[24rem] pb-[34rem]  bg-[url('/homepage/3d-bg-4.png')] bg-top bg-no-repeat bg-cover lg:bg-contain pt-12">
      <div className="relative z-10">
        <h3 className="font-semibold !text-[2rem] lg:!text-[3.6rem] max-w-[920px] mx-auto z-10 text-black">
          Become A coder with <br />
          CodeClimb
        </h3>
        <p className="text-white max-w-[540px] block mx-auto mt-4 pb-4">
          Begin your journey with zero experience and rise steadily by building
          real, meaningful projects. CodeClimb helps you bridge the gap between
          theory and practice—turning curious beginners into skilled developers
          one project at a time.
        </p>
        <Button title="Start Coding" />
      </div>
    </section>
  );
};

export default Fourth;
