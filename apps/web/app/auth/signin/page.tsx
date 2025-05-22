const Signin = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-lg ">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input type="email" id="email" className="" placeholder="" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
