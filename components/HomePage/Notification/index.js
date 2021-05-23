
const Notification = () => (
    <div className="mx-auto px-2 mt-5 max-w-5xl w-full flex">
        <div className="mx-auto p-2.5 h-1200 rounded-lg flex items-center justify-center bg-gray-50 border-2 group">
            <a className="text-sm text-gray-800 leading-6" href="/blog/next-10-1">
                <span className="mr-2 px-2 py-0.5 h-5.5 inline-flex rounded-5 text-sm leading-5 font-bold uppercase text-white bg-gradient-to-r from-pink-400 to-rose-500">New</span>
                <div className="mt-2.5 md:hidden"></div>
                <b className="text-gray-900">Next.js Conf</b>  – A special event to improve how you develop for the web.<b className="text-gray-900 group-hover:text-blue-600 transition-colors"> Claim Ticket </b><svg className="w-3.5 h-3.5 inline group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
        </div>
    </div>
)

export default Notification;
