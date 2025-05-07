"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
// Make sure this component is created in your project
import axios from "axios";
import LabelledInput from '../../Components/LablledInput'

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState({
    username: "",
    password: "",
    name: "",
  });
  const router = useRouter();
  const [error, setError] = useState("");

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );

      const jwt = response.data;
      localStorage.setItem("token", jwt);
      router.push("/blogs"); // Redirect after successful login/signup
    } catch (err) {
      setError("Invalid username or password");
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="px-10">
            <div className="text-3xl font-extrabold">
              {type === "signup"
                ? "Create an Account"
                : "Login to Your Account"}
            </div>
            <div className="text-slate-500">
              {type === "signin"
                ? "Don't have an account?"
                : "Already have an account?"}
              <Link
                href={type === "signin" ? "/auth/signup" : "/auth/signin"}
                className="pl-2 underline"
              >
                {type === "signin" ? "Sign up" : "Sign in"}
              </Link>
            </div>
          </div>
          <div className="pt-8">
            {type === "signup" && (
              <LabelledInput
                label="Name"
                placeholder="Enter Your Name"
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    name: e.target.value,
                  });
                }}
              />
            )}
            <LabelledInput
              label="Username"
              placeholder="me@example.com"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  username: e.target.value,
                });
              }}
            />
            <LabelledInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  password: e.target.value,
                });
              }}
            />
            {error && <div className="text-red-500 pt-2">{error}</div>}
            <button
              onClick={sendRequest}
              type="button"
              className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              {type === "signup" ? "Sign up" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
