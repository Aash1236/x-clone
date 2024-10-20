import mongoose from "mongoose";
import dotenv from "dotenv"; 

dotenv.config({
    path:"../.env"
})

const databaseConnection = () => {
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Connedcted to mongoDB");
    }).catch((error)=>{
        console.log(error);
        
    })
}

export default databaseConnection;


 //not using async nd await so then and catch have to resolve