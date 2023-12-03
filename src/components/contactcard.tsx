export default function ContactCard() {
    return (
        <div className="w-auto max-w-sm p-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <h3>085-272-4522</h3>
            <h3>Regent Home Bangson Condo phase 28 , Bangsue , Bangkok,10800</h3>
            <h3>areeyasuwnth@gmail.com 64011028@KMITL.AC.TH</h3>
            <h3>github.com/areeyaswnth</h3>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                <a>CV.pdf</a>
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                <a>Resume.pdf</a>
            </button>
        </div>
    )

}