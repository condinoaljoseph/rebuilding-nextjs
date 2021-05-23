import BlueButton from "../../shared/BlueButton";

const Buttons = () => (
    <div className="mb-7.5 flex flex-wrap items-center justify-center  text-center">
        <div className="p-2.5">
            <BlueButton title="Start Learning" destinationUrl="/learn/basics/create-nextjs-app?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=next-website" />
        </div>
        <div className="p-2.5">
            <a className="px-14 h-11 rounded-7 inline-flex items-center text-gray-600 bg-white shadow-gray hover:shadow-gray-md transition-all duration-150 ease-in" href="/docs">Documentation</a>
        </div>
    </div>
)

export default Buttons;
