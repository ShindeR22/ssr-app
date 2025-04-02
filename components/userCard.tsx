"use client"
import React from 'react';
import Image from 'next/image';
import { Camera, MapPinned, PhoneCall } from 'lucide-react';
import { BorderBeam } from './magicui/border-beam';
// import { useTheme } from 'next-themes';
// import { BorderBeam } from './magicui/border-beam';


type Post = {
    id: number;
    name: string;
    image: string;
    address: string;
    city: string;
    mobile: number;
    photographerType: string;
};

export default function UserCard({ userpost }: { userpost: Post }) {
    return (
        <div>
            <div className=" mx-auto  shadow-xl rounded-xl  transform hover:scale-105 transition duration-300 opacity-100">

                <div className={`p-6 dark:bg-zinc-950 bg-zinc-200 rounded-xl`}>
                    <BorderBeam />
                    <div className=" flex items-center">
                        <Image
                            src={userpost.image}
                            alt={userpost.name}
                            width={150}
                            height={150}
                            className="rounded-full border-4 border-white shadow-md mb-4"
                        />
                        <div className='m-4 '>

                            <h2 className="text-2xl font-bold  mb-2 " >
                                {userpost.name}
                            </h2>
                            <p className=" whitespace-pre-line">
                                City-{userpost.city}
                            </p>
                            <p className=" text-center whitespace-pre-line flex ">
                                <MapPinned className="w-5 h-5 mr-2" />
                                {userpost.address}
                            </p>
                            <p className=" text-center whitespace-pre-line flex ">
                                <PhoneCall className="w-5 h-5 mr-2" />
                                {userpost.mobile}
                            </p>
                            <p className=" text-center whitespace-pre-line flex ">
                                <Camera className="w-5 h-5 mr-2" />
                                {userpost.photographerType}
                            </p>
                        </div>

                    </div>

                </div>
            </div>


        </div>

    );
}
