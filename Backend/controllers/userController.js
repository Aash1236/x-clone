import {User} from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";


export const Register = async(req, res) => {
    try {
        const {name, username, email, password} = req.body;
        //basic validation
        if(!name || !username || !email || !password){
            return res.status(401).json({
                message:"All fields are required",
                success:false
            })
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(401).json({
                message:"User already exist",
                success:false
            })
        }
        //hashing the password, 16 is salt value decides how strongly the pass decrypts
        const hashedPassword = await bcryptjs.hash(password, 16); 

        await User.create({
            name,
            username,
            email,
            password:hashedPassword
        });

        return res.status(201).json({
            message:"Account created successfully",
            success:true
        })
        

    } catch (error) {
        console.log(error);
    }
}

export const Login = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(401).json({
                message:"All fields are required",
                success:false
            })
        };
        const user =await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message:"Incorrect user or password",
                success:false
            })
        };
        const isMatch = await bcryptjs.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({
                message:"incorrect email or password",
                success:false
            })
        };
        const tokenData = {
            userId:user._id
        }
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" });

        // Set cookie and send response
        return res.status(201)
            .cookie("token", token, { expires: new Date(Date.now() + 86400000), httpOnly: true })
            .json({
                message: `Welcome back ${user.name}`,
                success: true
            });

    } catch (error) {
        console.log(error);
    }
}

export const Logout = (req, res) => {
    return res.cookie("token", " ", { expires: new Date(Date.now()) })
        .json({
            message: "User logged out",
            success: true
        });
};

// export const bookmarks = async (req,res) =>{
//     try {
//         const LoggedInUserId = req.body.id;
//         const tweetId = req.params.id;
//         const user =await user.findById(LoggedInUserId);
//         if(user.bookmarks.includes(tweetId)){
//            //remove 
//            await user.findByIdAndUpdate(LoggedInUserId, {$pull:{bookmarks:tweetId}})
//            return res.status(200).json({
//             message:"user removed bookmarked"
//         })
//         }else{
//             //bookmark
//             await user.findByIdAndUpdate(LoggedInUserId,{$push:{bookmarks:tweetId}})
//             return res.status(200).json({
//                 message:"user bookmarked"
//             })
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }

// Bookmarking tweets
export const bookmarks = async (req, res) => {
    try {
        const LoggedInUserId = req.body.id;
        const tweetId = req.params.id;

        // Fix: Changed 'user' to 'User'
        const user = await User.findById(LoggedInUserId);
        if (!user) {
            return res.status(404).json({
                message: "User not found", // Handle user not found
                success: false
            });
        }

        // Check if the tweet is already bookmarked
        if (user.bookmarks.includes(tweetId)) {
            // Remove bookmark
            await User.findByIdAndUpdate(LoggedInUserId, { $pull: { bookmarks: tweetId } });
            return res.status(200).json({
                message: "User removed bookmark",
                success: true
            });
        } else {
            // Add bookmark
            await User.findByIdAndUpdate(LoggedInUserId, { $push: { bookmarks: tweetId } });
            return res.status(200).json({
                message: "User added bookmark",
                success: true
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error",
            success: false
        });
    }
};

