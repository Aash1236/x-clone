import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";

function Profile() {
  return (
    <div className="w-[50%] border-l border-r border-gray-200">
      <div className="">
        <div className="flex items-center py-2">
          <Link
            to="/"
            className="p-2 rounded-full cursor-pointer hover:bg-gray-100"
          >
            <FaArrowLeft size={"24px"} />
          </Link>
          <div className="ml-5">
            <h1 className="text-lg font-bold">Ashutosh</h1>
            <p className="text-sm text-gray-500">10 posts</p>
          </div>
        </div>
        <img
          src="https://pbs.twimg.com/profile_banners/1846911751272431616/1729355337/600x200"
          alt=""
        />
        <div className="absolute ml-2 border-4 border-white rounded-full top-56">
          <Avatar
            src="https://pbs.twimg.com/profile_images/1846911817055911936/ft4lD4cV_400x400.jpg"
            size="120"
            round={true}
          />
        </div>
        <div className="m-4 mr-20 text-right">
          <button className="px-4 py-1 border border-gray-400 rounded-full hover:bg-gray-200">
            Edit profile
          </button>
        </div>
        <div className="m-4">
          <h1 className="text-xl font-bold">Ashutosh</h1>
          <p>@ashutoshfase</p>
        </div>
        <div className="m-4 text-sm">
          <p>
            👨‍💻 Full-Stack Developer | ⚛️ MERN Stack Enthusiast | 🌐 Building
            Seamless Web Experiences | 🚀 Always Learning, Always Coding
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
