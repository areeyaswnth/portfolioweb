import ContactCard from "@/components/contactcard";
import ProfilePic from "@/components/profile";
import * as React from 'react';

const backgroundImageUrl = 'https://media.discordapp.net/attachments/1027767973286510602/1180814344049676368/Rectangle_3.png?ex=657eca0e&is=656c550e&hm=4e438f210be24066672e6ccbbef5aa0cd2b5dac88007a80bac655a26d393924f&=&format=webp&quality=lossless&width=1440&height=351';

export default function Education() {
    return (
        <div className="justify-center bg-gradient-to-t from-gray-100  ">
            <div className="h-72 flex justify-center items-end "
                style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.0),rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 0.6)), url(${backgroundImageUrl})`, backgroundSize: '100% 100%' }}>
                <div > <ProfilePic></ProfilePic></div>
            </div>

            <section className="bg-gray-100 text-gray-800">
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-gray-500">
                                <h3 className="text-3xl font-semibold">Education</h3>
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-gray-500">
                                    <h3 className="text-xl font-semibold tracki">King Mongkut’s Institute of Technology Ladkrabang</h3>
                                    <time className="text-xs tracki uppercase text-gray-600">2021 - Now</time>
                                    <p className="mt-3">B.E. Bachelor of Engineering in Computer Engineering
                                        Bangkok,Thailand</p>
                                    <p className="mt-3">GPA 3.27</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-gray-500">
                                    <h3 className="text-xl font-semibold tracki">Udonpittayanukul School</h3>
                                    <time className="text-xs tracki uppercase text-gray-600">2016-2019</time>
                                    <p className="mt-3">High School Certificate in Mathematics and Science
                                        Udonthani,Thailand</p>
                                    <p className="mt-3">GPA 3.91</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex   justify-center pb-10">
                <button className="w-60  bg-white border border-slate-950 rounded-3xl shadow-xl hover:bg-gray-200">
                    <div className="flex justify-center p-4 flex-shrink-0">
                        <svg className="fill-current w-4 h-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                        </svg>
                        <a className="pl-2 text-black">Transcription.pdf</a></div>
                </button></div>
        </div>

    )
}