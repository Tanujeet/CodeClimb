"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav
      className="flex justify-between items-center p-4 w-full"
      role="navigation"
    >
      <div className="text-xl font-bold">CodeCLimb</div>

      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-6">
        <Link href="/career" className="cursor-pointer">
          Career Roadmap
        </Link>
        <Link href="/projects" className="cursor-pointer">
          Projects
        </Link>
        <Link href="/blogs" className="cursor-pointer">
          Blogs
        </Link>
      </div>

      <button
        onClick={() => router.push("/auth/signin")}
        className="relative px-6 py-3 rounded-xl text-xs bg-slate-800 w-fit h-fit  outline outline-offset-2 outline-slate-800 hover:outline-purple-500 font-semibold hover:bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 glass-effect transition-all duration-300 ease-in-out"
      >
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;
