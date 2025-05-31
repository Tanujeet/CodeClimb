import Heading from "../../../Components/Heading";
import Navbar from "../../../Components/Navbar";

const page = () => {
  return (
    <div className="min-h-screen w-screen overflow-hidden">
      <Navbar />
      <Heading
        title={
          <>
            How to become a <br />
            Backend developer
          </>
        }
        subtitle="Master backend development in 2025 with a step-by-step guide covering databases, APIs, authentication, and server-side frameworks."
      />
    </div>
  );
};

export default page;
