import mongoose from "mongoose";

let isConneted = false; //track the connection

export const connectToDB = async () =>{
	mongoose.set('strictQuery',true);
	if(isConneted){
		console.log("Mongoogle Connected");
		return;
	}
	try {
		await mongoose.connect(process.env.MONGODB_URI,{
			dbName:"share_prompt",
			useNewUrlParser:true,
			useUnnifiedTopology:true

		})
		 isConneted = true;

		 console.log("mongodb connected")
	}catch(error){
		console.log(error);
	}
}