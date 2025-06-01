import Heading from "../../../Components/Heading";
import Navbar from "../../../Components/Navbar";

const page = () => {
  return (
    <div className="min-h-screen w-screen overflow-hidden">
      <Heading
        title={
          <>
            How to become a <br />
            Fullstack developer
          </>
        }
        subtitle="Master both frontend and backend development with a complete 2025 roadmap covering UI design, APIs, databases, authentication, and deployment."
      />
    </div>
  );
};

export default page;
