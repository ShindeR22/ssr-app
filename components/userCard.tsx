import React from 'react';
// import Link from 'next/link';
import Image from 'next/image';
import { MagicCard } from './magicui/magic-card';
// import { TextAnimate } from './magicui/text-animate';
// import { MagicCard } from "@/registry/magicui/magic-card";

type Post = {
        id: number;
        name: string;
        image: string;
        address: string;
};

export default function UserCard({ post }: { post: Post }) {
        return (
                <MagicCard>
                        <div className="max-w-96 mx-auto bg-blue-200 shadow-md  rounded-md overflow-hidden my-4">
                                <div className="p-4">
                                        <Image
                                                src={post.image}
                                                alt={post.name}
                                                width={64}
                                                height={64}
                                                className="rounded-full"
                                        />
                                        <h2 className="text-xl text-black font-bold mb-2">{post.name}</h2>
                                        <div className="text-gray-700 mb-4 whitespace-pre-line">{post.address}</div>
                                </div>
                        </div>
                </MagicCard>

        );
}
