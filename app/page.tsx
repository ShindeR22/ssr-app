"use client";
// import PostsPage from "@/components/postspage";
import PostsPage from "@/components/postspage";
// import { useEffect } from "react";
// import { user } from "@/lib/api/user";
// import UserPage from "@/components/user";
// import { fetchUsers } from "@/path/to/your/api"; // adjust the import path accordingly

export default function Home() {
  // useEffect(() => {
  //   console.log("Home page loaded");
  //   // Call fetchUsers with sample parameters
  //   user()
  //     .then((data) => {
  //       console.log("Fetched users:", data);
  //       // Optionally, update state or perform additional logic with the data here
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching users:", error);
  //     });
  // }, []);

  return (

    <div className=""  >
      {/* <UserPage /> */}
      <PostsPage />
    </div>
  );
}
