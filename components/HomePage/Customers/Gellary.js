import Image from 'next/image'

// These Items should be implemented and rendered dynamically, 
// but, I could not figure out how to do the the dynamic inline style using an equation or sth like that
// Therefor, I hardcoded them

const GELLARY_ITEMS = [
    {
        title: 'TikTok',
        imageUrl: '/gellary/tiktok.jpg',
    },
    {
        title: 'Netflix Jobs',
        imageUrl: '/gellary/netflix-jobs.jpg',
    },
    {
        title: 'Twitch',
        imageUrl: '/gellary/twitch.jpg',
    },
    {
        title: 'Hulu',
        imageUrl: '/gellary/hulu.jpg',
    },
    {
        title: 'Nike',
        imageUrl: '/gellary/nike.jpg',
    },
    {
        title: 'realtor.com',
        imageUrl: '/gellary/realtor.jpg',
    },
    {
        title: 'AT&amp;T',
        imageUrl: '/gellary/att.jpg',
    },
]

const lastIndex = GELLARY_ITEMS.length - 1;


const Gellary = () => (
    <div className="mt-16 mb-8 overflow-x-hidden">

        <div className="x-lg:hidden grid grid-cols-6">
            {GELLARY_ITEMS.map((item, index) => (
                <div key={index} className={`${index !== lastIndex ? 'col-span-6 sm:col-span-2' : 'col-span-6'} p-2 rounded-7 overflow-hidden`}>
                    <Image className="rounded-5" src={item.imageUrl} alt={item.title} width={800} height={450} />
                </div>
            ))}
        </div>

        {/* <div className="hidden x-lg:flex mt-13 max-w-screen">
            <div className="relative group rounded-7 shadow-lg cursor-pointer overflow-hidden transition-all duration-600" style={{ 'z-index': '4', transform: `scale(${0}) translate3d(-4.233600241796016px, -105px, 0)`, margin: '0px calc(7.14286vw - 165px)' }}>
                <Image src={'/gellary/tiktok.jpg'} alt="TikTok" width={330} height={185} layout="intrinsic" />
                <div className="absolute bottom-0 p-4 w-full text-white text-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in">
                    <h3>TikTok</h3>
                </div>
            </div>
        </div> */}



        <div className="hidden x-lg:flex mt-13 max-w-screen">
            <div className="relative group w-330 h-185 rounded-7 shadow-lg cursor-pointer overflow-hidden transition-all duration-600" style={{ 'z-index': '4', transform: 'scale(0.6728053032038478) translate3d(-4.233600241796016px, -105px, 0)', margin: '0px calc(7.14286vw - 165px)' }}>
                <Image src={'/gellary/tiktok.jpg'} alt="TikTok" layout="fill" />
                <div className="absolute bottom-0 p-4 w-full text-white text-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in">
                    <h3>TikTok</h3>
                </div>
            </div>
            <div className="relative group w-330 h-185 rounded-7 shadow-lg cursor-pointer overflow-hidden transition-all duration-600" style={{ 'z-index': '5', transform: 'scale(0.7796022565438777) translate3d(-27.278922804770453px, -70px, 0)', margin: '0px calc(7.14286vw - 165px)' }}>
                <Image src={'/gellary/netflix-jobs.jpg'} alt="Netflix Jobs" layout="fill" />
                <div className="absolute bottom-0 p-4 w-full text-white text-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in">
                    <h3>Netflix Jobs</h3>
                </div>
            </div>
            <div className="relative group w-330 h-185 rounded-7 shadow-lg cursor-pointer overflow-hidden transition-all duration-600" style={{ 'z-index': '6', transform: 'scale(0.889117371490047) translate3d(-25.244129544236895px, -35px, 0)', margin: '0px calc(7.14286vw - 165px)' }}>
                <Image src={'/gellary/twitch.jpg'} alt="Twitch" layout="fill" />
                <div className="absolute bottom-0 p-4 w-full text-white text-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in">
                    <h3>Twitch</h3>
                </div>
            </div>
            <div className="relative group w-330 h-185 rounded-7 shadow-lg cursor-pointer overflow-hidden transition-all duration-600" style={{ 'z-index': '7', transform: 'scale(1) translate3d(0px, 0px, 0)', margin: '0px calc(7.14286vw - 165px)' }}>
                <Image src={'/gellary/hulu.jpg'} alt="Hulu" layout="fill" />
                <div className="absolute bottom-0 p-4 w-full text-white text-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in">
                    <h3>Hulu</h3>
                </div>
            </div>
            <div className="relative group w-330 h-185 rounded-7 shadow-lg cursor-pointer overflow-hidden transition-all duration-600" style={{ 'z-index': '6', transform: 'scale(0.889117371490047) translate3d(25.244129544236895px, -35px, 0)', margin: '0px calc(7.14286vw - 165px)' }}>
                <Image src={'/gellary/nike.jpg'} alt="Nike" layout="fill" />
                <div className="absolute bottom-0 p-4 w-full text-white text-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in">
                    <h3>Nike</h3>
                </div>
            </div>
            <div className="relative group w-330 h-185 rounded-7 shadow-lg cursor-pointer overflow-hidden transition-all duration-600" style={{ 'z-index': '5', transform: 'scale(0.7796022565438777) translate3d(27.278922804770453px, -70px, 0)', margin: '0px calc(7.14286vw - 165px)' }}>
                <Image src={'/gellary/realtor.jpg'} alt="realtor.com" layout="fill" />
                <div className="absolute bottom-0 p-4 w-full text-white text-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in">
                    <h3>realtor.com</h3>
                </div>
            </div>
            <div className="relative group w-330 h-185 rounded-7 shadow-lg cursor-pointer overflow-hidden transition-all duration-600" style={{ 'z-index': '4', transform: 'scale(0.6728053032038478) translate3d(4.233600241796016px, -105px, 0)', margin: '0px calc(7.14286vw - 165px)' }}>
                <Image src={'/gellary/att.jpg'} alt="AT&A" layout="fill" />
                <div className="absolute bottom-0 p-4 w-full text-white text-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in">
                    <h3>AT&amp;T</h3>
                </div>
            </div>
        </div>

    </div>
)

export default Gellary;
