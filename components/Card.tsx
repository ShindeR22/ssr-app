import React from 'react';
import Link from 'next/link';

type Post = {
        userId: number;
        id: number;
        title: string;
        body: string;
};


export default function Card({ post: post }: { post: Post }) {
        return (
                <div className="max-w-96 mx-auto bg-white shadow-md shadow-amber-800 rounded-md overflow-hidden my-4">
                        <div className="p-4 ">
                                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                                <p className="text-gray-700 mb-4 whitespace-pre-line">{post.body}</p>
                                <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
                                        Read More
                                </Link>
                        </div>
                </div>
        );
};


