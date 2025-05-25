"use client";
import React from "react";
import axios from "axios";
import { signIn } from "next-auth/react";

import { useState } from "react";

const Signin = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedEmail) {
      setError("Email is required.");
      return;
    }

    if (!trimmedEmail.includes("@") || !trimmedEmail.includes(".")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!trimmedPassword) {
      setError("Password is required.");
      return;
    }

    setError("");

    try {
      const response = await axios.post("/api/signin", {
        type: "register",
        email: trimmedEmail,
        password: trimmedPassword,
      });
      
      console.log("Sign in succesfull", response.data);
    } catch (error: any) {
      if (error.response) {
        setError(error.response.data.error || "Something went wrong");
      } else {
        setError("Network error. Please try again.");
      }
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/10">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Sign in
        </h2>
        <div className="space-y-3">
          <button
            className="w-full flex items-center justify-center gap-3 border border-white/10 bg-white/10 text-white rounded-lg px-4 py-2 hover:bg-white/20 transition "
            onClick={() => signIn("github")}
          >
            <img
              src="https://www.svgrepo.com/show/512317/github-142.svg"
              alt="GitHub"
              className="w-5 h-5 invert"
            />
            <span>Continue with Github</span>
          </button>
        </div>
        <div className="my-6 flex  items-center gap-4">
          <hr className="flex-grow border-white/20" />
          <span>or</span>
          <hr className="flex-grow border-white/20" />
        </div>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-white">
            Email
            <input
              type="email"
              className="mt-1 block w-full p-3 border border-white/20 text-white rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="block text-sm font-medium text-white">
            Password
            <input
              type="password"
              className="mt-1 block w-full p-3 border border-white/20 text-white rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex justify-center mt-3 ">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:from-blue-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
