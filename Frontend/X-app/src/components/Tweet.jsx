import React from "react";
import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

function Tweet() {
  return (
    <div className="border-b border-gray-200">
      <div>
        <div className="flex p-4">
          <Avatar
            src="https://pbs.twimg.com/profile_images/1846911817055911936/ft4lD4cV_400x400.jpg"
            size="40"
            round={true}
          />
          <div className="w-full ml-2">
            <div className="flex items-center ">
              <h1 className="font-bold">Ashutosh</h1>
              <p className="ml-1 text-sm text-gray-500">@ashutoshfase . 1m</p>
            </div>
            <div>
              <p>Hello develpoers lets connect and grow together</p>
            </div>
            <div className="flex justify-between my-3">
              <div className="flex items-center">
                <div className="p-2 rounded-full cursor-pointer hover:bg-green-200">
                  <FaRegComment size={"20px"} />
                </div>
                <p className="ml-1">0</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 rounded-full cursor-pointer hover:bg-pink-200">
                  <CiHeart size={"24px"} />
                </div>
                <p className="ml-1">0</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 rounded-full cursor-pointer hover:bg-yellow-200">
                  <CiBookmark size={"24px"} />
                </div>
                <p className="ml-1">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
