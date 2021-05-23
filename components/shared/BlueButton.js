

const BlueButton = ({ title, destinationUrl, classes }) => (
    <a href={destinationUrl} className={` ${classes} px-14 h-11 inline-flex items-center rounded-7 shadow-blue hover:shadow-blue-md text-white bg-blue-500 hover:bg-opacity-90 transition-all duration-200 ease-in`}>
        {title}
    </a>
)

export default BlueButton;
