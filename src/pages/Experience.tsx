import ContactCard from "@/components/contactcard";
import ProfilePic from "@/components/profile";

const backgroundImageUrl = 'https://media.discordapp.net/attachments/1027767973286510602/1180814344049676368/Rectangle_3.png?ex=657eca0e&is=656c550e&hm=4e438f210be24066672e6ccbbef5aa0cd2b5dac88007a80bac655a26d393924f&=&format=webp&quality=lossless&width=1440&height=351';

export default function Contact() {
    return (
        <div className="justify-center">

            <div className="h-72 flex justify-center items-end"
                style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.0),rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 0.6)), url(${backgroundImageUrl})`, backgroundSize: '100% 100%' }}>
                <div > <ProfilePic></ProfilePic></div>
            </div>
            <div className="pt-5 text-center"><h1>Experience</h1></div>
            <div className="pt-10 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                <div className="flex items-center md:justify-center pl-96 md:odd:flex-row-reverse group is-active">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2' : ''}`}>

                    </div>
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

                </div>

                <div className="flex flex-col w-400px items-center justify-center p-10 bg-white border border-slate-950 rounded-3xl shadow-xl">
                    <a className="text-center text-2xl">Steve a w a y</a>
                    <a className="text-center text-lg"> Aug 2023 - Oct 2023</a>
                    <a className="text-center text-lg"> Game Developers </a>
                    <a className="text-center text-lg"> GDscript (Godot Engine)</a>

                    <li className="text-base">I worked on a game project for the Theory of Computation subject.
                    </li>
                    <li className="text-base">I applied Finite Automata concepts to gameplay. </li>
                    <li className="text-base">I utilized the Godot Engine and became proficient in GDscript by leveraging online learning resources like YouTube.
                    </li>

                </div>
            </div>


            <div className="flex flex-col w-400px items-center justify-center p-10 bg-white border border-slate-950 rounded-3xl shadow-xl">
                <a className="text-center text-2xl">Telephy</a>
                <a className="text-center text-lg"> Aug 2023 - Oct 2023</a>
                <a className="text-center text-lg"> Frontend Developers</a>
                <a className="text-center text-lg">Dart (Flutter)</a>
                <li className="text-base">I worked as a teaching assistant for a computer programming at a university.
                </li>
                <li className="text-base">This is a Telemedicine mobile application.</li>
                <li className="text-base">using Agile to manage the project. </li>
                <li className="text-base">I had the responsibility of the Doctor Appointment system.  </li>
            </div>

            <div className="flex flex-col w-400px items-center justify-center p-10 bg-white border border-slate-950 rounded-3xl shadow-xl">
                <a className="text-center text-2xl">Foodpool</a>
                <a className="text-center text-lg"> Mar 2023 - May 2023</a>
                <a className="text-center text-lg"> Backend Developers </a>
                <a className="text-center text-lg"> C# .ASP .NET CORE MVC</a>

                <li className="text-base">a food delivery E-commerce project
                </li>
                <li className="text-base">This project is for my Web Application Development course. </li>
                <li className="text-base"> I specifically responsible for the post and stall functions.
                </li>
            </div>
            <div className="flex flex-col w-400px items-center justify-center p-10 bg-white border border-slate-950 rounded-3xl shadow-xl">
                <a className="text-center text-2xl">Adventure & Treasure</a>
                <a className="text-center text-lg"> Aug 2021 - Oct 2021</a>
                <a className="text-center text-lg"> Game Developers </a>
                <a className="text-center text-lg"> C/C++ (SFML)</a>

                <li className="text-base">For my final project at first year in Programming Fundamentals
                </li>
                <li className="text-base">I created a game using SFML as per the requirements set by the professor.</li>
                <li className="text-base"> I designed all the illustrations in the game and wrote the code for its functionality.</li>
            </div>
        </div>

    )
}