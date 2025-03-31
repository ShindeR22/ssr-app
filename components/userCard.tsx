import React from 'react';
import Image from 'next/image';
import { Camera, MapPinned, PhoneCall } from 'lucide-react';


type Post = {
    id: number;
    name: string;
    image: string;
    address: string;
    city: string;
    mobile: number;
    photographerType: string;
};

export default function UserCard({ post }: { post: Post }) {
    return (
        <div>
            <div className=" mx-auto  shadow-xl rounded-xl  transform hover:scale-105 transition duration-300 m">
                <div className="p-6 bg-gray-300 rounded-xl">
                    <div className=" flex items-center">
                        <Image
                            src={post.image}
                            alt={post.name}
                            width={150}
                            height={150}
                            className="rounded-full border-4 border-white shadow-md mb-4"
                        />
                        <div className='m-4 '>

                            <h2 className="text-2xl font-bold text-gray-900 mb-2 " >
                                {post.name}
                            </h2>
                            <p className="text-gray-600 whitespace-pre-line">
                                City-{post.city}
                            </p>
                            <p className="text-gray-600 text-center whitespace-pre-line flex ">
                                <MapPinned className="w-5 h-5 mr-2" />
                                {post.address}
                            </p>
                            <p className="text-gray-600 text-center whitespace-pre-line flex ">
                                <PhoneCall className="w-5 h-5 mr-2" />
                                {post.mobile}
                            </p>
                            <p className="text-gray-600 text-center whitespace-pre-line flex ">
                                <Camera className="w-5 h-5 mr-2" />
                                {post.photographerType}
                            </p>
                        </div>

                    </div>

                </div>
            </div>

        </div>

    );
}
