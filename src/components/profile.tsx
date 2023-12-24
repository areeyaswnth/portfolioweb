const backgroundImageUrl = "https://media.discordapp.net/attachments/1027767973286510602/1188509448440926399/image.png?ex=659ac8ad&is=658853ad&hm=1425b4bb7a12df20eec52f6ac7fb6f4a23db774b27396d1da8b967ecd2586080&=&format=webp&quality=lossless&width=620&height=588";
export default function ProfilePic() {
    return (
        <div >
            <div className="w-48 h-48  rounded-full shadow-2xl"
                style={{ backgroundImage: ` url(${backgroundImageUrl})`, backgroundSize: "100% 100%" }}>
            </div>
        </div>
    )
}