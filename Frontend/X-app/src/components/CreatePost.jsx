import React, { useState } from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";
import axios from "axios";
import toast from "react-hot-toast";
import { TWEET_API_END_POINT } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { getAllTweets, getisActive, getRefresh } from "../redux/TweetSlice";

function CreatePost() {
  const [description, setDescripton] = useState("");
  const { user } = useSelector((store) => store.user);
  const { isActive } = useSelector((store) => store.tweet);
  const dispatch = useDispatch();
  const submitHandler = async () => {
    try {
      const res = await axios.post(
        `${TWEET_API_END_POINT}/create`,
        { description, id: user?._id },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch(getRefresh());
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.success(error.response.data.message);
      console.log(error);
    }
    setDescripton("");
  };

  const froYouHandler = () => {
    dispatch(getisActive(true));
  };
  const followingHandler = () => {
    dispatch(getisActive(false));
  };

  return (
    <div className="w-[100%]">
      <div>
        <div className="flex items-center border-b border-gray-200 justify-evenly">
          <div
            onClick={froYouHandler}
            className={`
              ${
                isActive
                  ? "border-b-4 border-blue-600"
                  : "border-b-4 border-transparent"
              } w-full px-4 py-3 text-center cursor-pointer hover:bg-gray-200`}
          >
            <h1 className="text-lg font-semibold text-gray-600">For you</h1>
          </div>
          <div
            onClick={followingHandler}
            className={`
              ${
                !isActive
                  ? "border-b-4 border-blue-600"
                  : "border-b-4 border-transparent"
              } w-full px-4 py-3 text-center cursor-pointer hover:bg-gray-200`}
          >
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
              value={description}
              onChange={(e) => setDescripton(e.target.value)}
              className="w-full ml-2 text-lg border-none outline-none"
              type="text"
              placeholder="What is happening?!"
            />
          </div>
          <div className="flex items-center justify-between p-5 border-b border-gray-300">
            <div>
              <CiImageOn size={"24px"} />
            </div>
            <button
              onClick={submitHandler}
              className="bg-[#1D9BF0] px-4 py-1 text-lg text-white border-none rounded-full"
            >
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
