import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({
  path: "../config/.env",
});

//next is a middleware is ti check user is authenticated
const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    // console.log(token);
    if (!token) {
      return res.satus(401).json({
        message: "User not authenticated",
        success: false,
      });
    }
    const decode = await jwt.verify(token, process.env.TOKEN_SECRET);
    // console.log(decode);
    req.user = decode.userId;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Authentication failed",
      success: false,
    });
  }
};

export default isAuthenticated;
