import ProfilePic from "@/components/profile";

const backgroundImageUrl = "https://media.discordapp.net/attachments/1027767973286510602/1180814344049676368/Rectangle_3.png?ex=657eca0e&is=656c550e&hm=4e438f210be24066672e6ccbbef5aa0cd2b5dac88007a80bac655a26d393924f&=&format=webp&quality=lossless&width=1440&height=351";

export default function Experience() {
    return (
        <div className="justify-center">

            <div className="h-72 flex justify-center items-end"
                style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.0),rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 0.6)), url(${backgroundImageUrl})`, backgroundSize: "100% 100%" }}>
                <div > <ProfilePic></ProfilePic></div>
            </div>
            <div className="pt-5 text-center p-16"><h1>Experience</h1></div>
            <div className="grid lg:grid-cols-2 md:col-span-1 lg:pl-40 lg:pr-40 md:py-10 md:grid-cols-1">
                <div className="flex justify-center">
                    <div className="flex-col">
                        <div className="flex flex-col w-400px md:w-400px p-10 bg-white border justify-center items-center border-slate-950 rounded-3xl shadow-xl">
                            <a className="text-center text-2xl font-bold">Telephy</a>
                            <div className="flex flex-col ">
                                <a className="text-center text-lg w-56 h-8 rounded-lg bg-gray-200  font-semibold"> Aug 2023 - Oct 2023</a>
                                <a className="text-center text-lg"> Frontend Developers</a>
                                <a className="text-center text-base">Dart (Flutter)</a>
                            </div>
                            <li className="text-sm">I worked as a teaching assistant for a computer programming at a university.</li>
                            <li className="text-sm">This is a Telemedicine mobile application.</li>
                            <li className="text-sm">using Agile to manage the project. </li>
                            <li className="text-sm">I had the responsibility of the Doctor Appointment system. </li>
                        </div>
                        <div className="pt-5">
                            <div className="w-400px flex flex-col justify-center items-center  bg-white border  border-slate-950 rounded-3xl shadow-xl">
                                <img src="https://media.discordapp.net/attachments/1027767973286510602/1184140989036777502/image_2.png?ex=658ae43c&is=65786f3c&hm=80f59ac4adcb5c13d808058af78846ae4deb4b35e474d61f2d3a43b703ba259b&=&format=webp&quality=lossless&width=586&height=287"></img>
                            </div></div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-row">
                        <div className=" flex flex-col justify-center items-center  bg-white border  border-slate-950 rounded-3xl shadow-xl">
                            <img src="https://media.discordapp.net/attachments/880067522030895154/1182196744600178739/Screenshot_2023-12-07-12-46-34-63_bfc2537310ef083157b27bed3e0836f5.jpg?ex=658d0c04&is=657a9704&hm=4db7c22f939fb63d02bea3f461a950d423260edfe0bcb36f3138b80eeb95e176&=&format=webp&width=270&height=585"
                                className="rounded-3xl" alt="Image" />
                        </div>
                        <div className="pl-5">
                            <div className=" flex flex-col justify-center items-center  bg-white border  border-slate-950 rounded-3xl shadow-xl">
                                <img src="https://media.discordapp.net/attachments/880067522030895154/1182196745153814598/Screenshot_2023-12-07-12-46-59-88_bfc2537310ef083157b27bed3e0836f5.jpg?ex=658d0c04&is=657a9704&hm=f7f4b9c6dc566791894841466b48a64ab3f9828aedf5770c20cfe41c589c5b38&=&format=webp&width=270&height=585"
                                    className="rounded-3xl" alt="Image" />
                            </div></div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col">
                        <div className="pt-20">
                            <div className=" flex flex-col justify-center items-center  bg-white border  border-slate-950 rounded-3xl shadow-xl">
                                <img src="https://media.discordapp.net/attachments/1027767973286510602/1185587419064586240/image_6.png?ex=65902753&is=657db253&hm=d1ff4e03e4219b6941f9cd10f37fb941d7194eaa6cb87cc55168726919df81d2&=&format=webp&quality=lossless&width=622&height=3375"
                                    className="rounded-3xl" alt="Image" />
                            </div></div>
                        <div className="flex flex-row pt-5 ">
                            <div className=" flex pr-3 ">
                                <img src="https://media.discordapp.net/attachments/1027767973286510602/1185587418812915752/image_5.png?ex=65902753&is=657db253&hm=e3e09c43611feae153a77e3f89f9d62ea19ed5f69a0e6dccff358c1dd1bfcae2&=&format=webp&quality=lossless&width=307&height=185"
                                    className=" rounded-3xl" alt="Image" />
                            </div>
                            <div className=" flex flex-col justify-center items-center  bg-white border  border-slate-950 rounded-3xl shadow-xl">
                                <iframe src="https://www.youtube.com/embed/ZOc4eoUlh9U?si=HIIxTgZLUErJdYEr" className=" rounded-3xl  w-60" ></iframe>
                            </div></div>
                    </div>
                </div>
                <div className="flex justify-center items-center pt-10">
                    <div className="flex flex-col w-400px items-center justify-center p-10 bg-white border border-slate-950 rounded-3xl shadow-xl">
                        <a className="text-center text-2xl font-bold">Steve a w a y</a>
                        <a className="text-center text-lg w-56 h-8 rounded-lg bg-gray-200  font-semibold"> Aug 2023 - Oct 2023</a>
                        <a className="text-center text-lg"> Game Developers </a>
                        <a className="text-center text-base"> GDscript (Godot Engine)</a>

                        <li className="text-sm">I worked on a game project for the Theory of Computation subject.
                        </li>
                        <li className="text-sm">I applied Finite Automata concepts to gameplay. </li>
                        <li className="text-sm">I utilized the Godot Engine and became proficient in GDscript by leveraging online learning resources like YouTube.
                        </li>

                    </div>
                </div>
                <div className="flex justify-center pt-24 items-center">
                    <div className="flex flex-col w-400px items-center justify-center p-10 bg-white border border-slate-950 rounded-3xl shadow-xl">
                        <a className="text-center text-2xl font-bold">Foodpool</a>
                        <a className="text-center text-lg w-56 h-8 rounded-lg bg-gray-200  font-semibold"> Mar 2023 - May 2023</a>
                        <a className="text-center text-lg"> Backend Developers </a>
                        <a className="text-center text-base"> C# .ASP .NET CORE MVC</a>

                        <li className="text-base">a food delivery E-commerce project
                        </li>
                        <li className="text-base">This project is for my Web Application Development course. </li>
                        <li className="text-sm"> I specifically responsible for the post and stall functions.
                        </li>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col ">
                        <div className="pt-28">
                            <div className=" flex flex-col justify-center items-center  bg-white border  border-slate-950 rounded-3xl shadow-xl">
                                <img src="https://media.discordapp.net/attachments/1027767973286510602/1185594191934402590/image_11.png?ex=65902da2&is=657db8a2&hm=10f6ca8e89f54c159ad8dcbd03e07c7e91e3eae1fca390e70573ffd2801497cd&=&format=webp&quality=lossless&width=628&height=335"
                                    className="rounded-3xl" alt="Image" />
                            </div></div>
                        <div className="flex flex-row pt-5 ">
                            <div className=" flex pr-3 ">
                                <img src="https://media.discordapp.net/attachments/1027767973286510602/1185594191355580568/image_10.png?ex=65902da2&is=657db8a2&hm=af0657547bba0d664c81856b119d5a16615b81b12d77f63e7f4c1b8cb56af8e0&=&format=webp&quality=lossless&width=303&height=175"
                                    className=" rounded-3xl" alt="Image" />
                            </div>
                            <div className=" flex flex-col justify-center items-center  bg-white border  border-slate-950 rounded-3xl shadow-xl">
                                <img src="https://media.discordapp.net/attachments/1027767973286510602/1185594191619833947/image_9.png?ex=65902da2&is=657db8a2&hm=e1fa4c1db12c53c7b247fc9ec354236e6dff0718e2b1351b461c65ff62d28a9e&=&format=webp&quality=lossless&width=300&height=172"
                                    className=" rounded-3xl" alt="Image" />
                            </div></div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col">
                        <div className="pt-20">
                            <div className=" flex flex-col justify-center items-center  bg-white border  border-slate-950 rounded-3xl shadow-xl">
                                <img src="https://media.discordapp.net/attachments/1027767973286510602/1185595416650195024/image_13.png?ex=65902ec6&is=657db9c6&hm=3bb818635ec1e490343168e54710ce928e164d70d8bcc0ff98ab5c3c88869645&=&format=webp&quality=lossless&width=628&height=335"
                                    className="rounded-3xl" alt="Image" />
                            </div></div>
                        <div className="flex flex-row pt-5 ">
                            <div className=" flex pr-3 ">
                                <img src="https://media.discordapp.net/attachments/1027767973286510602/1185595416360800426/image_14.png?ex=65902ec6&is=657db9c6&hm=9ea5c132bfce879925a7bb2a866609e00959536062845706e96eea5ba043bdb8&=&format=webp&quality=lossless&width=300&height=172"
                                    className=" rounded-3xl" alt="Image" />
                            </div>
                            <div className=" flex flex-col justify-center items-center  bg-white border  border-slate-950 rounded-3xl shadow-xl">
                                <iframe src="https://www.youtube.com/embed/8uHrA8e1Gpw?si=GMgvnV8KLGSIatGZ" className=" rounded-3xl  w-60" ></iframe>
                            </div></div>
                    </div>
                </div>
                <div className="flex justify-center items-center pt-20">

                    <div className="flex flex-col w-400px items-center justify-center p-10 bg-white border border-slate-950 rounded-3xl shadow-xl">
                        <a className="text-center text-2xl font-bold">Adventure & Treasure</a>
                        <a className="text-center text-lg w-56 h-8 rounded-lg bg-gray-200  font-semibold"> Aug 2021 - Oct 2021</a>
                        <a className="text-center text-lg"> Game Developers </a>
                        <a className="text-center text-base"> C/C++ (SFML)</a>

                        <li className="text-base">For my final project at first year in Programming Fundamentals
                        </li>
                        <li className="text-base">I created a game using SFML as per the requirements set by the professor.</li>
                        <li className="text-base"> I designed all the illustrations in the game and wrote the code for its functionality.</li>
                    </div>
                </div>

            </div>




        </div>

    )
}