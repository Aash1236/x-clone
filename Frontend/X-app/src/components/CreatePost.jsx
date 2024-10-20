import React from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";

function CreatePost() {
  return (
    <div className="w-[100%]">
      <div>
        <div className="flex items-center border-b border-gray-200 justify-evenly ">
          <div className="w-full px-4 py-3 text-center cursor-pointer hover:bg-gray-200">
            <h1 className="text-lg font-semibold text-gray-600">For you</h1>
          </div>
          <div className="w-full px-4 py-3 text-center cursor-pointer hover:bg-gray-200">
            <h1 className="text-lg font-semibold text-gray-600">Following</h1>
          </div>
        </div>
        <div>
          <div className="flex items-center m-4">
            <div>
              <Avatar
                src="https://pbs.twimg.com/profile_images/1846911817055911936/ft4lD4cV_400x400.jpg"
                size="40"
                round={true}
              />
            </div>
            <input
              className="w-full ml-2 text-lg border-none outline-none"
              type="text"
              placeholder="What is happening?!"
            />
          </div>
          <div className="flex items-center justify-between p-5 border-b border-gray-300">
            <div>
              <CiImageOn size={"24px"} />
            </div>
            <button className="bg-[#1D9BF0] px-4 py-1 text-lg text-white border-none rounded-full">
              {" "}
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
