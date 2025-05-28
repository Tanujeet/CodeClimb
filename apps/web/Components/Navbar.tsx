"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`navigation fixed top-0 left-0 z-20 w-full transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } bg-[#d4c9c9] text-black border border-b-black p-3 lg:p-5`}
    >
      {/* Logo */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold">CodeClimb</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex gap-12 font-medium text-sm uppercase">
          <Link href="/career">Career Roadmap</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blogs">Blogs</Link>
        </div>

        {/* Auth Buttons */}
        {status === "loading" ? null : session?.user ? (
          <div className="flex gap-3">
            <Button
              title="Dashboard"
              onClick={() => router.push("/dashboard")}
            />
            <Button title="Log Out" onClick={() => signOut()} />
          </div>
        ) : (
          <Button
            title="Get started"
            onClick={() => router.push("/auth/signin")}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
