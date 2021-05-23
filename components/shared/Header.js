

const Header = ({ classes, title, description }) => (
    <div className={`${classes} px-2.5 text-center`}>
        <h2 className="mb-4 text-32 font-semibold tracking-tight text-gray-900">{title}</h2>
        <h3 className="text-gray-700">{description}</h3>
    </div>
)

export default Header;
