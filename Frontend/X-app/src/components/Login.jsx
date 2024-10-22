import React, { useState } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/Userslice";

function Login() {
  const [isLogin, setLogin] = useState(true);

  //pulling the data from frontend and sending to backend
  const [name, setName] = useState(""); //the input fields for initial load shoulf be empty
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    //using api to network call
    if (isLogin) {
      //login
      try {
        const res = await axios.post(
          `${USER_API_END_POINT}/login`,
          {
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        dispatch(getUser(res?.data?.user));
        if (res.data.success) {
          navigate("/");
          toast.success(res.data.message);
        }
      } catch (error) {
        toast.success(error.response.data.message);
        console.log(error);
      }
    } else {
      //signup
      try {
        const res = await axios.post(
          `${USER_API_END_POINT}/register`,
          {
            name,
            email,
            username,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        if (res.data.success) {
          setLogin(true);
          toast.success(res.data.message);
        }
      } catch (error) {
        toast.success(error.response.data.message);
        console.log(error);
      }
    }
  };

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
          <form onSubmit={submitHandler} className="flex flex-col w-[55%]">
            {!isLogin && (
              <>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="px-3 py-2 my-1 font-semibold border border-gray-800 rounded-full outline-blue-500"
                />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  className="px-3 py-2 my-1 font-semibold border border-gray-800 rounded-full outline-blue-500"
                />
              </>
            )}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="px-3 py-2 my-1 font-semibold border border-gray-800 rounded-full outline-blue-500"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
