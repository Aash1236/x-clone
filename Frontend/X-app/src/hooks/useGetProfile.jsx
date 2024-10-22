import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMyProfile } from "../redux/Userslice";

//whenever calling network we use useEffect
const useGetProfile = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMyProfile = async () => {
      try {
        const res = await axios.get(`${USER_API_END_POINT}/profile/${id}`, {
          withCredentials: true,
        });
        dispatch(getMyProfile(res.data.user)); //receiving loggedin user id
      } catch (error) {
        console.log(error);
      }
    };
    fetchMyProfile();
  }, [id]);
};

export default useGetProfile;
