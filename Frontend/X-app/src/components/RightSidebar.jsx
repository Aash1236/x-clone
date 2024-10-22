import React from "react";
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function RightSidebar() {
  const otherUsers = useSelector((store) => store.user.otherUsers);
  return (
    <div className="px-5 w-[25%]">
      <div className="flex items-center p-2 text-gray-500 bg-gray-100 rounded-full outline-none">
        <CiSearch size={"20px"} />
        <input
          type="text"
          className="px-2 bg-transparent outline-none"
          placeholder="search"
        />
      </div>
      <div className="p-4 my-4 bg-gray-100 rounded-2xl">
        <h1 className="text-lg font-bold">Who to follow</h1>
        <div>
          {otherUsers?.map((user) => {
            return (
              <div
                key={user?._id}
                className="flex items-center justify-between my-2"
              >
                <div className="flex">
                  <Avatar
                    src="https://pbs.twimg.com/profile_images/1846911817055911936/ft4lD4cV_400x400.jpg"
                    size="40"
                    round={true}
                  />
                </div>
                <div>
                  <h1 className="font-bold">{user?.name}</h1>
                  <p className="text-sm">{`@${user?.username}`}</p>
                </div>
                <div>
                  <Link to={`/profile/${user?._id}`}>
                    <button className="px-4 py-1 text-white bg-black rounded-full">
                      Profile
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
