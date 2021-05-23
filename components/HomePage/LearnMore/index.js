import Link from 'next/link'
import Image from "next/image";

import Header from "../../shared/Header";
import BlueButton from "../../shared/BlueButton";


const LearnMore = () => (
    <section className="mx-auto px-4 sm:px-8 x-lg:px-4 py-16 x-lg:py-100 max-w-5xl w-full text-center">
        <Header
            classes="mb-8"
            title="Learn Next.js"
            description="Learn Next.js step-by-step and earn points ✨."
        />
        <Link href="/learn/basics/create-nextjs-app">
            <figure className="my-15 shadow-gray-lg cursor-pointer">
                <Image src="/gellary/learn.png" alt="Learn More" width={926} height={495} />
            </figure>
        </Link>
        <BlueButton title="Get Started" destinationUrl="/learn/basics/create-nextjs-app" />
    </section>
)


export default LearnMore;

