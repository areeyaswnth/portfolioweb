
import ProfilePic from "@/components/profile";

const backgroundImageUrl = "https://media.discordapp.net/attachments/1027767973286510602/1180814344049676368/Rectangle_3.png?ex=657eca0e&is=656c550e&hm=4e438f210be24066672e6ccbbef5aa0cd2b5dac88007a80bac655a26d393924f&=&format=webp&quality=lossless&width=1440&height=351";

export default function About() {
    return (
        <div className="justify-center bg-gradient-to-t from-gray-100 ">
            <div className="h-72   flex justify-center items-end"
                style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.0),rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 0.6)), url(${backgroundImageUrl})`, backgroundSize: "100% 100%" }}>
                <div > <ProfilePic></ProfilePic></div>
            </div>
            <div className="pt-5 text-center drop-shadow-md"><h1>About me</h1></div>
            <div className=" p-3 flex justify-center">
                <div className="w-850px items-center justify-center  p-16 bg-white border border-slate-950 rounded-3xl shadow-xl ">
                    <a>   (&apos;) Being a third-year computer engineering student at King Mongkut&apos;s Institute of Technology Ladkrabang, I have a strong passion for software development. My primary goal is to enhance my learning experiences and continually improve my skills in this field.</a>
                </div>
            </div>
            <div className="pt-5 text-center"><h1 className="drop-shadow-md">Personal Data</h1></div>
            <div className=" p-3 flex justify-center">
                <div className="w-850px items-center justify-center  p-16 bg-white border border-slate-950 rounded-3xl shadow-xl ">
                    <div className="grid grid-cols-3">
                        <a className="text-lg">Age</a>
                        <a>:</a>
                        <a>20 years old</a>
                        <a className="text-lg">Date of birth</a>
                        <a>:</a>
                        <a>31 March 2003</a>
                        <a className="text-lg">Gender</a>
                        <a>:</a>
                        <a>Female</a>
                        <a className="text-lg" >Nationality</a>
                        <a>:</a>
                        <a>Thai</a>
                    </div>
                </div>
            </div>
            <div className="pt-5 text-center "><h1 className="drop-shadow-md ">Skills</h1></div>
            <div className=" p-3 flex justify-center">
                <div className="w-400px items-center justify-center  p-16 bg-white border border-slate-950 rounded-3xl shadow-xl ">

                    <div className="text-2xl  ">Programming</div>
                    <li className="text-lg">Computer langauese</li>
                    <a>Python , C/C++ , C# , Java , Javascript, GDscript, SQL , CSS , HTML , Dart , Typescript , Go</a>
                    <li className="text-lg">Framework and Platform</li>
                    <a>.NET Core MVC , Flutter , SFML , JavaFx , React , Bootstrap , Dialogflow , Figma ,Next.js , Tailwind</a>
                </div>
                <div className="px-5"></div>
                <div className="w-400px items-center justify-center  p-16 bg-white border border-slate-950 rounded-3xl shadow-xl ">
                    <div className="text-2xl">Interpersonal skills</div>
                    <li className="text-lg">Time management</li>
                    <li className="text-lg">work well in Collaboration</li>
                    <li className="text-lg">creative ideas</li>
                    <li className="text-lg">Good understanding about programming </li>
                </div>
            </div>
            <div className="pt-5 text-center drop-shadow-md "><h1>Interested</h1></div>
            <div className=" p-3 flex justify-center">
                <div className="w-850px items-center justify-center  p-16 bg-white border border-slate-950 rounded-3xl shadow-xl  ">
                    <div className="grid grid-cols-2">
                        <div>
                            <li className="text-lg">Algorithm </li>
                            <li className="text-lg">Data struct</li>
                        </div>
                        <div>
                            <li className="text-lg">Literature book</li>
                            <li className="text-lg">Arts , Music </li>
                            <li className="text-lg">Game/puzzle game</li>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}