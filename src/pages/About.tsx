import ContactCard from "@/components/contactcard";
import ProfilePic from "@/components/profile";
import { Container } from "@mui/material";

const backgroundImageUrl = 'https://media.discordapp.net/attachments/1027767973286510602/1180814344049676368/Rectangle_3.png?ex=657eca0e&is=656c550e&hm=4e438f210be24066672e6ccbbef5aa0cd2b5dac88007a80bac655a26d393924f&=&format=webp&quality=lossless&width=1440&height=351';

export default function About() {
    return (
        <div className="justify-center">
            <div className="h-72   flex justify-center items-end"
                style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.0),rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 0.6)), url(${backgroundImageUrl})`, backgroundSize: '100% 100%' }}>
                <div > <ProfilePic></ProfilePic></div>
            </div>
            <div className="pt-5 text-center"><h1>About me</h1></div>
            <div className=" p-3 flex justify-center">
                <div className="w-700px items-center justify-center  p-16 bg-white border border-slate-950 rounded-3xl ">
                    <a>   Being a third-year computer engineering student at King Mongkut's Institute of Technology Ladkrabang, I have a strong passion for software development. My primary goal is to enhance my learning experiences and continually improve my skills in this field.</a>
                </div>
            </div>
            <div className="pt-5 text-center"><h1>Personal Data</h1></div>
            <div className=" p-3 flex justify-center">
                <div className="w-700px items-center justify-center  p-16 bg-white border border-slate-950 rounded-3xl ">
                    <div className="grid grid-cols-3">
                        <a>Age</a>
                        <a>:</a>
                        <a>20 years old</a>
                        <a>Date of birth</a>
                        <a>:</a>
                        <a>31 March 2003</a>
                        <a>Gender</a>
                        <a>:</a>
                        <a>Female</a>
                        <a>Nationality</a>
                        <a>:</a>
                        <a>Thai</a>
                    </div>
                </div>
            </div>
            <div className="pt-5 text-center"><h1>Skills</h1></div>
            <div className=" p-3 flex justify-center">
                <div className="w-500px items-center justify-center  p-16 bg-white border border-slate-950 rounded-3xl ">

                    <div className="text-xl">Programming</div>
                    <li className="text-lg">Computer langauese</li>
                    <a>Python , C/C++ , C# , Java , Javascript, GDscript, SQL , CSS , HTML , Dart , Typescript , Go</a>
                    <li >Framework and Platform</li>
                    <a>.NET Core MVC , Flutter , SFML , JavaFx , React , Bootstrap , Dialogflow , Figma ,Next.js , Tailwind</a>
                </div>
                <div className="w-500px items-center justify-center  p-16 bg-white border border-slate-950 rounded-3xl ">
                    <h3>Interpersonal skills</h3>
                    <li style={{ fontFamily: "'Source Code Pro', monospace" }}>Time management</li>
                    <li>work well in Collaboration</li>
                    <li>creative ideas</li>
                    <li>Good understanding about programming </li>
                </div>
            </div>
            <div className="pt-5 text-center"><h1>Interested</h1></div>
            <div className=" p-3 flex justify-center">
                <div className="w-auto items-center justify-center max-w-sm p-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="grid grid-cols-2">
                        <div>
                            <li>Algorithm </li>
                            <li>Data struct</li>
                        </div>
                        <div>
                            <li>Literature book</li>
                            <li>Arts , Music </li>
                            <li>Game/puzzle game</li>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}