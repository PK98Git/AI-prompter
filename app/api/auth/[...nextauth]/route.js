import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import User from "@models/user";
import { connectToDB } from "@utils/database";

const handler = NextAuth({
	providers:[
		GoogleProvider({
			clientId:process.env.GOOGLE_CLIENT_ID,
			clientSecret:process.env.GOOGLE_CLIENT_SECRET,
		})
	],
	async session({session}){
		const sessionUser  = await User.findOne({
			email:session.user.email
		})
	},
	async signIn({profile}){
		try {
			await connectToDB();

			// check if a user exit
			const userExits = await User.findOne({
				email:profile.email
			});
			//if not create a new user
			if(!userExits){
				await User.create({
					email:profile.email,
					username:profile.name.replace(" "," ").toLowerCase(),
					image:profile.picture
				})
			}
			return true;
		} catch (err) {
			
		}
	}

})

export {handler as GET,handler as POST}