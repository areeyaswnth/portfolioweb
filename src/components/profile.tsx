const backgroundImageUrl = 'https://media.discordapp.net/attachments/1027767973286510602/1186943143623536730/image.png?ex=659515f1&is=6582a0f1&hm=adae88cca510665e74d305ca0c900741ce6ea26f18b9647ba96b672fdf781967&=&format=webp&quality=lossless&width=508&height=531';
export default function ProfilePic() {
    return (
        <div >
            <div className="w-48 h-48  rounded-full shadow-2xl"
                style={{ backgroundImage: ` url(${backgroundImageUrl})`, backgroundSize: '100% 100%' }}>
            </div>
        </div>
    )
}