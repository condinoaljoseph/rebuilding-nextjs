
const Slider = ({ compLogos, times = 1 }) => (

    [...Array(times)].map((_, index) => (
        <div key={index} className="inline-flex items-center">
            {compLogos.map((logo, index) => (
                <div key={index} className="px-9 opacity-20 hover:opacity-80 transition-opacity duration-200 ease-in">
                    {logo}
                </div>
            ))}
        </div>
    ))
)

export default Slider;
