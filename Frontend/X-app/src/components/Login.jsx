import React, { useState } from "react";

function Login() {
  const [isLogin, setLogin] = useState(true);
  const loginSignupHandler = () => {
    setLogin(!isLogin);
  };
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex items-center justify-evenly w-[80%]">
        <div>
          <img
            className="ml-5"
            width={"350px"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKLYr5paCln7v8txGha-v0USWqcCfFqhly-vi2QJ6dY_1_xqxZyBkjXupu2Y7cfVQfRz0&usqp=CAU"
            alt=""
          />
        </div>
        <div>
          <div className="my-5">
            <h1 className="text-6xl font-bold">Happening now</h1>
          </div>
          <h1 className="mt-4 mb-2 text-2xl font-bold">
            {isLogin ? "Login" : "Signup"}
          </h1>
          <form className="flex flex-col w-[55%]">
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  className="px-3 py-2 my-1 font-semibold border border-gray-800 rounded-full outline-blue-500"
                />
                <input
                  type="text"
                  placeholder="Username"
                  className="px-3 py-2 my-1 font-semibold border border-gray-800 rounded-full outline-blue-500"
                />
              </>
            )}
            <input
              type="text"
              placeholder="Email"
              className="px-3 py-2 my-1 font-semibold border border-gray-800 rounded-full outline-blue-500"
            />
            <input
              type="text"
              placeholder="Password"
              className="px-3 py-2 my-1 font-semibold border border-gray-800 rounded-full outline-blue-500"
            />
            <button className="bg-[#1D9BF0] border-none py-2 my-4 rounded-full text-lg text-white">
              {isLogin ? "Login" : "Create Account"}
            </button>
            <h1>
              {isLogin ? "Don't have a account?" : "Alrady have an account?"}{" "}
              <span
                className="font-bold text-blue-500 cursor-pointer"
                onClick={loginSignupHandler}
              >
                {isLogin ? "Register now.!" : "Login"}
              </span>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
