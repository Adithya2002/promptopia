import mongoose, { mongo, MongooseError } from "mongoose";

let isConnected = false;

export const connectToDB = async()=>{
    mongoose.set('strictQuery', true);
    if(isConnected){
        console.log('mongoDB is already connected');
        return;
    }
    
    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"share_prompt",
        })
        isConnected=true;
        console.log('MongoDB connected')
    }
    catch(error){
        console.log(error);
    }
}