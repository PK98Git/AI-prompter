"use client";

import { useRouter } from "next/navigation";
import { useState,useEffect } from "react";
import { SessionProvider, useSession } from "next-auth/react";

import Profile from "@components/Profile";

const MyProfile = () => {
	const router = useRouter();

	const {data:session} = useSession();

	const [posts,setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setMyPosts(data);
    };

    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  	console.log("post",pos);
	const handleEdit = (post) =>{
		router.push(`/update-prompt?id=$(post._id)`)
	}
	const handleDelete = async (post) =>{

	}

  return (
	<Profile
		name="My"
		desc="Welcome to your prifle page"
		data={[posts]}
		handleEdit={handleEdit}
		handledelete={handleDelete}
	/>
  )
}

export default MyProfile;