const Signin = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-full max-w-md p-8 border border-white rounded-2xl shadow-lg ">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder=""
            />
          </div>
          <div>
            <label htmlFor="password" className="block tex-sm font font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder=""
              id="password"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="relative px-6 py-3 rounded-xl text-xs bg-slate-800 w-fit h-fit  outline outline-offset-2 outline-slate-800 hover:bg-gradient-to-br from-slate-500 via-cyan-600 to-teal-500
hover:outline-cyan-600
glass-effect transition-all duration-300 ease-in-out"
          >
            Sign in
          </button>
        </form>
        <p>Dont have a account</p>
      </div>
    </div>
  );
};

export default Signin;
