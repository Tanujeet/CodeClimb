"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Button from "./Button";

const Navbar = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  return (
    <nav className="navigation fixed top-0 left-0 z-20 lg:h-[4.5rem] p-3 lg:p-5 flex justify-between items-center w-full bg-[#d4c9c9] text-black">
      <div className="text-xl font-bold">CodeCLimb</div>

      <div className="hidden lg:flex gap-12 w-fit justify-center font-medium items-center text-sm text-black uppercase">
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
          <Button
            title="Dashboard"
            onClick={() => router.push("/dashboard")}
          ></Button>
          <Button title="Log Out" onClick={() => signOut()}></Button>
        </div>
      ) : (
        <Button
          title="Get started"
          onClick={() => router.push("/auth/signin")}
        ></Button>
      )}
    </nav>
  );
};

export default Navbar;
