"use client";
import React from 'react';
import { useAtomValue } from 'jotai';
import { postsAtom } from '@/lib/atoms/posts';
import Card from './Card';

export default function PostsPage() {
        // Get the entire query result
        const postsQuery = useAtomValue(postsAtom);
        const posts = postsQuery.data; // Extract the data array
        console.log("posts", posts);

        if (postsQuery.isLoading) {
                return <div>Loading...</div>;
        }

        if (postsQuery.isError) {
                return <div>Error fetching posts.</div>;
        }

        if (!posts) {
                return <div>No posts found.</div>;
        }

        return (
                <main className="p-4 grid-cols-3 gap-8 grid max-w-4/5 items-center  mx-auto">
                        {posts.map((post: { id: number; userId: number; title: string; body: string }) => (
                                <Card key={post.id} post={post} />
                        ))}
                </main>
        );
}
// app/posts/page.tsx (or wherever your server component is located)






// import React from 'react';
// import Card from './Card';
// import { fetchPosts } from '@/lib/api/posts';

// export default async function PostsPage() {
//         try {
//                 // Fetch posts server-side using your API helper
//                 const posts = await fetchPosts();

//                 // If no posts are returned, handle that case
//                 if (!posts || posts.length === 0) {
//                         return <div>No posts found.</div>;
//                 }

//                 return (
//                         <main className="p-4 grid-cols-3 gap-8 grid max-w-4/5 items-center mx-auto">
//                                 {posts.map((post: { id: number; userId: number; title: string; body: string }) => (
//                                         <Card key={post.id} post={post} />
//                                 ))}
//                         </main>
//                 );
//         } catch (error) {
//                 console.error('Error fetching posts:', error);
//                 return <div>Error fetching posts.</div>;
//         }
// }
