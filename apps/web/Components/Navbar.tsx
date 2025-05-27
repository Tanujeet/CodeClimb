"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  return (
    <nav className="navigation fixed top-0 left-0 z-20 lg:h-[4.5rem] p-3 lg:p-5 flex justify-between items-center w-full bg-gradient-to-t from-slate-950/30 to-slate-950">
      <div className="text-xl font-bold">CodeCLimb</div>

      <div className="hidden lg:flex gap-12 w-fit justify-center font-medium items-center text-sm text-gray-300/90 uppercase">
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

      {status === "loading" ? null : session?.user ? (
        <div className="flex gap-3">
          <button
            onClick={() => router.push("/dashboard")}
            className="relative px-6 py-3 rounded-xl text-xs bg-slate-800 outline outline-offset-2 outline-slate-800 hover:bg-gradient-to-br from-slate-500 via-cyan-600 to-teal-500 hover:outline-cyan-600 transition-all duration-300 ease-in-out"
          >
            Dashboard
          </button>
          <button
            onClick={() => signOut()}
            className="relative px-6 py-3 rounded-xl text-xs bg-red-600/80 outline outline-offset-2 outline-red-600 hover:bg-gradient-to-br from-red-500 via-red-600 to-red-700 hover:outline-red-500 transition-all duration-300 ease-in-out"
          >
            Log Out
          </button>
        </div>
      ) : (
        <button
          onClick={() => router.push("/auth/signin")}
          className="relative px-6 py-3 rounded-xl text-xs bg-slate-800 w-fit h-fit outline outline-offset-2 outline-slate-800 hover:bg-gradient-to-br from-slate-500 via-cyan-600 to-teal-500 hover:outline-cyan-600 transition-all duration-300 ease-in-out"
        >
          Get Started
        </button>
      )}
    </nav>
  );
};

export default Navbar;
