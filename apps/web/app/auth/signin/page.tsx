const Signin = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/10">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Sign In
        </h2>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 border border-white/10 bg-white/10 text-white rounded-lg px-4 py-2 hover:bg-white/20 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Continue with Google</span>
          </button>
          <button className="w-full flex items-center justify-center gap-3 border border-white/10 bg-white/10 text-white rounded-lg px-4 py-2 hover:bg-white/20 transition">
            <img
              src="https://www.svgrepo.com/show/512317/github-142.svg"
              alt="GitHub"
              className="w-5 h-5 invert"
            />
            <span>Continue with GitHub</span>
          </button>
        </div>

        <div className="my-6 flex items-center gap-4">
          <hr className="flex-grow border-white/20" />
          <span className="text-sm text-white/40">or</span>
          <hr className="flex-grow border-white/20" />
        </div>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-3 bg-white/10 border border-white/20 text-white rounded-lg shadow-sm placeholder-white/60 focus:ring-blue-500 focus:border-blue-500"
              placeholder=""
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full p-3 bg-white/10 border border-white/20 text-white rounded-lg shadow-sm placeholder-white/60 focus:ring-blue-500 focus:border-blue-500"
              placeholder=""
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-white/60">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signin;
