import { useRouter } from 'next/router'


const Feature = ({ title, description, destinationUrl: url }) => {

    const router = useRouter();

    return (
        <div onClick={() => router.push(url)} className="col-span-6 sm:col-span-3 x-lg:col-span-2 p-6 flex flex-col rounded-5 border border-opacity-70 hover:border-transparent hover:shadow-gray-lg transition-all duration-100 ease-in cursor-pointer group">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="flex-auto my-3.5 text-sm leading-6 text-gray-700" dangerouslySetInnerHTML={{ __html: description }}></p>
            <div className="inline-flex">
                <a className="text-sm text-blue-500 hover:text-blue-400 group-hover:underline transition-colors duration-200" href={url}>Documentation →</a>
            </div>
        </div>
    )
}

export default Feature;
