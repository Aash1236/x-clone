import React from "react";
import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import { TWEET_API_END_POINT } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { getRefresh } from "../redux/TweetSlice";
import { timeSince } from "../utils/constant";

function Tweet({ tweet }) {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const likeOrDislikeHandler = async (id) => {
    try {
      const res = await axios.put(
        `${TWEET_API_END_POINT}/like/${id}`,
        { id: user?._id }, // Correct structure
        {
          withCredentials: true,
        }
      );
      // console.log(res.data);

      dispatch(getRefresh());
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };
  const deleteTweetHandler = async (id) => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.delete(`${TWEET_API_END_POINT}/delete/${id}`);
      console.log(res);
      dispatch(getRefresh());
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete tweet");
      console.log(error);
    }
  };
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
              <h1 className="font-bold">{tweet?.userDetails[0]?.name}</h1>
              <p className="ml-1 text-sm text-gray-500">
                {`@${tweet?.userDetails[0]?.username} . ${timeSince(
                  tweet?.createdAt
                )}`}{" "}
              </p>
            </div>
            <div>
              <p>{tweet?.description}</p>
            </div>
            <div className="flex justify-between my-3">
              <div className="flex items-center">
                <div className="p-2 rounded-full cursor-pointer hover:bg-green-200">
                  <FaRegComment size={"20px"} />
                </div>
                <p className="ml-1">0</p>
              </div>
              <div
                onClick={() => likeOrDislikeHandler(tweet?._id)}
                className="flex items-center"
              >
                <div className="p-2 rounded-full cursor-pointer hover:bg-pink-200">
                  <CiHeart size={"24px"} />
                </div>
                <p className="ml-1">{tweet?.like?.length}</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 rounded-full cursor-pointer hover:bg-yellow-200">
                  <CiBookmark size={"24px"} />
                </div>
                <p className="ml-1">0</p>
              </div>
              {user?._id === tweet?.userId && (
                <div
                  onClick={() => deleteTweetHandler(tweet?._id)}
                  className="flex items-center"
                >
                  <div className="p-2 rounded-full cursor-pointer hover:bg-red-300">
                    <AiOutlineDelete size={"24px"} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
