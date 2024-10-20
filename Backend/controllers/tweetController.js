import { Tweet } from "../models/tweetSchema.js";

export const createTweet = async (req, res) => {
    try {
        const { description } = req.body; // Only description should come from the request body
        const userId = req.user; // Fetch the userId from req.user set by the authentication middleware

        if (!description || !userId) {
            return res.status(401).json({
                message: "Fields are required",
                success: false
            });
        }

        await Tweet.create({
            description,
            userId // Assign the userId automatically
        });

        return res.status(200).json({
            message: "Tweet created successfully",
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};

export const deleteTweet = async (req, res) => {
    try {
        const {id} = req.params;
        await Tweet.findByIdAndDelete(id);
        return res.status(200).json({
            message:"tweet deleted successfully",
            success: true
        })
    } catch (error) {
        console.log(error)
        
    }
}

export const likeOrDislike = async (req,res) =>{
    try {
        const LoggedInUserId = req.body.id;
        const tweetId = req.params.id;
        const tweet =await Tweet.findById(tweetId);
        if(tweet.like.includes(LoggedInUserId)){
           //dislike 
           await Tweet.findByIdAndUpdate(tweetId, {$pull:{like:LoggedInUserId}})
           return res.status(200).json({
            message:"user disliked"
        })
        }else{
            //like
            await Tweet.findByIdAndUpdate(tweetId,{$push:{like:LoggedInUserId}})
            return res.status(200).json({
                message:"user liked"
            })
        }
    } catch (error) {
        console.log(error)
    }
}

