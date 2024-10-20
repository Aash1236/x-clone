import React from "react";
import { GoHome } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";

function LeftSidebar() {
  return (
    <div className="w-[20%]">
      <div>
        <div>
          <img
            className="ml-4"
            width={"30px"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKLYr5paCln7v8txGha-v0USWqcCfFqhly-vi2QJ6dY_1_xqxZyBkjXupu2Y7cfVQfRz0&usqp=CAU"
            alt=""
          />
        </div>
        <div className="my-4">
          <Link
            to="/"
            className="flex items-center px-4 py-2 my-2 rounded-full hover:bg-gray-100 hover:cursor-pointer "
          >
            <div>
              <GoHome size={"24px"} />
            </div>
            <h1 className="ml-3 text-lg font-bold">Home</h1>
          </Link>
          <div className="flex items-center px-4 py-2 my-2 rounded-full hover:bg-gray-100 hover:cursor-pointer ">
            <div>
              <IoSearchOutline size={"24px"} />
            </div>
            <h1 className="ml-3 text-lg font-bold">Explore</h1>
          </div>
          <div className="flex items-center px-4 py-2 my-2 rounded-full hover:bg-gray-100 hover:cursor-pointer ">
            <div>
              <IoIosNotificationsOutline size={"24px"} />
            </div>
            <h1 className="ml-3 text-lg font-bold">Notification</h1>
          </div>
          <Link
            to="/profile"
            className="flex items-center px-4 py-2 my-2 rounded-full hover:bg-gray-100 hover:cursor-pointer "
          >
            <div>
              <CiUser size={"24px"} />
            </div>
            <h1 className="ml-3 text-lg font-bold">Profile</h1>
          </Link>
          <div className="flex items-center px-4 py-2 my-2 rounded-full hover:bg-gray-100 hover:cursor-pointer ">
            <div>
              <CiBookmark size={"24px"} />
            </div>
            <h1 className="ml-3 text-lg font-bold">Bookmarks</h1>
          </div>
          <div className="flex items-center px-4 py-2 my-2 rounded-full hover:bg-gray-100 hover:cursor-pointer ">
            <div>
              <CiLogout size={"24px"} />
            </div>
            <h1 className="ml-3 text-lg font-bold">Logout</h1>
          </div>
          <button className="px-4 py-4 border-none text-md bg-[#1D9BF0] w-[80%] rounded-full text-white font-bold">
            {" "}
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
