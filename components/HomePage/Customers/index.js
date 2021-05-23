import CaseStudyBox from './CaseStudyBox'
import Gellary from './Gellary'

import BlueButton from '../../shared/BlueButton'
import Header from '../../shared/Header'


const Customers = () => (
    <section className="py-16 x-lg:py-100 text-center border-t border-b bg-gray-50">
        <CaseStudyBox />
        <Header
            classes="mb-20"
            title="Who’s Using Next.js"
            description="We’re honored some of the most talented creatives out there build with Next.js"
        />
        <Gellary />
        <BlueButton title="View Showcase" destinationUrl="/showcase" />
    </section>
)


export default Customers;
