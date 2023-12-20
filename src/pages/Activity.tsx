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

            <div className="grid grid-cols-2 md:col-span-1 pl-40 pr-40">
                <div className="flex justify-center items-center pt-10">
                    <div className="flex flex-col w-400px items-center justify-center p-10 bg-white border border-slate-950 rounded-3xl shadow-xl">
                        <a className="text-center text-2xl font-bold">Teaching Assistant</a>
                        <a className="text-center text-lg w-56 h-8 rounded-lg bg-gray-200  font-semibold"> Jan 2023 - Apr 2023</a>
                        <a className="text-center text-lg">King Mongkut’s Institute of Technology Ladkrabang </a>
                        <a className="text-center text-base"> C Language</a>

                        <li className="text-sm">I worked as a teaching assistant for a computer programming at a university.
                        </li>
                        <li className="text-sm">My responsibilities included teaching first-year engineering students . </li>


                    </div>
                </div>
                <div></div>
                <div className="flex justify-center">
                    <div className="flex flex-col ">
                        <div className="pt-28">
                            <div className=" flex flex-col justify-center items-center  bg-white border  border-slate-950 rounded-3xl shadow-xl">
                                <img src="https://media.discordapp.net/attachments/1027767973286510602/1185599810368192602/image_13_1.png?ex=659032de&is=657dbdde&hm=00337c740431a65d842f5adbeafb70459edb255e2fea3f2c12ef2949637a4b74&=&format=webp&quality=lossless&width=628&height=335"
                                    className="rounded-3xl" alt="Image" />
                            </div></div>
                        <div className="flex flex-row pt-5 ">
                            <div className=" flex pr-3 ">
                                <img src="https://media.discordapp.net/attachments/1027767973286510602/1185599742013624331/image_15.png?ex=659032cd&is=657dbdcd&hm=65d2885a433951e341b8b596022cb130578d3fa55b74aca741c9d5f8e4d1f0c2&=&format=webp&quality=lossless&width=303&height=175"
                                    className=" rounded-3xl" alt="Image" />
                            </div>
                            <div className=" flex flex-col justify-center items-center  bg-white border  border-slate-950 rounded-3xl shadow-xl">
                                <img src="https://media.discordapp.net/attachments/1027767973286510602/1185599742361739284/image_14_1.png?ex=659032cd&is=657dbdcd&hm=d8c22b435ae034912ce6aa7aee1c46d245dde7b84577ba0d57379d5d11940e1e&=&format=webp&quality=lossless&width=300&height=172"
                                    className=" rounded-3xl" alt="Image" />
                            </div></div>
                    </div>
                </div>
                <div className="flex justify-center items-center pt-10">
                    <div className="flex flex-col w-400px items-center justify-center p-10 bg-white border border-slate-950 rounded-3xl shadow-xl">
                        <a className="text-center text-2xl font-bold">Discovery Piscine</a>
                        <a className="text-center text-lg w-56 h-8 rounded-lg bg-gray-200  font-semibold">Aug 2022 - Oct 2022</a>
                        <a className="text-center text-lg">42Bangkok </a>
                        <a className="text-center text-base"> HTML/CSS/Javascript </a>

                        <li className="text-sm">I enrolled in the Discovery Piscine program at 42 Bangkok.
                        </li>
                        <li className="text-sm">I successfully finished the Frontend developer courses . </li>
                        <li className="text-sm">I designed and developed my own portfolio website.</li>

                    </div>
                </div>

            </div>

            <div className=" p-10 flex justify-center">


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
                            <div className="grid grid-cols-2 gap-x-10">
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