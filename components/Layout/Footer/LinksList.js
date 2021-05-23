import Link from 'next/link'

const LinksList = ({ linksData }) => (
    <div className="col-span-2 md:col-span-1 text-gray-500">
        <h4 className="mb-5 md:mb-3.5 text-sm font-medium text-gray-900">{linksData.title}</h4>
        <ul className="flex flex-col items-start space-y-8 md:space-y-2 text-sm">
            {linksData.links.map((link, index) => (
                <p className="hover:text-gray-900 duration-200">
                    <Link key={index} href={link.url}>{link.title}</Link>
                </p>
            ))}
        </ul>
    </div>
)

export default LinksList;
