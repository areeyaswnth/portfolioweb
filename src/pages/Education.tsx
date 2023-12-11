import ContactCard from "@/components/contactcard";
import ProfilePic from "@/components/profile";
import * as React from 'react';

const backgroundImageUrl = 'https://media.discordapp.net/attachments/1027767973286510602/1180814344049676368/Rectangle_3.png?ex=657eca0e&is=656c550e&hm=4e438f210be24066672e6ccbbef5aa0cd2b5dac88007a80bac655a26d393924f&=&format=webp&quality=lossless&width=1440&height=351';

export default function Education() {
    return (
        <div className="flex flex-col items-center ">
            <div className="h-72 flex justify-center items-end w-screen"
                style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.0),rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 0.6)), url(${backgroundImageUrl})`, backgroundSize: '100% 100%' }}>
                <div > <ProfilePic></ProfilePic></div>
            </div>
            <div className="pt-5 text-center"><h1>Education</h1></div>
            <div className=" flex justify-center items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-8"><ol className="relative border-s border-gray-200 dark:border-gray-700">
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2021 - Now</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">King Mongkut’s Institute of Technology Ladkrabang</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">B.E. Bachelor of Engineering in Computer Engineering
                        Bangkok,Thailand
                    </p>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">GPA 3.27</p>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2016-2019</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Udonpittayanukul School</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">High School Certificate in Mathematics and Science
                        Udonthani,Thailand
                    </p>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">GPA 3.91</p>
                </li>

            </ol>

            </div>
            <div className="pt-4">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                    <a>Transcription.pdf</a>
                </button></div>
        </div>

    )
}