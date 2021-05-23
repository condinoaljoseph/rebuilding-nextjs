import Slider from "./Slider";
import COMPANIES_SVGS from './svgs';


const CompaniesSlider = () => (
    <section className="mt-8 mb-16 overflow-hidden">
        <div className="mb-9 inline-flex animate-move-left-fast">
            <Slider compLogos={COMPANIES_SVGS.topSlider} times={2} />
        </div>
        <div className="mb-6 inline-flex animate-move-left-slow">
            <Slider compLogos={COMPANIES_SVGS.bottomSlider} times={2} />
        </div>
    </section>
)

export default CompaniesSlider;
