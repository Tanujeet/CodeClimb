"use client";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex justify-between items-center p-4 w-full">
      <div className="text-xl font-bold">CodeCLimb</div>

      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-6">
        <div className="cursor-pointer">Career Roadmap</div>
        <div className="cursor-pointer">Projects</div>
        <div className="cursor-pointer">Blogs</div>
      </div>

      <button
        onClick={() => router.push("/auth")}
        className="text-white px-4 py-2 rounded border border-transparent hover:border-purple-600 transition"
      >
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;
