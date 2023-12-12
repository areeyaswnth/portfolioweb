import ContactCard from "@/components/contactcard";
import ProfilePic from "@/components/profile";

const backgroundImageUrl = 'https://media.discordapp.net/attachments/1027767973286510602/1180814344049676368/Rectangle_3.png?ex=657eca0e&is=656c550e&hm=4e438f210be24066672e6ccbbef5aa0cd2b5dac88007a80bac655a26d393924f&=&format=webp&quality=lossless&width=1440&height=351';

export default function Activity() {
    return (
        <div className="justify-center">
            <div className="h-72 flex justify-center items-end"
                style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.0),rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 0.6)), url(${backgroundImageUrl})`, backgroundSize: '100% 100%' }}>
                <div > <ProfilePic></ProfilePic></div>
            </div>

            <div className="bg-indigo-700 p-4">
                <div className="flex flex-col md:grid md:grid-cols-9 p-2 mx-auto ">
                    <div className="md:contents flex-row-reverse justify-center items-center">
                        <div className="flex flex-row p-4 my-6 text-gray-800 justify-center items-center bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                            <div className="flex flex-col w-400px items-center justify-center p-10 bg-white border border-slate-950 rounded-3xl shadow-xl">
                                <a className="text-center text-2xl">Teaching Assistant</a>
                                <a className="text-center text-lg">Jan 2023 - Apr 2023</a>
                                <a className="text-center text-lg">King Mongkut’s Institute of Technology Ladkrabang</a>
                                <li className="text-base">I worked as a teaching assistant for a computer programming at a university.</li>
                                <li className="text-base">My responsibilities included teaching first-year engineering students.</li>
                            </div>
                            <div className="flex flex-col w-400px items-center justify-center p-10 bg-white border border-slate-950 rounded-3xl shadow-xl">
                                <a className="text-center text-2xl">Teaching Assistant</a>
                                <a className="text-center text-lg">Jan 2023 - Apr 2023</a>
                                <a className="text-center text-lg">King Mongkut’s Institute of Technology Ladkrabang</a>
                                <li className="text-base">I worked as a teaching assistant for a computer programming at a university.</li>
                                <li className="text-base">My responsibilities included teaching first-year engineering students.</li>
                            </div>
                        </div>

                        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div className="flex items-center justify-center w-6 h-full">
                                <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                                </div>
                            </div>
                            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                    </div>

                    <div className="flex md:contents">
                        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div className="flex items-center justify-center w-6 h-full">
                                <div className="w-1 h-full bg-indigo-300"></div>
                            </div>
                            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                        <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                            <h3 className="text-lg font-semibold lg:text-xl">New Event 2</h3>
                            <p className="mt-2 leading-6">Description of the second event.</p>
                            <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 2</span>
                        </div>
                    </div>

                    <div className="flex md:contents flex-row-reverse">
                        <div
                            className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                            <h3 className="text-lg font-semibold lg:text-xl">New Event 3</h3>
                            <p className="mt-2 leading-6">Description of the first event.</p>
                            <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 3</span>
                        </div>
                        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div className="flex items-center justify-center w-6 h-full">
                                <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                                </div>
                            </div>
                            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                    </div>

                    <div className="flex md:contents">
                        <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div className="flex items-center justify-center w-6 h-full">
                                <div className="w-1 h-full bg-indigo-300"></div>
                            </div>
                            <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                        </div>
                        <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                            <h3 className="text-lg font-semibold lg:text-xl">New Event 4</h3>
                            <p className="mt-2 leading-6">Description of the second event.</p>
                            <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 4</span>
                        </div>
                    </div>

                </div>
            </div >

            <div className="flex flex-col w-400px items-center justify-center p-10 bg-white border border-slate-950 rounded-3xl shadow-xl">
                <a className="text-center text-2xl">Discovery Piscine</a>
                <a className="text-center text-lg"> Aug 2022 - Oct 2022</a>
                <a className="text-center text-lg"> 42Bangkok </a>
                <a className="text-center text-lg"> HTML/CSS/Javascript </a>

                <li className="text-base">I enrolled in the Discovery Piscine program at 42 Bangkok.
                </li>
                <li className="text-base">I successfully finished the Frontend developer courses .</li>
                <li className="text-base">I designed and developed my own portfolio website.</li>

            </div>
            <div className=" p-3 flex justify-center">


                <div className="w-850px items-center justify-center p-4 bg-white border border-slate-950 rounded-3xl shadow-xl">
                    <div className="flex flex-row">
                        <div className="flex flex-col w-44 p-2 items-center justify-center rounded-3xl bg-gray-200">
                            <a className="text-4xl"> 331 </a>
                            <a className="text-lg text-center"> Problems solve </a>
                        </div>
                        <div className="py-2 px-10 ">
                            <a className="text-lg"> Easy</a>
                            <div className="w-96 bg-gray-300 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-gray-400 h-2.5 rounded-full" style={{ width: "99.1%" }}></div>
                            </div>
                            <a className="text-lg"> Medium</a>
                            <div className="w-96 bg-gray-300 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-gray-400 h-2.5 rounded-full" style={{ width: "82.02%" }}></div>
                            </div>

                        </div>
                        <div>
                            <h3>Languages</h3>
                            <div className="grid-cols-2">
                                <div>Python</div>
                                <div>261</div>
                                <div>SQL</div>
                                <div>71</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}