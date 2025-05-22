const Signin = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/10">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Sign in
        </h2>
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 border border-white/10 bg-white/10 text-white rounded-lg px-4 py-2 hover:bg-white/20 transition ">
            <img
              src="https://www.svgrepo.com/show/512317/github-142.svg"
              alt="GitHub"
              className="w-5 h-5 invert"
            />
            <span>Continue with github</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
