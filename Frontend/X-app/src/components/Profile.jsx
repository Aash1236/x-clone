import React, { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import Avatar from "react-avatar";
import { useSelector, useDispatch } from "react-redux";
import useGetProfile from "../hooks/useGetProfile";
import { followingUpdate, getMyProfile } from "../redux/Userslice";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { getRefresh } from "../redux/TweetSlice";

function Profile() {
  const { user, profile } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useGetProfile(user?._id);

  // const fetchProfile = async () => {
  //   if (user?._id) {
  //     try {
  //       const res = await axios.get(`${PROFILE_API_END_POINT}/${user._id}`);
  //       dispatch(getMyProfile(res.data.profile));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  //

  // const followUnfollowHandler = async () => {
  //   if (user.following.includes(id)) {
  //     //unfollow
  //     try {
  //       axios.defaults.withCredentials = true;
  //       const res = await axios.post(`${USER_API_END_POINT}/unfollow/${id}`, {
  //         id: user?._id,
  //       });
  //       console.log(res);
  //       dispatch(followingUpdate(id));
  //       toast.success(res.data.message);
  //     } catch (error) {
  //       toast.error(error.respose.data.message);
  //       console.log(error);
  //     }
  //   } else {
  //     //follow
  //     try {
  //       axios.defaults.withCredentials = true;
  //       const res = await axios.post(`${USER_API_END_POINT}/follow/${id}`, {
  //         id: user?._id,
  //       });
  //       console.log(res);
  //       toast.success(res.data.message);
  //     } catch (error) {
  //       toast.error(error.respose.data.message);
  //       console.log(error);
  //     }
  //   }
  // };
  const followUnfollowHandler = async () => {
    if (user && user.following?.includes(id)) {
      // Unfollow
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.post(`${USER_API_END_POINT}/unfollow/${id}`, {
          id: user._id,
        });
        dispatch(followingUpdate(id));
        dispatch(getRefresh());
        toast.success(res.data.message);
      } catch (error) {
        toast.error(error.response?.data?.message || "Error occurred");
      }
    } else if (user) {
      // Follow
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.post(`${USER_API_END_POINT}/follow/${id}`, {
          id: user._id,
        });
        dispatch(followingUpdate(id));
        dispatch(getRefresh());
        toast.success(res.data.message);
      } catch (error) {
        toast.error(error.response?.data?.message || "Error occurred");
      }
    }
  };
  const { id } = useParams();
  useGetProfile(id);
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
            <h1 className="text-lg font-bold">{profile?.name}</h1>
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
          {profile?._id === user?._id ? (
            <button className="px-4 py-1 border border-gray-400 rounded-full hover:bg-gray-200">
              Edit profile
            </button>
          ) : (
            <button
              onClick={followUnfollowHandler}
              className="px-4 py-1 text-white bg-black border rounded-full"
            >
              {user.following.includes(id) ? "following" : "Follow"}
            </button>
          )}
        </div>
        <div className="m-4">
          <h1 className="text-xl font-bold">{profile?.name}</h1>
          <p>{`@${profile?.username}`}</p>
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
