import ContactCard from "@/components/contactcard";
import ProfilePic from "@/components/profile";

const backgroundImageUrl = "https://media.discordapp.net/attachments/1027767973286510602/1180814344049676368/Rectangle_3.png?ex=657eca0e&is=656c550e&hm=4e438f210be24066672e6ccbbef5aa0cd2b5dac88007a80bac655a26d393924f&=&format=webp&quality=lossless&width=1440&height=351";

export default function Contact() {
    return (
        <div className="justify-center">
            <div className="h-72 flex justify-center items-end"
                style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.0),rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 0.6)), url(${backgroundImageUrl})`, backgroundSize: "100% 100%" }}>
                <div > <ProfilePic></ProfilePic></div>
            </div>
            <div className="pt-5 text-center"><h1>Contact</h1></div>
            <div className=" p-3 flex justify-center"><ContactCard></ContactCard></div>
        </div>

    )
}