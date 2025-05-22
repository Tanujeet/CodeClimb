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
          <button></button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
