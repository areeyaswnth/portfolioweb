const backgroundImageUrl = 'https://media.discordapp.net/attachments/1027767973286510602/1180820590865682432/Ellipse_1.png?ex=657ecfdf&is=656c5adf&hm=a8b00c495336b4150f9405590cc82e0f6c24755bbb2fd1d176acf49e0d6ba0af&=&format=webp&quality=lossless&width=337&height=337';
export default function ProfilePic() {
    return (
        <div >
            <div className="w-48 h-48 drop-shadow-lg "
                style={{ backgroundImage: ` url(${backgroundImageUrl})`, backgroundSize: '100% 100%' }}>
            </div>
        </div>
    )
}